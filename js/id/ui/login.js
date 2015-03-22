iD.ui.Login = function(context, popupLocation) {
  return function(selection) {

    var modal = iD.ui.modal(selection, false, {
      'beforeClose': function(callback) {
        // Re-enabled save
        // TODO: Re-enable the save button
        callback();
      }
    });
    window.closeLogin = modal.close;

    modal.select('.modal')
      .attr('class', 'modal col5');

    var introModal = modal.select('.content')
      .append('div')
      .attr('class', 'fillL');

    introModal.append('div')
      .attr('class', 'modal-section cf')
      .append('h3').text('Log into Places');

    var container = introModal.append('div').attr('class', 'modal-actions cf');
    container.append('iframe')
      .attr('src', popupLocation)
      .attr('scrolling', 'no')
      .attr('style', 'height:302px;width:100%;');
  };
};
