const socket = io.connect('http://localhost:3000/')

socket.on('chat-message', data => {
    console.log(data)
})