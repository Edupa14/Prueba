chrome.app.runtime.onLaunched.addListener(function() {
    document.head.innerHTML += 
    "<script src='https://cdn.socket.io/3.1.3/socket.io.min.js' integrity='sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh' crossorigin='anonymous'></script>"
    + "<script type='text/javascript' src='background_script.js'></script>"
  });
