let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
  createCanvas(400, 400);
  background(100, 0, 0); // Use a função background diretamente para definir a cor de fundo
  cor = color(random(0, 255), random(0, 255), random(0, 255)); // Inicialize a cor com um valor aleatório
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);

  if (mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
  if (mouseY < posicaoVertical) {
    posicaoVertical = posicaoVertical - 1;
  }
  if (mouseY > posicaoVertical) {
    posicaoVertical = posicaoVertical + 1;
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255)); // Atualize a cor com valores aleatórios
  }
}
