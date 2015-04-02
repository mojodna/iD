iD.ui.preset.array = function(field, context) {
  // TODO: Make this deal with arrays instead of basically nothing

  var event = d3.dispatch('change'),
    wrap,
    hiddenInput,
    parsedObj = {};

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

  function matchFields(availFields, tags, index) {
    return availFields.map(function(d) {
      var preset = _.clone(iD.data.presets.fields[d]);
      // Functionify (or update) the placeholder
      preset.placeholder = function() {
        return iD.data.presets.fields[d].placeholder;
      };
      preset.index = index;
      preset.id = field.id + '/' + d;
      preset.tags = tags;
      preset.input = iD.ui.preset[preset.type](preset, context)
        .on('change', function(newValue) {
          return change(preset.index, newValue);
        });
      // preset.key = preset.id;
      return preset;
    });

  }

  function addEntries(tagArray) {
    var dispFields = [];
    for (var i = 0; i < tagArray.length; i++) {
      dispFields.push(matchFields(field.fields, tagArray[i], i));
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
      }).append('button')
      .attr('class', 'minor remove')
      .on('click', function(d) {
        d3.event.preventDefault();
        for (var tag in d.tags) {
          if (tag === d.key || tag.match(new RegExp(d.key + ':([a-zA-Z_-]+)$'))) {
            d.tags[tag] = '';
          }
        }
        change(d.index, d.tags);
      })
      .append('span').attr('class', 'icon delete');


    diventer.each(function(f) {
        f.input(d3.select(this));
        f.input.tags(f.tags, 0);
    });
  }

  function change(index, newValue) {
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
  };

  jsonArray.focus = function() {};

  return d3.rebind(jsonArray, event, 'on');
};
