#!/bin/bash

# ng generate module doctores --route doctores --module app.module
# ng generate module pacientes --route pacientes --module app.module
# ng generate module prescripciones --route prescripciones --module app.module
# ng generate module tratamientos --route tratamientos --module app.module
# ng generate module administracion --route administracion --module app.module
# ng generate module finanzas --route finanzas --module app.module
# ng generate module shared --route shared --module app.module

cd ./src/app

# mkdir containers
# mkdir services
# mkdir components
# mkdir interfaces
# cd ./containers

#     ng g c login
#     ng g c resetPassword
#     ng g c restorePassword
#     cd ../

# cd ./services

#     ng g s auth
#     cd ../

# cd ./components

#     ng g c sidemenu
#     ng g c header
#     cd ../



# cd ./pacientes
#     mkdir components
#     mkdir containers
#     mkdir services
#     mkdir interfaces
#     cd ./containers
#         ng g c registro
#         ng g c lista
#         cd ../
#     cd ./services  
#         ng g s pacientes
#         cd ../
#     cd ./interfaces
#         touch pacientes.interface.ts
#         cd ../
#     cd ../

# cd ./doctores
#     mkdir components
#     mkdir containers
#     mkdir services
#     mkdir interfaces
#     cd ./containers
#         ng g c registro
#         ng g c lista
#         cd ../
#     cd ./services  
#         ng g s doctores
#         cd ../
#     cd ./interfaces
#         touch doctores.interface.ts
#         cd ../
#     cd ../

# cd ./prescripciones
#     mkdir components
#     mkdir containers
#     mkdir services
#     mkdir interfaces
#     cd ./containers
#         ng g c registroVisitas
#         ng g c registroPrescripciones
#         ng g c listaVisitas
#         ng g c listaPrescripciones
#         cd ../
#     cd ./services  
#         ng g s prescripciones
#         ng g s reportes
#         cd ../
#     cd ./interfaces
#         touch prescripciones.interface.ts
#         cd ../
#     cd ../

# cd ./tratamientos
#     mkdir components
#     mkdir containers
#     mkdir services
#     mkdir interfaces
#     cd ./containers
#         ng g c registro
#         ng g c billing
#         ng g c bajaMedica
#         cd ../
#     cd ./services  
#         ng g s tratamientos
#         ng g s reportes
#         cd ../
#     cd ./interfaces
#         touch tratamientos.interface.ts
#         cd ../
#     cd ../

cd ./administracion
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces
    cd ./containers
        ng g c registrarUsuario
        ng g c listaUsuarios
        ng g c actualizarUsuario
        ng g c clinica
        ng g c permisos
        cd ../
    cd ./services
        ng g s administracion
        cd ../
    cd ./interfaces
        touch administracion.interface.ts
        cd ../
    cd ../

cd ./finanzas
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces
    cd ./containers
        ng g c registroVuchers
        ng g c listaVuchers
        ng g c cuentas
        cd ../
    cd ./services  
        ng g s finanzas
        ng g s reportes
        cd ../
    cd ./interfaces
        touch finanzas.interface.ts
        cd ../
    cd ../

cd ./shared
    mkdir components
    mkdir containers
    mkdir services
    mkdir interfaces
    cd ./components
        ng g c loader
        ng g c error
        ng g c confirmacion
        cd ../
    cd ./interfaces
        touch shared.interface.ts
        cd ../
    cd ../
