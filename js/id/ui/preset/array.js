iD.ui.preset.array = function(field, context) {
  // TODO: Make this deal with arrays instead of basically nothing

  var event = d3.dispatch('change'),
    wrap,
    formFields = [{}],
    hiddenInput,
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

    hiddenInput = wrap.selectAll('.json-main')
      .data([0])
      .enter()
      .append('input')
      .attr('tabindex', '-1')
      .attr('text', field.placeholder())
      .attr('type', 'hidden')
      .attr('id', 'present-input-' + field.id)
      .attr('class', 'json-main');

  }

  function addEntries(tags) {
    var dispFields = [];
    for (var i = 0; i < tags.length; i++) {
      dispFields.push(
        field.fields.map(function(d) {
          console.log(d);
          var preset = _.clone(iD.data.presets.fields[d]);
          console.log(preset);
          // Functionify (or update) the placeholder
          preset.placeholder = function() {
            return iD.data.presets.fields[d].placeholder;
          };
          preset.index = i;
          preset.id = field.id + '/' + d;
          preset.input = iD.ui.preset[preset.type](preset, context)
            .on('change', function(newValue) {
              return change(preset.index, newValue);
            });
          preset.tags = tags[i];
          // preset.key = preset.id;
          return preset;
        })
      );
    }

    var diventer = wrap.selectAll('.json-wrap')
      .data(dispFields)
      .enter()
      .append('div')
      .attr('class', 'json-entry')
      .selectAll('.json-entry')
      .data(
        function(d) {
          return d;
        })
      .enter()
      .append('div')
      .attr('class', function(d) {
        return 'form-field form-field-' + d.id;
      });

    diventer.insert('label', ':first-child')
      .attr('class', 'form-label')
      .text(function(d) {
        return d.label;
      });

    diventer.each(function(f) {
      f.input(d3.select(this));
      f.input.tags(f.tags);
    });



    /*
    insert('div', ':last-child')
      .text(function(d) {
        console.log(d3.selectAll(this));
        iD.ui.preset[d.type](d, context)(d3.selectAll(this));
        return null;
      });
    */

    /*
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
      }
    });
    */

  }

  function change(index, newValue) {
    console.log('newValue', newValue);
    var key, t = {};
    if (!parsedObj) {
      parsedObj = [{}];
    }
    for (key in newValue) {
      parsedObj[index][key] = newValue[key];
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

    addEntries(parsedObj);

    /*    parsedObj.map(function(record, index) {
          var key,
            formFieldObj;
          for (key in record) {
            if (presets[index][key]) {
              formFieldObj = presets[index][key];
              formFieldObj.tags(record);
            }
          }
        });
        */
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
