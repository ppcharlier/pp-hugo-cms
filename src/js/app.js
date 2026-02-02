// JS Goes here - ES6 supported

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
