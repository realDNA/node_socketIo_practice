

module.exports = (app, io)=>{
    app.get('/chat',(req,res)=>{
        console.log("This is message page");
        res.render('messages/chat');
    })
    
   io.on('connection', function(socket){
      console.log('a user connected');
        socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });
}