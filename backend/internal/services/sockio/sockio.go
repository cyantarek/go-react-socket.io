package sockio

import (
	gosocketio "github.com/cyantarek/golang-socketio"
	"github.com/cyantarek/golang-socketio/transport"
	"github.com/labstack/echo/v4"
)

type sockioServer struct {
	io *gosocketio.Server
}

func RegisterHandlers(r *echo.Echo) {
	h := &sockioServer{io:gosocketio.NewServer(transport.GetDefaultWebsocketTransport())}
	
	h.initRoutes(r)
	
	h.chat()
}
