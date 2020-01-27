package main

import (
	config "backend/configs"
	"backend/internal/services/sockio"
	"backend/pkg/utilities"
	"fmt"
	"github.com/jinzhu/configor"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"log"
)

func main() {
	conf := loadConfig()
	app := echo.New()
	
	app.Use(middleware.Logger())
	app.Use(middleware.CORS())
	
	sockio.RegisterHandlers(app)
	
	log.Fatal(app.Start(fmt.Sprintf(":%s", conf.Server.Rest.Port)))
}

func loadConfig() config.Config {
	var cfg config.Config
	env := utilities.GetEnv("ENV", "dev")
	
	switch env {
	case "dev":
		err := configor.Load(&cfg, "configs/config.dev.yml")
		if err != nil {
			//s.logger.Fatal(err.Error())
		}
	case "prod":
		err := configor.Load(&cfg, "configs/config.prod.yml")
		if err != nil {
			//s.logger.Fatal(err.Error())
		}
	}
	
	return cfg
}
