function createCustomSettingsPlugin() {
    var settingsMenu = document.createElement('div');
    settingsMenu.className = 'custom-settings-menu';
    
    var cogIcon = document.createElement('i');
    cogIcon.className = 'fas fa-cog';
    
    var ccButton = document.createElement('button');
    ccButton.textContent = 'CC';
    ccButton.className = 'custom-settings-button';
    
    var dvButton = document.createElement('button');
    dvButton.textContent = 'DV';
    dvButton.className = 'custom-settings-button';
    
    settingsMenu.appendChild(cogIcon);
    settingsMenu.appendChild(ccButton);
    settingsMenu.appendChild(dvButton);
    
    cogIcon.addEventListener('click', function() {
      if (settingsMenu.classList.contains('expanded')) {
        settingsMenu.classList.remove('expanded');
      } else {
        settingsMenu.classList.add('expanded');
      }
    });
    
    var playerContainer = document.querySelector('.brightcove-player-container');
    playerContainer.appendChild(settingsMenu);
  }
  
  videojs.registerPlugin('customSettingsPlugin', function() {
    var player = this;
    player.on('ready', function() {
      createCustomSettingsPlugin();
    });
  });
  
  var player = videojs('your-video-player-id');
  player.customSettingsPlugin();  