# `~/terminal` — ASCII Interactive System

retro-styled interactive terminal interface featuring advanced ASCII animation, CRT effects, glitch simulation, modular navigation, and a fully scripted boot sequence.  
Includes dynamic sidebars, noise overlays, live system logs, typewriter effects, WebAudio keypress sounds, and a Yin-Yang ASCII intro animation.


## 🚀 Main Features

### 🎨 ASCII Engine
- Progressive typewriter animation for the Yin-Yang intro.
- Glitch engine mutates characters in real-time for a “corrupted digital” feel.
- Dynamic ASCII rendering for the skull art and the portrait in the *about* module.

### 🖥️ Retro Terminal Mode
- CRT scanline overlay.
- SVG-based analog noise layer.
- IBM Plex Mono typography, ideal for ASCII graphics.

### ⚙️ Modular Operating-System-Like UI
Each module loads with a typewriter effect:

**Modules included:**
- `about_me` → Skull ASCII + bio info  
- `projects` → Mock project listings with system-log style  
- `contact` → Email + GitHub link  
- `logs` → Real-time timestamped event log  

### ♻️ Boot Sequence Simulation
- Kernel-style boot messages.
- Debug Console receives system events (`SYSTEM_READY`, `MODULE_LOAD`).
- Uptime counter updates in real time.

### 🎧 WebAudio Keypress Engine
- Unlocks automatically on first user interaction.
- Triangle oscillator for mechanical key sounds.
- Slight pitch randomness per keystroke.

### 🧩 Dynamic Sidebars
- **Left sidebar:** ASCII logo + navigation.  
- **Right sidebar:** system info, heap memory monitor, and debug console.  
- Continuous glitch animation for the logo.  
- Light/dark mode toggle + dynamic language switching.

---

## 📂 Project Structure
- index.html # main file
- ascii/ # ASCII artworks (intro + modules)
- styles/ # inline CSS styling (inside index.html)
- js/ # system engine (inside index.html)
- assets/ # noise/overlays/fonts (optional)


---

## 🛠️ Technologies Used

- **HTML5** (single static file)
- **CSS3** (CRT + glitch effects)
- **Vanilla JavaScript** (no frameworks)
- **WebAudio API**
- **IBM Plex Mono** (Google Fonts)


## ▶️ How to Run

1. Download the project.  
2. Open **index.html** in any modern browser.  
3. Click the Yin-Yang ASCII to boot the system.

No build steps — no dependencies — no npm.  
Runs entirely client-side, like a real retro terminal.


## 🌐 Internationalization

Supported languages:

-  English

- Spanish (default) 


## 🌓 Themes

- dark_mode
- light_mode

Both can be toggled during the intro or while the system is running.

