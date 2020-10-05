if ('mediaDevices' in navigator) {

  // Educational array for holding all devices
  var all_devices = [];
  var global_stream;

  var camera_button = document.querySelector('#start-camera');
  camera_button.addEventListener('click', function(e) {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var camera_video = document.querySelector('#camera');
        camera_video.srcObject = stream;
        global_stream = stream;
      })
      .catch(function(error) {
        console.error('Stream error:', error);
      });
  });

  var desktop_button = document.querySelector('#share-desktop');
  desktop_button.addEventListener('click', function(e) {
    navigator.mediaDevices.getDisplayMedia()
      .then(function(stream) {
        var desktop_video = document.querySelector('#desktop');
        desktop_video.srcObject = stream;
        // global_stream = stream;
      })
      .catch(function(error) {
        console.error('Stream error:', error);
      });
  });

  function showDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
        console.log('Available devices:');
        devices.forEach(function(device) {
          console.log(device);
          // Example of pushing within a forEach
          all_devices.push(device);
        });
      });
  }

// end mediaDevice feature detection
}
