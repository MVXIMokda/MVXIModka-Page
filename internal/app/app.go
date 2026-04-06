package app

import (
	"log"

	"mvximokda-page/internal/transport/http"
)

// Run initializes and starts the application
func Run(port string) {
	log.Println("Initializing application...")

	// Dependency Injection / Server Initialization
	server := http.NewServer(port)

	// Start the server (blocking call)
	if err := server.Start(); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
