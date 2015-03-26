iD.ui.preset.array= function(field) {
  // TODO: Make this deal with arrays instead of basically nothing

    var event = d3.dispatch('change'),
        wrap,
        inputs = [];

    function jsonArray(selection) {

        selection.selectAll('.preset-input-wrap')
            .remove();

        wrap = selection.append('div')
            .attr('class', 'preset-input-wrap');

        if (field.fields) {
          field.fields.map(function(subFieldName) {
            var subField = iD.data.presets.fields[subFieldName];
            inputs.push(iD.ui.preset[subField.type](subField, wrap));
          });
        }

        inputs.map(function(input) {
          input.value = 'dummy value';
          input.on('change', event.change);
        });
    }

    function change() {
      return {};
    }

    jsonArray.tags = function(tags) {
        inputs.map(function(input) {
          input.value(tags[field.key] || '');
        });
    };

    jsonArray.focus = function() {
      inputs.map(function(input) {
        input.node().focus();
      });
    };

    return d3.rebind(jsonArray, event, 'on');
};
