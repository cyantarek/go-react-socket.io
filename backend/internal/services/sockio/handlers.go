package sockio

import (
	gosocketio "github.com/cyantarek/golang-socketio"
	"log"
)

const defaultRoom  = "defaultRoom"

func (ch *sockioServer) chat() {
	ch.io.On(gosocketio.OnConnection, func(c *gosocketio.Channel) {
		log.Println("new connection")
		c.Join(defaultRoom)
	})
	
	ch.io.On("newChatMessage", func(c *gosocketio.Channel, msg interface{}) {
		c.BroadcastTo(defaultRoom,"newChatMessage", msg)
	})
	
	ch.io.On(gosocketio.OnDisconnection, func(c *gosocketio.Channel) {
		log.Println("disconnected")
	})
}