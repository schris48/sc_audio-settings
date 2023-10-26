videojs.registerPlugin('settingsPlugin', function () {
  const player = this;

  // Reference to the Settings button
  const settingsButton = player.controlBar.addChild('button', {
    text: 'Settings', // Button text (or you can add an icon here)
    el: videojs.createEl('button', {
      className: 'vjs-settings-button',
      onclick: function () {
        // Toggle the menu on button click
        if (menuEl.style.display === 'none') {
          menuEl.style.display = 'block';
        } else {
          menuEl.style.display = 'none';
        }
      },
    }),
  });

  // Create the menu
  const menuEl = videojs.createEl('div', {
    className: 'vjs-menu',
  });
  settingsButton.el().appendChild(menuEl);

  // Add menu items (Captions and Audio Track)
  const captionsItem = videojs.createEl('li', {
    className: 'vjs-menu-item',
    textContent: 'Captions',
  });
  menuEl.appendChild(captionsItem);

  const audioTrackItem = videojs.createEl('li', {
    className: 'vjs-menu-item',
    textContent: 'Audio Track',
  });
  menuEl.appendChild(audioTrackItem);

  // Hide the menu by default
  menuEl.style.display = 'none';

  // Handle menu item clicks
  captionsItem.addEventListener('click', function () {
    // Add your logic to handle captions
    // Example: player.toggleCaptions();
  });

  audioTrackItem.addEventListener('click', function () {
    // Add your logic to handle audio tracks
    // Example: player.switchAudioTrack();
  });
});

// Initialize the plugin on your Brightcove video player
const player = videojs('JQrljZgnO6');
player.settingsPlugin(); // Call your custom plugin
