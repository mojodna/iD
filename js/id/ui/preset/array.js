iD.ui.preset.array = function(field, context) {
  // TODO: Make this deal with arrays instead of basically nothing

  var event = d3.dispatch('change'),
    wrap,
    formFields = [{}],
    hiddenInput,
    inputArea,
    parsedObj = {},
    presets = [{}];

  function getFormFieldObj(fieldName) {
    var returnValue;
    if (wrap && fieldName) {
      wrap.selectAll('div').selectAll('.form-field').map(function(formField) {
        // This is a hack to allow us to use slashes in the class identifier
        if (
          formField.parentNode.className
          .split(' ')
          .indexOf('form-field-' + field.id + '/' + fieldName) >= 0
        ) {
          returnValue = d3.select(formField.parentNode);
        }
      });
    }
    return returnValue;
  }


  function jsonArray(selection) {
    selection.selectAll('.json-wrap')
      .remove();

    wrap = selection.append('div')
      .attr('class', 'json-wrap');

    inputArea = wrap.selectAll('div').data(field.fields.map(function(fieldName) {
        var returnValue = _.clone(iD.data.presets.fields[fieldName]);
        returnValue.id = fieldName;
        return returnValue;
      })).enter()
      .append('div')
      .attr('class', function(subField) {
        return 'form-field form-field-' + field.id + '/' + subField.id;
      });

    hiddenInput = wrap.selectAll('.json-main')
      .data([0])
      .enter()
      .append('input')
      .attr('tabindex', '-1')
      .attr('text', field.placeholder())
      .attr('type', 'hidden')
      .attr('id', 'present-input-' + field.id)
      .attr('class', 'json-main');

    field.fields.map(function(fieldName) {
      var formFieldObj = getFormFieldObj(fieldName),
        preset;
      if (formFieldObj) {
        preset = _.clone(iD.data.presets.fields[fieldName]);
        // Functionify (or update) the placeholder
        preset.placeholder = function() {
          return iD.data.presets.fields[fieldName].placeholder;
        };
        preset.id = field.id + '/' + fieldName;
        preset.key = fieldName;

        // Add the header
        formFieldObj.selectAll('.form-label-button-wrap')
          .data([preset.label])
          .enter()
          .insert('label', ':first-child')
          .attr('class', 'form-label')
          .text(function(d) {
            return d;
          });
        // Add the preset
        presets[0][fieldName] = iD.ui.preset[preset.type](preset, context);
        formFields[0][fieldName] = formFieldObj;

        presets[0][fieldName](formFieldObj);
        presets[0][fieldName]
          .on('change', change);

        window.boatRamp = {
          wrap: wrap,
          hiddenInput: hiddenInput
        };
      }
    });
  }

  function change(newValue) {
    var key, t = {};
    if (!parsedObj) {
      parsedObj = [{}];
    }
    for (key in newValue) {
      parsedObj[0][key] = newValue[key];
    }
    hiddenInput.attr('value', JSON.stringify(parsedObj));
    t[field.key] = hiddenInput.value();
    event.change(t);
    return {};
  }


  jsonArray.tags = function(tags) {
    // Parse the tag or return none
    hiddenInput.attr('value', tags[field.key]);

    try {
      parsedObj = JSON.parse(hiddenInput.value());
      parsedObj = (Array.isArray(parsedObj)) ? parsedObj : [parsedObj];
    } catch (err) {
      parsedObj = null;
      return parsedObj;
    }

    // TODO: Get arrays to work (remove the next line)
    parsedObj = [parsedObj][0];

    parsedObj.map(function(record /*, index*/ ) {
      var key,
        formFieldObj;
      for (key in record) {
        if (presets[0][key]) {
          formFieldObj = presets[0][key];
          formFieldObj.tags(record);
        }
      }
    });
  };

  jsonArray.focus = function() {
    /*
    presets.map(function(input) {
      console.log(input);
      // input.node().focus();
    });
    */
  };

  return d3.rebind(jsonArray, event, 'on');
};
