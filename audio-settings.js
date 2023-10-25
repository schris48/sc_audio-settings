// Wait for the Brightcove player to be ready
videojs.getPlayer('JQrljZgnO6').ready(function () {
  var player = this;

  // Create a new Settings button
  var settingsButton = document.createElement('button');
  settingsButton.className = 'vjs-settings-button vjs-menu-button vjs-menu-button-popup vjs-control vjs-button';
  settingsButton.type = 'button';
  settingsButton.innerHTML = '<span class="vjs-icon-placeholder" aria-hidden="true"></span><span class="vjs-control-text" aria-live="polite">Settings</span>';
  
  // Create a new Settings menu
  var settingsMenu = document.createElement('div');
  settingsMenu.className = 'vjs-menu';
  
  // Create and add items to the Settings menu
  var captionsSettingsItem = document.createElement('li');
  captionsSettingsItem.className = 'vjs-menu-item vjs-texttrack-settings';
  captionsSettingsItem.innerHTML = '<span class="vjs-menu-item-text">captions settings</span><span class="vjs-control-text" aria-live="polite">, opens captions settings dialog</span>';
  
  var audioSettingsItem = document.createElement('li');
  audioSettingsItem.className = 'vjs-menu-item vjs-texttrack-settings';
  audioSettingsItem.innerHTML = '<span class="vjs-menu-item-text">audio settings</span><span class="vjs-control-text" aria-live="polite">, opens audio settings dialog</span>';
  
  settingsMenu.appendChild(captionsSettingsItem);
  settingsMenu.appendChild(audioSettingsItem);
  
  // Add the Settings button and menu to the control bar
  var controlBar = player.getChild('ControlBar');
  controlBar.addChild(settingsButton);
  controlBar.el().appendChild(settingsMenu);

  // Hide the original Captions and Audio Track buttons
  var captionsButton = player.controlBar.getChild('ClosedCaptionButton');
  var audioButton = player.controlBar.getChild('AudioTrackButton');
  captionsButton.hide();
  audioButton.hide();

  // You can add event listeners to the new Settings button and menu items to handle their functionality
  settingsButton.addEventListener('click', function () {
    // Show/hide the Settings menu as needed
    if (settingsMenu.style.display === 'none') {
      settingsMenu.style.display = 'block';
    } else {
      settingsMenu.style.display = 'none';
    }
  });

  captionsSettingsItem.addEventListener('click', function () {
  // Implement captions settings behavior
});

audioSettingsItem.addEventListener('click', function () {
  // Implement audio settings behavior
});

settingsButton.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown') {
    // Navigate to the next menu item
  } else if (e.key === 'ArrowUp') {
    // Navigate to the previous menu item
  } else if (e.key === 'Enter') {
    // Select the currently focused menu item
  } else if (e.key === 'Esc') {
    // Close the menu
  }
});
