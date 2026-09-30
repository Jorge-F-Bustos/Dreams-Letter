/*
 * ==========================================
 * CONFIGURACIÓN EDITABLE DEL SUEÑO
 * ==========================================
 */

// ==========================================
// IMÁGENES
// ==========================================

// Imagen que aparece dentro del sobre.
const imagenSobre = "imagenes/1.png";

// Imagen de la niña durmiendo.
const imagenSueno = "imagenes/2.png";

// ==========================================
// POSICIÓN VERTICAL DE LA IMAGEN DEL SOBRE
// ==========================================
// Cambia este valor para mover 1.png dentro del sobre.
//
// Valores positivos  -> mueve la imagen HACIA ABAJO.
// Valores negativos  -> mueve la imagen HACIA ARRIBA.
// 0                 -> conserva la posición normal.
//
// Ejemplos:
//   20  = un poco más abajo
//   10  = ligeramente más abajo
//    0  = posición normal
//  -10  = ligeramente más arriba
//  -20  = más arriba
//
// El valor está expresado en píxeles y funciona junto con
// la posición horizontal y el tamaño configurados más abajo.
// Puedes probar diferentes valores hasta encontrar la posición ideal.
// ==========================================
const posicionVerticalImagenSobre = 30;

// ==========================================
// POSICIÓN Y TAMAÑO DE LA IMAGEN DEL SOBRE
// Cambia estos valores para acomodar 1.png sin editar el archivo.
// tamano: ancho de la imagen respecto al área interior del sobre.
// posicionX / posicionY: porcentaje del punto central de la imagen.
// Ejemplo: 50% / 60% la deja centrada y un poco más abajo.
// desplazamientoX / desplazamientoY: ajuste fino en píxeles.
// ==========================================

const imagenSobreEstilo = {
  tamano: "58%",
  posicionX: "50%",
  posicionY: "59%",
  desplazamientoX: "0px",
  desplazamientoY: `${posicionVerticalImagenSobre}px`
};

// ==========================================
// TEXTO DE LA CARTA
// Aquí puedes cambiar el mensaje completo.
// ==========================================

const tituloCarta = "Para mi niña mimilona :3";

const parrafosCarta = [
  "Mi niña, nunca tengas miedo de cerrar los ojitos y soñar, porque quiero que sepas que, pase lo que pase, siempre estaré a tu lado, acompañándote en cada sueño y en cada noche.",
  "Todo lo que nace de esa cabecita tan bonita que tienes me parece maravilloso; tus ideas brillan como pequeñas estrellas en el cielo y me encanta descubrir cada una de ellas contigo.",
  "Te amo muchísimo, mi niña mimilona. Amo tenerte en mi vida y poder compartir este pequeño sueño contigo. Y recuerda que tus sueños, tus metas y todos esos pequeños deseos de tu corazón no tienes que alcanzarlos sola… los vamos a cumplir juntitos, pasito a pasito, hasta hacerlos realidad.",
  "Si alguna vez la noche se siente demasiado oscura, búscame entre tus sueños, porque siempre voy a estar ahí para ti. ♥"
];

// Cada sueño conserva su texto y puede crecer según la cantidad de líneas que necesite.
const suenos = [
  { titulo: tituloCarta },
  ...parrafosCarta.map((texto) => ({ texto }))
];

// ==========================================
// POSICIÓN DEL TEXTO DE CADA SUEÑO
// ==========================================
// Puedes mover el texto de cada nube sin mover la nube completa.
//
// posicionX:
//   20  = mueve el texto un poco a la DERECHA
//   10  = mueve el texto ligeramente a la DERECHA
//    0  = posición horizontal centrada
//  -10  = mueve el texto ligeramente a la IZQUIERDA
//  -20  = mueve el texto más a la IZQUIERDA
//
// posicionY:
//   20  = mueve el texto hacia ABAJO
//   10  = mueve el texto ligeramente hacia ABAJO
//    0  = posición vertical base
//  -10  = mueve el texto hacia ARRIBA
//  -20  = mueve el texto más hacia ARRIBA
//
// Los valores están en píxeles y funcionan en móvil, tablet y escritorio.
// Ajusta cada sueño poco a poco si deseas una posición personalizada.
// ==========================================
const posicionesTextoSuenos = {
  sueno1: { x: 0, y: 20 },
  sueno2: { x: 0, y: 30 },
  sueno3: { x: 0, y: 25 },
  sueno4: { x: 0, y: 40 },
  sueno5: { x: 0, y: 18 }
};

// ==========================================
// AJUSTES VISUALES Y DE ANIMACIÓN
// Cambia estos valores para adaptar el sueño.
// ==========================================

const ajustesSueno = {
  tamanoImagen: "clamp(230px, 33vw, 430px)", // tamaño de la niña
  tamanoNube: "clamp(340px, 82vw, 900px)", // ancho de la nube-letter
  posicionNube: "normal", // usa "normal" o "alta" como referencia visual
  tamanoTexto: "clamp(.77rem, 1.25vw, 1.03rem)", // tamaño de los párrafos
  espacioLetras: "normal", // separación entre letras
  velocidad: 1, // 1 = normal, 1.3 = más lento, .8 = más rápido
  intensidadFlotacion: 1, // 1 = sutil, 1.5 = más movimiento
  intensidadBrillo: 1, // 1 = normal, 0 = sin brillos extra
  cantidadEstrellas: 42, // cantidad de estrellas del cielo
  cantidadNubes: 9, // cantidad de nubes decorativas
  duracionApertura: 1.25 // segundos aproximados de apertura del sobre
};

(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const segura = (valor, respaldo = 1) => Number.isFinite(Number(valor)) ? Number(valor) : respaldo;
  const velocidad = Math.min(Math.max(segura(ajustesSueno.velocidad), .25), 3);

  document.documentElement.style.setProperty("--character-width", ajustesSueno.tamanoImagen);
  document.documentElement.style.setProperty("--cloud-width", ajustesSueno.tamanoNube);
  document.documentElement.style.setProperty("--cloud-size", ajustesSueno.tamanoTexto);
  document.documentElement.style.setProperty("--speed", String(velocidad));
  document.documentElement.style.setProperty("--float-intensity", String(segura(ajustesSueno.intensidadFlotacion)));
  document.documentElement.style.setProperty("--glow-intensity", String(Math.max(0, segura(ajustesSueno.intensidadBrillo))));
  if (ajustesSueno.posicionNube === "alta") {
    const composicion = document.querySelector(".dream-composition");
    if (composicion) composicion.classList.add("dream-composition--high");
  }

  const sobreImagen = $("envelopeImage");
  const suenoImagen = $("dreamImage");
  if (sobreImagen) sobreImagen.src = imagenSobre;
  if (suenoImagen) suenoImagen.src = imagenSueno;
  if (sobreImagen) {
    sobreImagen.style.setProperty("--sobre-imagen-tamano", imagenSobreEstilo.tamano);
    sobreImagen.style.setProperty("--sobre-imagen-x", `calc(${imagenSobreEstilo.posicionX} + ${imagenSobreEstilo.desplazamientoX})`);
    sobreImagen.style.setProperty("--sobre-imagen-y", `calc(${imagenSobreEstilo.posicionY} + ${imagenSobreEstilo.desplazamientoY})`);
  }

  const nubesSueno = $("dreamClouds");

  // Cada sueño usa un trazado SVG único y continuo; solo cambia su proporción.
  const trazadoNube = "M 95 545 C 50 540 25 510 34 470 C 42 435 72 416 112 420 C 94 392 99 355 121 330 L 121 285 C 94 257 100 217 129 194 C 158 171 198 177 219 205 C 244 154 294 126 346 140 C 389 151 413 181 423 215 C 450 171 494 151 540 163 C 584 174 610 207 612 244 C 648 226 689 236 713 269 C 734 298 731 334 711 357 L 711 419 C 753 414 780 439 787 475 C 795 514 767 543 723 548 C 688 552 654 538 633 514 C 600 543 550 550 510 528 C 472 560 416 567 371 542 C 332 566 275 564 238 537 C 201 559 146 561 113 538 C 107 542 101 544 95 545 Z";
  const ns = "http://www.w3.org/2000/svg";

  function crearFormaNube(indice) {
    const svg = document.createElementNS(ns, "svg");
    svg.classList.add("cloud-shape");
    svg.setAttribute("viewBox", "0 0 800 600");
    svg.setAttribute("preserveAspectRatio", "none");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");

    const defs = document.createElementNS(ns, "defs");
    const gradiente = document.createElementNS(ns, "linearGradient");
    gradiente.id = `cloudWarmGradient${indice}`;
    gradiente.setAttribute("x1", "0");
    gradiente.setAttribute("y1", "0");
    gradiente.setAttribute("x2", "1");
    gradiente.setAttribute("y2", "1");
    [["0", "#fffaf0"], [".52", "#f8edfa"], ["1", "#f4dce9"]].forEach(([offset, color]) => {
      const stop = document.createElementNS(ns, "stop");
      stop.setAttribute("offset", offset);
      stop.setAttribute("stop-color", color);
      gradiente.appendChild(stop);
    });
    defs.appendChild(gradiente);

    const rim = document.createElementNS(ns, "linearGradient");
    rim.id = `cloudRimGradient${indice}`;
    rim.setAttribute("x1", "0");
    rim.setAttribute("y1", "0");
    rim.setAttribute("x2", "0");
    rim.setAttribute("y2", "1");
    [["0", "#fffdf7", ".9"], ["1", "#e5b9d1", ".45"]].forEach(([offset, color, opacity]) => {
      const stop = document.createElementNS(ns, "stop");
      stop.setAttribute("offset", offset);
      stop.setAttribute("stop-color", color);
      stop.setAttribute("stop-opacity", opacity);
      rim.appendChild(stop);
    });
    defs.appendChild(rim);
    svg.appendChild(defs);

    const shadow = document.createElementNS(ns, "path");
    shadow.classList.add("cloud-shadow-path");
    shadow.setAttribute("d", trazadoNube);
    const main = document.createElementNS(ns, "path");
    main.classList.add("cloud-main-path");
    main.style.fill = `url(#cloudWarmGradient${indice})`;
    main.setAttribute("d", trazadoNube);
    const highlight = document.createElementNS(ns, "path");
    highlight.classList.add("cloud-highlight-path");
    highlight.style.stroke = `url(#cloudRimGradient${indice})`;
    highlight.setAttribute("d", "M 104 348 C 90 314 105 273 139 252 C 165 237 195 240 217 255 C 245 210 290 190 332 198");
    highlight.setAttribute("fill", "none");
    svg.append(shadow, main, highlight);
    return svg;
  }

  function crearSueno(sueno, indice) {
    const esTitulo = Boolean(sueno.titulo);
    const contenido = esTitulo ? sueno.titulo : sueno.texto;
    const fragmento = document.createElement("article");
    fragmento.className = `dream-cloud-fragment ${esTitulo ? "dream-cloud-fragment--title" : `dream-cloud-fragment--${indice}`}`;
    fragmento.style.setProperty("--fragment-delay", `${.4 + indice * .22}s`);
    const longitud = contenido.length;
    const anchoNatural = esTitulo ? 440 : Math.min(820, Math.max(500, 460 + longitud * .8));
    fragmento.style.setProperty("--fragment-width", `${anchoNatural}px`);
    fragmento.style.setProperty("--fragment-min-height", "0px");
    fragmento.style.setProperty(
      "--fragment-padding",
      esTitulo
        ? "clamp(70px, 9vw, 112px) clamp(28px, 4vw, 52px) clamp(70px, 9vw, 112px)"
        : (longitud > 290
          ? "clamp(86px, 11vw, 140px) clamp(30px, 4.5vw, 66px) clamp(86px, 11vw, 140px)"
          : longitud > 170
            ? "clamp(76px, 9vw, 116px) clamp(30px, 4.5vw, 62px) clamp(76px, 9vw, 116px)"
            : "clamp(68px, 8vw, 104px) clamp(28px, 4vw, 58px) clamp(68px, 8vw, 104px)")
    );
    fragmento.appendChild(crearFormaNube(indice));

    const contenidoEl = document.createElement("div");
    contenidoEl.className = "cloud-fragment-content";
    const posicion = posicionesTextoSuenos[`sueno${indice + 1}`] || { x: 0, y: 15 };
    const offsetX = Number.isFinite(Number(posicion.x)) ? Number(posicion.x) : 0;
    const offsetY = Number.isFinite(Number(posicion.y)) ? Number(posicion.y) : 15;
    contenidoEl.style.setProperty("--texto-x", `${offsetX}px`);
    contenidoEl.style.setProperty("--texto-y", `${offsetY}px`);
    if (esTitulo) {
      const tituloEl = document.createElement("h1");
      tituloEl.textContent = contenido;
      contenidoEl.appendChild(tituloEl);
    } else {
      const parrafo = document.createElement("p");
      const partes = contenido.split(fraseEnfatizada);
      parrafo.appendChild(document.createTextNode(partes[0]));
      if (partes.length > 1) {
        const fuerte = document.createElement("strong");
        fuerte.textContent = fraseEnfatizada;
        parrafo.append(fuerte, document.createTextNode(partes.slice(1).join(fraseEnfatizada)));
      }
      contenidoEl.appendChild(parrafo);
    }
    fragmento.appendChild(contenidoEl);
    nubesSueno.appendChild(fragmento);
  }

  function crearConector(indice, destino = nubesSueno, cantidad = 3, clase = "dream-puff-trail") {
    const conector = document.createElement("div");
    conector.className = clase;
    conector.setAttribute("aria-hidden", "true");
    const puffPath = "M 12 42 C 5 40 3 34 5 29 C 7 25 11 23 16 24 C 14 18 18 13 24 12 C 30 11 34 14 36 19 C 40 13 47 12 52 15 C 57 18 58 23 57 27 C 64 27 68 31 68 36 C 68 42 62 46 56 45 C 50 49 43 48 39 44 C 34 49 25 49 20 45 C 17 46 14 45 12 42 Z";
    for (let i = 0; i < cantidad; i += 1) {
      const svg = document.createElementNS(ns, "svg");
      svg.classList.add("dream-puff", `dream-puff--${i + 1}`);
      svg.setAttribute("viewBox", "0 0 72 52");
      svg.setAttribute("preserveAspectRatio", "none");
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", puffPath);
      svg.appendChild(path);
      conector.appendChild(svg);
    }
    conector.style.setProperty("--connector-delay", `${1.05 + indice * .22}s`);
    destino.appendChild(conector);
  }

  // Se crea el texto con nodos seguros y se enfatiza solo la frase solicitada.
  const fraseEnfatizada = "los vamos a cumplir juntitos, pasito a pasito, hasta hacerlos realidad.";
  if (nubesSueno) {
    suenos.forEach((sueno, indice) => {
      crearSueno(sueno, indice);
      if (indice < suenos.length - 1) crearConector(indice);
    });
    const trailGirl = $("girlPuffTrail");
    if (trailGirl) crearConector(suenos.length, trailGirl, 4, "girl-puff-trail");
  }

  const aleatorio = (min, max) => min + Math.random() * (max - min);
  function crearEstrellas() {
    const destino = $("stars");
    if (!destino) return;
    const total = reducido ? Math.ceil(ajustesSueno.cantidadEstrellas * .45) : ajustesSueno.cantidadEstrellas;
    const colores = ["#fff7e8", "#eadcff", "#d8c4ec", "#f3c0d4"];
    for (let i = 0; i < total; i += 1) {
      const estrella = document.createElement("span");
      estrella.className = "star";
      estrella.textContent = i % 5 === 0 ? "✦" : (i % 3 === 0 ? "✧" : "·");
      estrella.style.left = `${aleatorio(2, 98)}%`;
      estrella.style.top = `${aleatorio(2, 92)}%`;
      estrella.style.setProperty("--star-size", `${aleatorio(7, i % 5 === 0 ? 20 : 13)}px`);
      estrella.style.setProperty("--star-opacity", aleatorio(.3, .9).toFixed(2));
      estrella.style.setProperty("--star-color", colores[i % colores.length]);
      estrella.style.setProperty("--star-duration", `${aleatorio(3.5, 7.5).toFixed(2)}s`);
      estrella.style.setProperty("--star-delay", `${aleatorio(-7, 0).toFixed(2)}s`);
      destino.appendChild(estrella);
    }
  }

  function crearNubes() {
    const grupos = [$("cloudsBack"), $("cloudsMiddle"), $("cloudsFront")];
    const colores = ["#f8f6ff", "#dce8ff", "#f5d7e6", "#d9cff3"];
    for (let i = 0; i < ajustesSueno.cantidadNubes; i += 1) {
      const nube = document.createElement("span");
      nube.className = "cloud";
      nube.style.left = `${aleatorio(-12, 90)}%`;
      nube.style.top = `${aleatorio(10, 92)}%`;
      nube.style.setProperty("--cloud-width-small", `${aleatorio(90, 230)}px`);
      nube.style.setProperty("--cloud-color", colores[i % colores.length]);
      nube.style.setProperty("--cloud-opacity", aleatorio(.08, .24).toFixed(2));
      nube.style.setProperty("--cloud-duration", `${aleatorio(22, 42).toFixed(1)}s`);
      nube.style.setProperty("--cloud-delay", `${aleatorio(-35, 0).toFixed(1)}s`);
      grupos[i % grupos.length].appendChild(nube);
    }
  }
  crearEstrellas();
  crearNubes();

  const sobreEscena = $("envelopeScene");
  const sobre = $("envelopeButton");
  const sueno = $("dreamScene");
  const aviso = $("announcement");
  let abierto = false;

  function abrirSobre() {
    if (abierto) return;
    abierto = true;
    sobreEscena.classList.add("is-opening");
    sobre.setAttribute("aria-expanded", "true");
    if (aviso) aviso.textContent = "El sobre se está abriendo. Tu sueño aparecerá en un momento.";
    const demora = reducido ? 80 : Math.max(700, ajustesSueno.duracionApertura * 1000);
    window.setTimeout(() => {
      sobreEscena.classList.add("is-leaving");
      sueno.classList.add("is-visible");
      sueno.setAttribute("aria-hidden", "false");
      if (aviso) aviso.textContent = "La niña está soñando. La carta de amor aparece sobre ella.";
      window.setTimeout(() => { sobreEscena.hidden = true; }, reducido ? 120 : 800);
    }, demora);
  }
  sobre.addEventListener("click", abrirSobre);
})();
