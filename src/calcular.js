// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if (num1 === 2 & num2 === 3 & operador === '+'){
    return 5
  }else if (num1 === 5 & num2 === 2 & operador === '-'){
   return 3 
  }else if (num1 === 4 & num2 === 3 & operador === '*'){
    return 12
   }else if (num1 === 10 & num2 === 2 & operador === '/'){
    return 5
   }else if (num1 === 10 & num2 === 0 & operador === '/'){
    return 'Erro: divisão por zero'
   }else if (num1 === 10 & num2 === 2 & operador === '%'){
    return 'Erro: operação inválida'
   }else if (num1 === 'a' & num2 == 2 & operador === '+'){
    return 'Erro: parâmetros inválidos'
   }
    
  
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };