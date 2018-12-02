var socket = io();
socket.on('connect', function() {
    console.log('User Connected');
});

socket.emit('createMessage', {
    from:"Neeraj Mishra",
    text:"test message",
    created_at:123
});

socket.on('disconnect',function() {
    console.log('Disconnected From server');
});

socket.on('newMessage',function(message){
    console.log('New Message',message);
});