// Alumna: Inchauspe, Celeste 
// https://youtu.be/3sz2GHALSUY

let cantidadCuadrados = 9;
let referencia;
let desplazamientoBase = 4;

function setup() {
  createCanvas(800, 400);
  referencia = loadImage("referencia.png");
  dibujarTodo();
}

function draw() {
}

// Función que retorna un valor 
function calcularDesplazamiento() {
  return desplazamientoBase;
}

function dibujarTodo() {
  background(255);
  image(referencia, 0, 0, 400, 400);

  push();
  translate(400, 0);

  // FOR anidado para recorrer cuadrantes (4 total = 2x2)
  for (let fila = 0; fila < 2; fila++) {
    for (let col = 0; col < 2; col++) {
      let x = 100 + col * 200;
      let y = 100 + fila * 200;
      let dx = 1;
      let dy = 1;

      // Dirección personalizada
      if (fila == 0 && col == 0) { dx = 1; dy = -1; }   // ↗
      else if (fila == 0 && col == 1) { dx = 1; dy = 1; } // ↘
      else if (fila == 1 && col == 0) { dx = -1; dy = -1; } // ↖
      else if (fila == 1 && col == 1) { dx = -1; dy = 1; }  // ↙

      dibujarCuadrado(x, y, cantidadCuadrados, dx, dy);
    }
  }

  pop();
}

// Función propia con parámetros que NO retorna valor
function dibujarCuadrado(cx, cy, cantidad, dx, dy) {
  let tamañoMax = 150;
  let espacio = tamañoMax / cantidad;
  let desplazamiento = calcularDesplazamiento();

  rectMode(CENTER);
  noFill();

  for (let i = 0; i < cantidad; i++) {
    stroke(i % 2 == 0 ? 0 : 255);
    strokeWeight(espacio);
    let tamaño = tamañoMax - i * espacio;

    let offsetX = i * desplazamiento * dx;
    let offsetY = i * desplazamiento * dy;

    rect(cx + offsetX, cy + offsetY, tamaño, tamaño);
  }
}

// Evento de teclado: reiniciar al presionar 'r'
function keyPressed() {
  if (key == 'r' || key == 'R') {
    cantidadCuadrados = 9;
    desplazamientoBase = 4;
    dibujarTodo();
  }
}

// Evento de mouse: cambia cantidad y desplazamiento aleatorio
function mousePressed() {
  cantidadCuadrados = int(random(6, 12));  // usa random()
  desplazamientoBase = random(2, 6);
  dibujarTodo();
}
