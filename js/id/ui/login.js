iD.ui.Login = function(context, loginFunction) {
    return function(selection) {

        var modal = iD.ui.modal(selection);

        modal.select('.modal')
            .attr('class', 'modal col3');

        var introModal = modal.select('.content')
            .append('div')
            .attr('class', 'fillL');

        introModal.append('div')
            .attr('class','modal-section cf')
            .append('h3').text('Login Required');


        var buttons = introModal.append('div').attr('class', 'modal-actions cf');

        buttons.append('button')
            .attr('class', 'restore col12')
            .text('Continue to Login')
            .on('click', function() {
                loginFunction();
                modal.close();
            });

    };
};
