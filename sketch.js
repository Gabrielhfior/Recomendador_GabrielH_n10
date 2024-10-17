// Trap, Love Song

// Dança do Pinguim - Aline Barros, LIVRE, Worship    a viagem de chihiro
// Tu És - fhop Music, LIVRE, Worship    paddington
// Limitado, Nesk Only, 10, Trap, Worship       as aventuras de pi

// Yebba's Heartbreak - Drake, Yebba, 12, Love Song.     ladroes de bicicleta 
// Pela Manhã, Nesk Only         dps da chuva


  let campoIdade;
  let campoTrap;
  let campoLoveSong;

function setup() {
    createCanvas(800, 400);
    createElement("h2", "Recomendador de Músicas");
    createSpan("Sua Idade: ");
    campoIdade = createInput("5");
    campoTrap = createCheckbox("Gosta de Trap?");
    campoLoveSong = createCheckbox ("Gosta de Love Song?");
}

function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeTrap = campoTrap.checked();
    let gostaDeLoveSong = campoLoveSong.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeTrap, gostaDeLoveSong);

    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTrap, gostaDeLoveSong) {
  if(idade >= 10) {
    if(idade >= 25) {
      return "Planos - BK";
    } else {
      if(idade >= 15) {
        if(gostaDeTrap || gostaDeLoveSong) {
          return "Poesia Acústica";
        } else {
          return "Golden Hour - JVKE";
        }
            } else {
            if(gostaDeTrap){
                return "Limitado - Nesk Only";
            } else {
                return "Pela Manhã - Nesk Only";
             }
          }
        }
    } else {
        if(gostaDeTrap) {
            return "Imprevisto - Yago Oproprio";
        } else {
            return "her - JVKE";
        }
    }
}
