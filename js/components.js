document.addEventListener("DOMContentLoaded", () => {
  fetch("components.html")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      // Inject Footer
      const footerTemplate = doc.getElementById("site-footer-template");
      const footerTarget = document.getElementById("footer-placeholder");
      if (footerTemplate && footerTarget) {
        footerTarget.replaceWith(footerTemplate.content.cloneNode(true));
      }
    });
});
