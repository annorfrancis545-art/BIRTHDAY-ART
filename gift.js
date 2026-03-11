const config = {
  herName: "FOREHEAD",
  message: `Happy Birthday, my beautiful girl. ❤

From the very beginning, there has been something so special about you.
Your smile, your presence, your energy, and the way you carry your heart make you unforgettable.

Today, I just want you to know that you are deeply appreciated.
You deserve joy, peace, laughter, soft love, and every beautiful thing life can offer.

May this new year of your life bring you happiness, favor, success, and moments that make your heart full.

Enjoy your day, birthday girl.
You are precious.
You are beautiful.
And today is all about you. ❤`,
  slides: [
    "images/pic1.jpeg",
    "images/pic2.png",
    "images/pic3.png",
    "images/cover.jpeg",
    "images/pic4.jpeg",
  ],
  audios: {
    intro: "audio/intro.mp3",
    slideshow: "audio/slideshow.mp3",
    video: "audio/video.mp3",
    letter: "audio/letter.mp3",
    heart: "audio/heart.mp3",
  },
};

const screens = {
  start: document.getElementById("screen-start"),
  countdown: document.getElementById("screen-countdown"),
  title: document.getElementById("screen-title"),
  giftbox: document.getElementById("screen-giftbox"),
  slideshow: document.getElementById("screen-slideshow"),
  letter: document.getElementById("screen-letter"),
  video: document.getElementById("screen-video"),
  heart: document.getElementById("screen-heart"),
};

const bgMusic = document.getElementById("bgMusic");
const openGiftBtn = document.getElementById("openGiftBtn");
const unwrapBtn = document.getElementById("unwrapBtn");
const nextToVideoBtn = document.getElementById("nextToVideoBtn");
const nextToHeartBtn = document.getElementById("nextToHeartBtn");
const countNumber = document.getElementById("countNumber");
const slideImage = document.getElementById("slideImage");
const dots = document.getElementById("dots");
const typedText = document.getElementById("typedText");
const giftBox = document.getElementById("giftBox");
const memoryVideo = document.getElementById("memoryVideo");

function showScreen(screenEl) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screenEl.classList.add("active");
}

function startMusic(audioSrc) {
  if (!bgMusic) return;
  bgMusic.src = audioSrc;
  bgMusic.volume = 0.6;
  bgMusic.play().catch(() => {});
}

function createMatrix() {
  const matrix = document.getElementById("matrixBg");
  const width = window.innerWidth;
  const cols = Math.floor(width / 22);

  matrix.innerHTML = "";

  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "matrix-col";
    col.style.left = `${i * 22}px`;
    col.style.animationDuration = `${6 + Math.random() * 6}s`;
    col.style.animationDelay = `${Math.random() * 4}s`;
    col.style.opacity = `${0.35 + Math.random() * 0.6}`;

    let text = "";
    const chars = "0101100101❤❤✦✧01";
    const lines = 55 + Math.floor(Math.random() * 35);

    for (let j = 0; j < lines; j++) {
      text += chars[Math.floor(Math.random() * chars.length)] + "\n";
    }

    col.textContent = text;
    matrix.appendChild(col);
  }
}

function createSparkles() {
  const wrap = document.getElementById("sparkles");
  wrap.innerHTML = "";

  for (let i = 0; i < 60; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${Math.random() * 100}%`;
    s.style.animationDelay = `${Math.random() * 3}s`;
    s.style.animationDuration = `${1.8 + Math.random() * 2.5}s`;
    wrap.appendChild(s);
  }
}

function startFloatingHearts() {
  const wrap = document.getElementById("floatingHearts");

  setInterval(() => {
    const h = document.createElement("div");
    h.className = "float-heart";
    h.textContent = Math.random() > 0.5 ? "❤" : "♡";
    h.style.left = `${Math.random() * 100}%`;
    h.style.fontSize = `${14 + Math.random() * 32}px`;
    h.style.animationDuration = `${4 + Math.random() * 3}s`;
    wrap.appendChild(h);

    setTimeout(() => h.remove(), 8000);
  }, 300);
}

async function runCountdown() {
  showScreen(screens.countdown);

  const nums = ["3", "2", "1"];
  for (const n of nums) {
    countNumber.textContent = n;
    await wait(1000);
  }
}

async function runTitle() {
  showScreen(screens.title);
  await wait(2400);
}

async function runGiftBox() {
  showScreen(screens.giftbox);
}

function setupSlides() {
  dots.innerHTML = "";
  config.slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dots.appendChild(dot);
  });
}

async function playSlides() {
  showScreen(screens.slideshow);
  setupSlides();

  for (let i = 0; i < config.slides.length * 2; i++) {
    const idx = i % config.slides.length;
    slideImage.src = config.slides[idx];

    [...dots.children].forEach((d, n) => {
      d.classList.toggle("active", n === idx);
    });

    await wait(1800);
  }
}

async function typeMessage(text) {
  typedText.textContent = "";
  showScreen(screens.letter);

  let i = 0;
  return new Promise((resolve) => {
    const timer = setInterval(() => {
      typedText.textContent += text[i];
      i++;

      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, 28);
  });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function beginExperience() {
  startMusic(config.audios.intro);
  await runCountdown();
  await runTitle();
  await runGiftBox();
}

openGiftBtn.addEventListener("click", beginExperience);

unwrapBtn.addEventListener("click", async () => {
  giftBox.classList.add("open");
  unwrapBtn.disabled = true;
  unwrapBtn.textContent = "Opening...";
  await wait(1600);
  startMusic(config.audios.slideshow);
  await playSlides();
  startMusic(config.audios.letter);
  await typeMessage(config.message);
});

nextToVideoBtn.addEventListener("click", () => {
  startMusic(config.audios.video);
  showScreen(screens.video);
  memoryVideo.play().catch(() => {});
});

nextToHeartBtn.addEventListener("click", () => {
  startMusic(config.audios.heart);
  showScreen(screens.heart);
});

createMatrix();
createSparkles();
startFloatingHearts();

window.addEventListener("resize", createMatrix);
