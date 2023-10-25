videojs.registerPlugin('customSettingsMenu', function() {
    var player = this;
  
    // Create a div for the settings menu
    var settingsMenu = document.createElement("div");
    settingsMenu.className = "custom-settings-menu";
  
    // Create a cog icon for the settings menu
    var cogIcon = document.createElement("div");
    cogIcon.className = "cog-icon";
    cogIcon.innerHTML = "&#x2699;"; // Unicode for cog icon
  
    // Create a div for the CC and DV buttons
    var ccDvButtons = document.createElement("div");
    ccDvButtons.className = "cc-dv-buttons";
  
    // Create the CC button
    var ccButton = document.createElement("button");
    ccButton.className = "vjs-control vjs-button vjs-closed-caption-button";
    ccButton.innerHTML = "<span class='vjs-icon-placeholder' aria-hidden='true'></span><span class='vjs-control-text' aria-live='polite'>CC</span>";
    
    // Create the DV button
    var dvButton = document.createElement("button");
    dvButton.className = "vjs-control vjs-button vjs-display-video-button";
    dvButton.innerHTML = "<span class='vjs-icon-placeholder' aria-hidden='true'></span><span class='vjs-control-text' aria-live='polite'>DV</span>";
  
    // Append the CC and DV buttons to the ccDvButtons div
    ccDvButtons.appendChild(ccButton);
    ccDvButtons.appendChild(dvButton);
  
    // Append the cog icon and ccDvButtons to the settingsMenu
    settingsMenu.appendChild(cogIcon);
    settingsMenu.appendChild(ccDvButtons);
  
    // Append the settingsMenu to the control bar
    var controlBar = player.controlBar.el();
    controlBar.appendChild(settingsMenu);
  
    // Add click event listener for the cog icon to toggle the settings menu
    cogIcon.addEventListener("click", function() {
      if (ccDvButtons.style.display === "block") {
        ccDvButtons.style.display = "none";
      } else {
        ccDvButtons.style.display = "block";
      }
    });
  });  
