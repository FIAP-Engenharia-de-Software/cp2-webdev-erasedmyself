// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  let IMC = peso/(altura*altura)
  if ((typeof(peso)!=typeof(1.4))||(typeof(altura)!=(1.7))){
    return "Erro"
  }else if (altura == 0 || peso == 0){
    return "Erro"
  }else{
    if (IMC<18.5){
    return "Abaixo do peso"
  }else if(IMC>=18.5 & IMC<=24.9){
    return "Peso normal"
  }else if(IMC=>24.9 & IMC<=29.9){
    return "Sobrepeso"
  }else if(IMC>= 30){
    return "Obesidade"
  }
  }




  
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };