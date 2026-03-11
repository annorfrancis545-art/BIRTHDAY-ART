const params = new URLSearchParams(window.location.search);

// GitHub Pages deployment URL
const targetUrl =
  params.get("target") ||
  "https://annorfrancis545-art.github.io/BIRTHDAY-ART/gift.html";

new QRCode(document.getElementById("qrcode"), {
  text: targetUrl,
  width: 256,
  height: 256,
  colorDark: "#111111",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
