# Boardgames Lib

Full-stack web application built with:

- Django (backend API)
- React (frontend)
- PostgreSQL (database)
- Docker & Docker Compose

---

## 🏗 Architecture (Development)

Browser  
↓  
React (port 3000)  
↓ proxy  
Django + Gunicorn (port 8000)  
↓  
PostgreSQL (port 5432)

---

## 🚀 Getting Started (Docker)

### 1. Build containers

```bash
docker compose build
