# backend/Dockerfile

FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies (optional, safe default)
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code
COPY ./app ./app

# Expose port
EXPOSE 8000

# Run server with live reload
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
