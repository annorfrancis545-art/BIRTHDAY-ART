# Birthday Gift Website

A special interactive birthday gift website with QR code access, animations, photos, videos, and love messages.

## Setup

1. Clone or download this repository
2. Add your images to the `images/` folder:
   - `pic1.png`, `pic2.png`, `pic3.png` - Your photos
   - `cover.png` - A special cover image
3. Add audio files to the `audio/` folder:
   - `intro.mp3` - Background music for intro/countdown
   - `slideshow.mp3` - Music for photo slideshow
   - `video.mp3` - Music for video section
   - `letter.mp3` - Music while typing the message
   - `heart.mp3` - Music for final heart collage
4. Add video to `videos/memories.mp4` - Your memory video
5. Host on GitHub Pages:
   - Go to repository Settings > Pages
   - Set source to "main" branch
   - The site will be available at `https://yourusername.github.io/repository-name/`
6. Update `qr.js` with your actual GitHub Pages URL
7. Send the link to `qr.html` to your girlfriend

## Features

- Heart-shaped QR code for initial access
- Animated countdown and gift opening
- Photo slideshow with smooth transitions
- Typed love message
- Memory video playback
- Heart-shaped photo collage
- Background music that changes with each section
- HD animations and effects
- Mobile-responsive design

## Customization

Edit `gift.js` to personalize:

- `herName`: Change the recipient's name
- `message`: Your birthday message
- `slides`: Array of image paths
- `audios`: Audio file paths

Enjoy making this special gift! 🎉
