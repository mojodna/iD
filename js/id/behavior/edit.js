iD.behavior.Edit = function(context) {
    function edit() {
        context.map()
            .minzoom(iD.npmap.settings.editting.minZoom);
    }

    edit.off = function() {
        context.map()
            .minzoom(0);
    };

    return edit;
};
