package http

import (
	"log"
	"net/http"
)

// Server represents the HTTP delivery layer
type Server struct {
	port string
}

// NewServer creates a new HTTP server
func NewServer(port string) *Server {
	return &Server{port: port}
}

// Start begins serving the static files
func (s *Server) Start() error {
	// Serve static files from the "web" directory
	fs := http.FileServer(http.Dir("web"))
	
	http.Handle("/", fs)

	log.Printf("Starting HTTP server on port %s...", s.port)
	return http.ListenAndServe(":"+s.port, nil)
}
