# Quiz Expert Web

## Uruchomienie aplikacji w środowisku deweloperskim

**1. Pobranie projektu z repozytorium**
```
git clone -b develop https://github.com/Quiz-Expert/web.git quiz-expert-web
```
```
cd quiz-expert-web
```

**2. Uruchomienie kontenerów dockerowych**
```
docker-compose up -d --build
```

**3. Aplikacja powinna być dostępna na:**
```
http://localhost:8080
```

## Polecenia deweloperskie

**Uruchomianie polecenia w kontenerze web (polecenie `*`)**
```
docker-compose exec web *
```

**Na przykład - npm install**
```
docker-compose exec web npm install
```

**Uruchomienie kontenerów**
```
docker-compose up -d
```

**Wyświetlenie uruchomionych kontenerów**
```
docker-compose ps
```

**Zatrzymanie kontenerów bez ich usuwania**
```
docker-compose stop
```

**Zatrzymanie i usunięcie kontenerów**
```
docker-compose down
```

**Usunięcie zatrzymanych kontenerów**
```
docker-compose rm
```

**Instalacja zależności**
```
docker-compose exec web npm install
```

**Hot reload**
```
docker-compose exec web npm run serve
```

**Build**
```
docker-compose exec web npm run build
```

**Lints**
```
docker-compose exec web npm run lint
```