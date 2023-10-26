videojs.registerPlugin('playerSettings', function() {
    var player = this,
    overlay = document.createElement('p');
    overlay.className = 'vjs-overlay';
    overlay.innerHTML = "Custom player settings";
    player.el().appendChild(overlay);
  });
