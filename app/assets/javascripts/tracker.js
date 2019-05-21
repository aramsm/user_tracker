// let href = "";

// window.onclick = function() {
//   if (window.location.href != href) {
//     track();
//     href = window.location.href;
//   }
// };

window.onload = function() {
  window.addEventListener('popstate', tracker());
  window.addEventListener('pushState', tracker());
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

  // let request = new XMLHttpRequest();
  // request.open("post", "http://localhost:3000/visits");

  // let formData = new FormData();
  // formData.append("guid", guid);
  // formData.append("url", url);
  // console.log("formData", formData);
  // let result = request.send(formData);
  const result = Rails.ajax({
    url: "/visits",
    type: "POST",
    data:
      "guid=TESTE&url=TESTE",
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
  console.log("RESULT", result);
}
