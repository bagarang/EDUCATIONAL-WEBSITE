function loadGame(gamePath) {

  // Target canvas
  window.EJS_player = '#game';

  // Core
  window.EJS_core = 'psx';

  // BIOS
  window.EJS_biosUrl = 'bios/ps1/scph1001.bin';

  // ROM
  window.EJS_gameUrl = 'roms/ps1/' + gamePath;

  // Emulator location
  window.EJS_emulator = 'emulator/ps1/';

  // Clear previous emulator
  document.getElementById('game').innerHTML = '';

  // Load EmulatorJS
  const script = document.createElement('script');
  script.src = 'https://www.emulatorjs.com/loader.js';
  document.body.appendChild(script);
}
