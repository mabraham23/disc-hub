var app = new Vue({
  el: '#app',
  data: {
    socket: null,
    newMessage: "",
    senderName: "", 
    receivedMessages: [],
  },
  methods: {
    connectSocket: function() {
      this.socket = new WebSocket("ws://localhost:3001");
      this.socket.onmessage = (event) => {
        this.receivedMessage(event);
      };
    },
    sendMessage: function() {
      let data = {
        senderName: this.senderName,
        message: this.newMessage
      };
      this.socket.send(JSON.stringify(data))
    },
    receivedMessage: function( event ) {
      let data = JSON.parse(event.data)
      this.receivedMessages.push( data )
    }
  },
  created: function () {
    console.log("is vue working")
    this.connectSocket()
  }
})