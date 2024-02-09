const perguntas = [
  {
    pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    respostas: [
      "var",
      "let",
      "const",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes é um tipo de dados primitivo em JavaScript?",
    respostas: [
      "Array",
      "Object",
      "String",
    ],
    correta: 2
  },
  {
    pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "' Este é um comentário",
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para exibir uma mensagem de alerta na caixa de diálogo em JavaScript?",
    respostas: [
      "messageBox()",
      "alertBox()",
      "alert()",
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes não é um operador de comparação em JavaScript?",
    respostas: [
      "==",
      "===",
      "!=",
    ],
    correta: 0
  },
  {
    pergunta: "Como você chama uma função em JavaScript?",
    respostas: [
      "call myFunction()",
      "myFunction()",
      "invoke myFunction()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
      "pop()",
      "removeLast()",
      "deleteLast()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: [
      "5",
      "32",
      "52",
    ],
    correta: 1
  },
  {
    pergunta: "Qual dos seguintes métodos é usado para converter uma string em minúsculas em JavaScript?",
    respostas: [
      "toLowerCase()",
      "toLower()",
      "lowerCase()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do seguinte código em JavaScript? \n console.log(1 + '2' + '2');",
    respostas: [
      "122",
      "14",
      "124",
    ],
    correta: 0
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}