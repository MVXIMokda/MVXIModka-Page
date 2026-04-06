.PHONY: all build run clean test

APP_NAME=mvximokda-page
MAIN_PATH=./cmd/server

all: build

build:
	@echo "Building application..."
	@go build -o bin/$(APP_NAME) $(MAIN_PATH)

run: build
	@echo "Running application..."
	@./bin/$(APP_NAME)

stop:
	@echo "Stopping application..."
	@pkill -f $(APP_NAME) || echo "Server is not running."

clean:
	@echo "Cleaning up..."
	@rm -rf bin/

test:
	@echo "Running tests..."
	@go test ./... -v
