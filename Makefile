# Makefile

# Build and start all services
up:
	docker-compose up --build

# Stop all services
down:
	docker-compose down

# Restart containers
restart:
	docker-compose down && docker-compose up --build

# Open a shell into the backend container
shell-backend:
	docker-compose exec backend bash

# Run backend tests (assuming pytest)
test:
	docker-compose exec backend pytest

# View logs from all services
logs:
	docker-compose logs -f

# Rebuild images without using cache
rebuild:
	docker-compose build --no-cache

# Remove all containers and volumes
clean:
	docker-compose down -v
