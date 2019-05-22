// let href = "";

// window.onclick = function() {
//   if (window.location.href != href) {
//     track();
//     href = window.location.href;
//   }
// };
$(document).on("click", "a", function() {
  track();
});
window.onload = function() {
  track();
};

function track() {
  let url = window.location.pathname;
  const nav = window.navigator;
  const screen = window.screen;
  let guid = nav.mimeTypes.length;
  guid += nav.userAgent.replace(/\D+/g, "");
  guid += nav.plugins.length;
  guid += screen.height || "";
  guid += screen.width || "";
  guid += screen.pixelDepth || "";

  let formData = new FormData();
  formData.append("guid", guid);
  formData.append("url", url);
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
