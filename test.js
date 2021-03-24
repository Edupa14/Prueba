(function(){
    var socket = io.connect('http://192.168.0.12:6677', {'forceNew':true})
    message = "hola estoy en linea"
    socket.emit('consola', message)
})();
