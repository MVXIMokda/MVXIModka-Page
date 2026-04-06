package main

import (
	"log"
	"os"

	"mvximokda-page/internal/app"
)

func main() {
	// Simple config parsing (can be moved to internal/config later)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8085"
	}

	log.Println("Starting MVXIMokda Page Service...")

	// Launch application
	app.Run(port)
}
