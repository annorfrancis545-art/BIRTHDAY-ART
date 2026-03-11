const params = new URLSearchParams(window.location.search);

// after hosting, pass:
// qr.html?target=https://your-site.netlify.app/gift.html
const targetUrl =
  params.get("target") || "https://your-site.netlify.app/gift.html";

new QRCode(document.getElementById("qrcode"), {
  text: targetUrl,
  width: 256,
  height: 256,
  colorDark: "#111111",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
