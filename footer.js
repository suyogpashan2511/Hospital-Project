function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((err) => console.warn("Error loading HTML:", err));
}

loadHTML("footer.html", "footer");
