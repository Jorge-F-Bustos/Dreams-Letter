# Un sueño para mi amor

`dreams-letter` es una pequeña carta romántica interactiva hecha con HTML, CSS y JavaScript vanilla. Primero muestra un sobre cerrado con `1.png`; al tocarlo, aparece una escena nocturna con estrellas, nubes, una niña durmiendo (`2.png`) y una carta dentro de una nube.

## Cómo abrirlo

1. Abre `index.html` directamente en el navegador, o inicia un servidor local dentro de esta carpeta:

```bash
python -m http.server 8000
```

2. Visita `http://localhost:8000`.

No hace falta instalar dependencias. La tipografía se carga desde Google Fonts cuando hay conexión; si no, se usan fuentes alternativas del sistema.

## Estructura

```text
dreams-letter/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagenes/
    ├── 1.png
    └── 2.png
```

## Personalización rápida

Todas las opciones principales están juntas al comienzo de `script.js`, en la sección `CONFIGURACIÓN EDITABLE DEL SUEÑO`.

- `imagenSobre`: ruta de la imagen que se integra en el sobre. Actualmente es `imagenes/1.png`.
- `imagenSueno`: ruta de la niña durmiendo. Actualmente es `imagenes/2.png`.
- `imagenSobreEstilo`: controla el tamaño y la posición de `1.png` dentro del sobre. `tamano` usa un porcentaje del área interior; `posicionX` y `posicionY` mueven el centro de la imagen; `desplazamientoX` y `desplazamientoY` sirven para ajustes finos en píxeles.
- `tituloCarta`: cambia el título de la carta.
- `parrafosCarta`: cambia los párrafos del mensaje. El texto se imprime como párrafos separados.
- `tamanoImagen`: cambia el tamaño de la niña.
- `tamanoNube`: cambia el ancho de la nube-letter.
- `tamanoTexto`: cambia el tamaño de lectura de la carta.
- `cantidadEstrellas`: cambia la cantidad de estrellas.
- `cantidadNubes`: cambia la cantidad de nubes decorativas.
- `velocidad`, `intensidadFlotacion` y `duracionApertura`: ajustan el ritmo de las animaciones.

Para cambiar la paleta, el grosor del contorno o las tipografías, edita las variables que aparecen al inicio de `style.css`. Las variables `--night-top`, `--night-mid`, `--night-bottom`, `--pink`, `--outline`, `--font-body`, `--font-display` y `--font-hand` son las más importantes.

Para reemplazar las imágenes, conserva los nombres `1.png` y `2.png` dentro de `imagenes/`, o cambia sus rutas en `script.js`. Los PNG conservan sus proporciones y no reciben un borde rectangular añadido.

## Accesibilidad y móvil

El sobre es un botón real y se puede abrir con teclado, ratón o pantalla táctil. Las imágenes tienen texto alternativo, el contenido aparece aunque el usuario prefiera menos movimiento y se respeta `prefers-reduced-motion`. El diseño usa medidas fluidas para evitar desplazamiento horizontal en móviles y mantener la carta legible.
