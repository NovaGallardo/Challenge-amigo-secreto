# 🎁 Amigo Secreto - Challenge Oracle One

Este proyecto fue desarrollado como parte del **Challenge de Oracle One**, con el objetivo de mejorar las habilidades en lógica de programación y manipulación del DOM con JavaScript.

## 📌 Descripción

La aplicación permite realizar un sorteo de **Amigo Secreto** de manera sencilla. Los usuarios pueden agregar nombres a una lista y, posteriormente, se elige un participante de forma aleatoria para asignarle un amigo secreto.

## 🛠️ Tecnologías Utilizadas

- **HTML**: Estructura base del proyecto.
- **CSS**: Estilos para una interfaz atractiva y responsiva.
- **JavaScript**: Lógica del programa y manipulación del DOM.

## 🚀 Funcionamiento del JavaScript

El archivo `app.js` contiene la lógica principal del sorteo:

1. **Función `agregarAmigo()`**
    - Obtiene el nombre ingresado en el input.
    - Lo añade a la lista de participantes.
    - Muestra la lista actualizada en pantalla.
2. **Función `actualizarLista()`**
    - Limpia la lista anterior y muestra los nombres ingresados en un `<ul>` dinámico.
3. **Función `sortearAmigo()`**
    - Valida si hay nombres en la lista.
    - Genera un índice aleatorio para seleccionar un participante.
    - Muestra el nombre sorteado en la pantalla.

## 📂 Estructura del Proyecto

```
/amigo-secreto
│── index.html  # Interfaz principal
│── style.css   # Estilos del diseño
│── app.js      # Lógica del sorteo
│── assets/     # Imágenes y recursos

```

## 🎲 ¿Cómo usarlo?

1. Ingresar los nombres en el campo de entrada.
2. Presionar el botón **"Añadir"** para agregarlos a la lista.
3. Una vez que todos los participantes estén agregados, hacer clic en **"Sortear amigo"**.
4. Se mostrará aleatoriamente el nombre del amigo secreto en pantalla.
