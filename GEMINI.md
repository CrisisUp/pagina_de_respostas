# Diretrizes do Projeto: Simulado Dinâmico (UNIVESP)

Este documento estabelece as normas técnicas, arquiteturais e pedagógicas para a manutenção e expansão deste simulado, agora evoluído para uma plataforma multidisplinária do curso de Engenharia de Computação.

## 1. Arquitetura de Dados e Modularização

Para garantir a escalabilidade e evitar arquivos gigantescos, o banco de questões segue uma estrutura estritamente modular:

- **Organização de Pastas**: `data/[subject]/[subject].semana[XX].js` (ex: `data/fisica/fisica.semana01.js`).
- **Padrão de Exportação**: Cada arquivo semanal deve exportar uma constante nomeada seguindo o padrão camelCase: `export const fisicaSemana01 = [...]`.
- **Agregação em Cascata**:
  1. Arquivos semanais são importados e exportados em `data/[subject]/index.js`.
  2. Cada `index.js` de disciplina é importado em `data/index.js`, que exporta a constante global `allQuestions`.
- **Placeholder**: Arquivos planejados para o futuro (ex: `semana07`) devem ser criados como arquivos vazios ou com um array vazio, mas registrados no `index.js` apenas quando possuírem conteúdo.

## 2. Padrões Pedagógicos (Obrigatório)

- **Literalidade do Conteúdo**: Textos de contextos, questões e explicações fornecidos pelo usuário devem ser mantidos de forma **integral e literal**. Não é permitido resumir ou simplificar o conteúdo pedagógico.
- **Feedback Condicional**:
  - **No Acerto**: Exibir apenas o título de acerto e a `correctExplanation`.
  - **No Erro**: Exibir o título de erro (em destaque vermelho), a `correctExplanation` e as `incorrectExplanations`.

## 3. Notação Científica e Matemática

Para garantir o profissionalismo técnico e evitar problemas de codificação, deve-se utilizar:

### 3.1 Entidades HTML para Símbolos
Sempre substitua caracteres especiais por suas entidades HTML:
- `&theta;` (θ), `&Delta;` (Δ), `&approx;` (≈), `&oplus;` (⊕), `&sdot;` (⋅), `&times;` (×), `&part;` (∂), `&nabla;` (∇), `&radic;` (√), `&pi;` (π), `&omega;` (ω), `&alpha;` (α), `&tau;` (τ), `&rarr;` (→), `&ordm;` (º), `&deg;` (°).

### 3.2 Unidades e Grandezas
- **Negrito Obrigatório**: Todas as unidades técnicas devem estar entre `<strong>`.
- **Espaçamento**: Deve haver um espaço entre o valor numérico e a unidade (ex: `10 <strong>m/s</strong>`).
- **Lista de Unidades**: `m/s`, `rad/s`, `km`, `mm`, `kg`, `bits`, `bytes`, `MB`, `GB`, `Hz`, `N`, `V`, `J`, `W`, `A`, `m`, `s`.
- **Fórmulas e Módulos**: Destaque com `<strong>`. Módulos de vetores devem ser `<strong>|F|</strong>`.
- **Subscritos e Sobrescritos**: Use `<sub>` e `<sup>`.

### 3.3 Palavras-Chave de Programação
- Em disciplinas de computação (ex: Circuitos Digitais), palavras-chave de linguagens (VHDL, C) como `entity`, `architecture`, `if`, `then` devem ser formatadas com `<strong>`.

## 4. Manutenção e Higiene de Código

- **Scripts de Correção**: O projeto conta com `standardize.js` e `fix_tags.js`. Eles devem ser executados após grandes adições de dados para garantir:
  - Conversão automática de símbolos para entidades.
  - Aplicação de negrito em unidades.
  - Remoção de tags redundantes (ex: `<strong><strong>`) ou vazias.
  - Balanceamento de tags `<strong>`.
- **Persistência de Sessão**: A memória de respostas (`userAnswers`) utiliza o índice global da questão (`questions.indexOf(q)`) para garantir integridade. Nunca altere a ordem das questões em arquivos antigos para não corromper o progresso dos usuários.

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
