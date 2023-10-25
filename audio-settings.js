videojs.registerPlugin('customSettingsMenu', function() {
  var player = this;

  // Create a div for the settings menu
  var settingsMenu = document.createElement("div");
  settingsMenu.className = "custom-settings-menu";

  // Create a cog icon for the settings menu
  var cogIcon = document.createElement("div");
  cogIcon.className = "cog-icon";
  cogIcon.innerHTML = "&#x2699"; // Unicode for cog icon

  // Create a div for the CC and Audio Track controls
  var ccAudioControls = document.createElement("div");
  ccAudioControls.className = "cc-audio-controls";

  // Create the CC button
  var ccButton = document.querySelector('.vjs-subs-caps-button');
  ccButton.className = "vjs-control vjs-button vjs-settings-control"; // Change class to vjs-settings-control

  // Create the Audio Track button
  var audioButton = document.querySelector('.vjs-audio-button');
  audioButton.className = "vjs-control vjs-button vjs-settings-control"; // Change class to vjs-settings-control

  // Append the CC and Audio Track buttons to the ccAudioControls div
  ccAudioControls.appendChild(ccButton);
  ccAudioControls.appendChild(audioButton);

  // Append the cog icon and ccAudioControls to the settingsMenu
  settingsMenu.appendChild(cogIcon);
  settingsMenu.appendChild(ccAudioControls);

  // Append the settingsMenu to the control bar
  var controlBar = player.controlBar.el();
  controlBar.appendChild(settingsMenu);

  // Add click event listener for the cog icon to toggle the settings menu
  cogIcon.addEventListener("click", function() {
    if (ccAudioControls.style.display === "block") {
      ccAudioControls.style.display = "none";
    } else {
      ccAudioControls.style.display = "block";
    }
  });
});
