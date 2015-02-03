// NOTE: add a body class if the frame is embedded in an iframe
if(window.self !== window.top) {
  $('body').addClass('embedded-iframe');
}

Discourse.MessageBus.subscribe("/logout", function (user_id) {
  console.log('You have been logged out');
  //refresh!!!
  var refresher = function() {
    var redirect = Discourse.SiteSettings.logout_redirect;
    if(redirect.length === 0){
      window.location.href = Discourse.getURL('/session/sso?return_path='+encodeURIComponent(window.location.pathname));
    } else {
      window.location.href = redirect;
    }
  };
  refresher();
  // bootbox.dialog(I18n.t("logout"), {label: I18n.t("refresh"), callback: refresher}, {onEscape: refresher, backdrop: 'static'});
});