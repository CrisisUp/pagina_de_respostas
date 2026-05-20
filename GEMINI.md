# Diretrizes do Projeto: Simulado Dinâmico (UNIVESP)

Este documento estabelece as normas técnicas, arquiteturais e pedagógicas para a manutenção e expansão deste simulado, agora evoluído para uma plataforma multidisplinária do curso de Engenharia de Computação.

## 1. Arquitetura Multidisciplinar

- **Hierarquia de Dados**: O banco de questões em `questions.js` deve organizar o conteúdo por **Disciplina** (`subject`) e **Semana** (`week`).
- **Navegação em Cascata**: A interface utiliza dois seletores no topo:
  1. **Seletor de Disciplina**: Filtra as questões pela matéria (ex: "Física do Movimento", "Circuitos Digitais").
  2. **Seletor de Semana**: Atualiza-se dinamicamente conforme as semanas disponíveis para a disciplina selecionada.
- **Persistência de Sessão**: O progresso é salvo globalmente. A memória de respostas (`userAnswers`) utiliza o índice global da questão para garantir integridade mesmo ao trocar de filtros.

## 2. Padrões Pedagógicos (Obrigatório)

- **Literalidade do Conteúdo**: Textos de contextos, questões e explicações fornecidos pelo usuário devem ser mantidos de forma **integral e literal**. Não é permitido resumir ou simplificar o conteúdo pedagógico.
- **Feedback Condicional**:
  - **No Acerto**: Exibir apenas o título de acerto e a `correctExplanation`.
  - **No Erro**: Exibir o título de erro (em destaque vermelho), a `correctExplanation` e as `incorrectExplanations`.

## 3. Notação Científica e Matemática

Para garantir o profissionalismo técnico, deve-se utilizar:

- **Símbolos Técnicos**: Utilizar entidades HTML (ex: `&plusmn;`, `&approx;`, `&theta;`, `&Delta;`, `&part;`, `&nabla;`).
- **Abreviações de Unidades**: Usar abreviações técnicas (ex: **mm**, **m/s**, **km**, **s**, **N**, **V**) sempre em **negrito**.
- **Fórmulas**: Destaque com `<strong>`. Para módulos, use barras verticais e negrito (**|F|**).
- **Subscritos e Sobrescritos**: Tags `<sub>` e `<sup>` para isótopos, potências e componentes vetoriais.

## 5. Estrutura do Objeto de Questão (`questions.js`)

```javascript
{
  subject: "Nome da Disciplina",
  week: 1,
  context: "Texto rico com <br> e <strong>.",
  questionText: "Texto da pergunta.",
  options: [
    { letter: "A", text: "Opção", isCorrect: false },
    ...
  ],
  correctExplanation: "Explicação da correta.",
  incorrectExplanations: "Justificativa das incorretas."
}
```
