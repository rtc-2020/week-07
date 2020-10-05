if ('mediaDevices' in navigator) {

  // Educational array for holding all devices
  var all_devices = [];

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
