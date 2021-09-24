#!/bin/bash

mkdir config
mkdir pacientes
mkdir doctores
mkdir tratamientos
mkdir prescripciones
mkdir usuarios
mkdir finanzas

touch appOdonubeApi.js
touch appWebServer.js
touch database.js
touch webServer.js
touch apiServer.js

cd ./config
    touch environment.js

cd ../doctores
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../

cd ../pacientes
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../

cd ../tratamientos
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../

cd ../prescripciones
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../


cd ../finanzas
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../

cd ../usuarios
    mkdir controller
    mkdir model
    mkdir routes

    cd controller
        touch index.js
        touch main.js

    cd ../model
        touch index.js
        touch main.js

    cd ../routes
        touch index.js
        touch main.js
    cd ../