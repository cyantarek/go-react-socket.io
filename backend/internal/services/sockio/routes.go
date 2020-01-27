package sockio

import "github.com/labstack/echo/v4"

func (ch *sockioServer) initRoutes(r *echo.Echo) {
	r.Any("/socket.io/", func(c echo.Context) error {
		ch.io.ServeHTTP(c.Response(), c.Request())
		
		return nil
	})
}