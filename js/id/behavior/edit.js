iD.behavior.Edit = function(context) {
    function edit() {
        context.map()
            .minzoom(iD.npmap.settings.editing.minZoom < context.minEditableZoom() ? iD.npmap.settings.editing.minZoom : context.minEditableZoom());
    }

    edit.off = function() {
        context.map()
            .minzoom(0);
    };

    return edit;
};
