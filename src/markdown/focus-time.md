---
path: "/projects/focus-time"
author: "Jose E. Morales"
date: "2021-04-16T00:00:00"
title: "Focus Time"
image: ../assets/images/projects/focustime/main-screen.png
projectType: "Mobile"
---
# FocusTime
![](../assets/images/projects/focustime/main-screen.png)
## Overview
---
Este projecto fue creado en conjunto con el curso en udemy [**Complete React Native in 2021: Zero To Mastery**](https://www.udemy.com/course/complete-react-native-mobile-development-zero-to-mastery-with-hooks/) impartido por **Andrei Neagoie** - *Senior Software Developer* & **Mo Binni** - *Software / Solutions Architect*.

Este projecto tiene como fin, enseñar diferentes funcionalidades de React native tales como:

- Components
- Importing & exporting components
- Hooks (useState & useEffect)
- Conditional Rendering
- Data persistance (AsyncStorage)
- Scalable project structure

Es una aplicacion sencilla donde el usuario ingresa una tarea para enfocarse en ella y elegir entre diferentes tiempos para comenzar un conteo. Al finalizar el celular vibra para indicar que se ha agotado el tiempo.

## How it works
---
Al entrar a la aplicación, el usuario encontrara una pantalla simple, con un campo para poner la "tarea" en la que desea enfocarse por determinado tiempo. Al llenar este campo, se pulsa el boton para comenzar el conteo.

Esto nos llevara a la siguiente pantalla, la cual nos muestra diferentes componentes:
- Contador
- Titulo de la tarea
- Barra de progreso
- Botones

En esta pantalla, podemos ver el progreso de la tarea, asi como tambien pausar, reanudar o bien, modificar el tiempo que se quiere dedicar a la tarea. Tambien es posible cancelar prematuramente la tarea con el boton X.

Al finalizar el contador, el celular vibrara algunos segundos para indicar que la tarea ha sido finalizada. Y mostrara en la pantalla principal un listado de tareas; en color verde las terminadas y en color rojo las incompletas.

Al salir de la app, la lista de tareas quedara guardada, aun asi, el usuario tiene la opcion de limpiar la lista con un boton "Clear".

## Preview
![Incomplete](../assets/images/projects/focustime/incomplete-task.gif)

---
*Código fuente en [Github](https://github.com/josemoralesdev/focustime.git)*