let pantalla = "inicio";
let boton;

let xTeseo;      
let xMinotauro;  
let velocidadMinotauro = 2; 

function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, TOP);
  textSize(18);

  // posición inicial de los personajes
  xTeseo = width / 2;
  xMinotauro = width / 2;

  // botón 
  boton = createButton("Comenzar");
  boton.position(width / 2 - 40, height / 2 + 80);
  boton.mousePressed(cambiarPantalla);
}

function draw() {
  if (pantalla == "inicio") {
    // pantalla de inicio
    background(100, 150, 255);
    fill(255);
    textSize(30);
    text("INSTRUCCIONES", width / 2, 80);

    textSize(18);
    text(
      "Usá las flechas ← → para mover a Teseo\n" +
      "Evitá al Minotauro\n\n" +
      "Hacé clic en 'Comenzar' para jugar",
      width / 2, 180
    );

    boton.show();
  } 
  else if (pantalla == "juego") {
    // pantalla del juego
    background(180, 220, 180);
    boton.hide();

    // --- MINOTAURO ---
    fill(150, 50, 50);
    ellipse(xMinotauro, 80, 80, 80);
    fill(0);
    text("Minotauro", xMinotauro, 130);

    xMinotauro += velocidadMinotauro;
    if (xMinotauro > width - 40 || xMinotauro < 40) {
      velocidadMinotauro *= -1; // cambia de dirección al llegar al borde
    }

    // --- TESEO ---
    fill(50, 100, 200);
    ellipse(xTeseo, height - 80, 50, 50);
    fill(0);
    text("Teseo", xTeseo, height - 50);
  }
}

function keyPressed() {
  if (pantalla == "juego") {
    if (keyCode === LEFT_ARROW) {
      xTeseo -= 10; // mover a la izquierda
    } else if (keyCode === RIGHT_ARROW) {
      xTeseo += 10; // mover a la derecha
    }
  }
}

function cambiarPantalla() {
  pantalla = "juego";
}
