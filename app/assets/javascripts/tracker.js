let path = "";

$(document).bind("DOMSubtreeModified", function() {
  if (path != window.location.pathname) {
    track();
    path = window.location.pathname;
  }
});

function build_guid() {
  const nav = window.navigator;
  const screen = window.screen;
  let guid = nav.mimeTypes.length;
  guid += nav.userAgent.replace(/\D+/g, "");
  guid += nav.plugins.length;
  guid += screen.height || "";
  guid += screen.width || "";
  guid += screen.pixelDepth || "";

  return guid;
}

function track() {
  let formData = new FormData();
  formData.append("guid", build_guid());
  formData.append("url", window.location.href);
  const result = Rails.ajax({
    url: "/visits",
    type: "POST",
    data: formData,
    beforeSend: function() {
      return true;
    },
    success: function(msg) {
      console.log(msg);
    },
    error: function(errors) {
      console.log(errors);
    }
  });
}
