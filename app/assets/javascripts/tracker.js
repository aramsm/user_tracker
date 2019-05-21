let href = "";

window.onclick = function() {
  if (window.location.href != href) {
    track();
    href = window.location.href;
  }
};

window.onload = function() {
  track();
};

function track() {
  let url = window.location.pathname;
  let nav = window.navigator;
  let screen = window.screen;
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
      "guid=TESTE&url=TESTE&utf8=✓&authenticity_token=VObR3GLmBVn8V7V+X0LTTI7ljEb9rt1zyZEYDds7K0nHES9FhOeXqvzkh7duE9ZndMA9loiPZ4LDjV4RwSJWUw==&commit=Submit",
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
