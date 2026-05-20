export const circuitosSemana01 = [
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Para o devido tratamento em sistemas digitais, as informações podem ser codificadas em bits. Por exemplo, ao transmitir os dados de um computador para uma impressora ou ao ler os dados de um teclado, estas informações são tratadas como um conjunto de bits. Quando tratado em circuitos eletrônicos, os bits podem ser representados, por exemplo, por níveis de tensão que conforme faixa de valores representam o bit 0, o bit 1 ou um valor inválido.<br><br>Observe a seguinte situação hipotética: Um determinado sistema precisou representar a seguinte sequência de bits <strong>01011100</strong> usando níveis de tensão.",
    questionText:
      "Seguindo os padrões estudados, assinale a alternativa que reconhece os níveis de tensão (em volts) que equivalem a este conjunto de bits.",
    options: [
      {
        letter: "A",
        text: "0,4 - 1,8 - 0,3 - 4,7 - 1,8 - 4,2 - 0,3 - 0,9",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "0,4 - 1,5 - 0,3 - 1,7 - 1,5 - 1,6 - 0,3 - 0,4",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "0,4 - 4,5 - 4,7 - 0,3 - 3,8 - 4,2 - 0,3 - 0,7",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "0,2 - 1,5 - 0,2 - 1,5 - 1,5 - 1,5 - 0,2 - 0,2",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7",
        isCorrect: true,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7"</strong> está correta pois para os bits 0 da sequência os valores de tensão estão conforme o padrão estudado, entre 0 e 0,8 <strong>V</strong>. Para os bits 1, os valores estão entre 2,0 e 5,0 <strong>V</strong> que são os padrões para cada um dos bits. Observe que para o primeiro, terceiro, sétimo e oitavo bits da sequência 01011100, todos bits 0, os valores de tensão foram respectivamente 0,4 - 0,3 - 0,3 e 0,7, abaixo de 0,8 <strong>V</strong>. Já para o segundo, quarto, quinto e sexto bits os valores de tensão foram respectivamente 4,5 - 4,7 - 3,8 e 4,2, dentro da faixa entre 2 e 5 <strong>V</strong> equivalente ao padrão de bit 1.</p>
      <p class="final-answer">A resposta correta é: 0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"0,4 - 4,5 - 4,7 - 0,3 - 3,8 - 4,2 - 0,3 - 0,7"</strong> está incorreta pois observando a sequência do enunciado 01011100 o terceiro e quarto valores de tensão estão trocados com valores equivalentes a 1 e 0 respectivamente e não a 0 e 1. Essa sequência seria 01101100 em vez da sequência do enunciado 01011100. Desconsiderando esta inversão do terceiro e quarto bits, levando em consideração apenas os níveis de tensão para bits 1 e 0, todos os valores de tensão estão dentro das faixas que representam os bits 0 e 1, não existem valores de tensão inválidos para representar os bits.</p>
      <p>A alternativa <strong>"0,2 - 1,5 - 0,2 - 1,5 - 1,5 - 1,5 - 0,2 - 0,2"</strong> está incorreta pois os valores de tensão 1,5, a princípio equivalente aos bits 1 da sequência, não estão na faixa válida entre 2,0 e 5,0 <strong>V</strong>. Quando fora das faixas válidas dos bits 0 e 1, a informação é considerada inválida e desta forma não refletiria a sequência do enunciado 01011100.</p>
      <p>A alternativa <strong>"0,4 - 1,5 - 0,3 - 1,7 - 1,5 - 1,6 - 0,3 - 0,4"</strong> está incorreta pois os bits, a princípio equivalentes aos bits 1, estão em faixa de valores de tensão inválida. Por exemplo, o segundo e quarto valores de tensão, 1,5 e 1,7 <strong>V</strong> não estão na faixa válida do bit 1, entre 2,0 e 5,0 <strong>V</strong>.</p>
      <p>A alternativa <strong>"0,4 - 1,8 - 0,3 - 4,7 - 1,8 - 4,2 - 0,3 - 0,9"</strong> está incorreta pois o valor de 1,8 <strong>V</strong> no segundo e quinto bits estão fora da faixa de valores para o bit 1, entre 2,0 e 5,0 <strong>V</strong>. Além disso, o último bit, com valor 0,9 <strong>V</strong> está com valor superior ao válido para o bit 0 que deveria ser entre 0 e 0,8 <strong>V</strong>.</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Algumas formas de implementar informação binária em circuitos é com resistores e chaves ou, no lugar das chaves, com transistores. Os transistores são formados por junções de semicondutores <strong>P</strong> ou <strong>N</strong>. Conforme configuração NMOS ou PMOS eles funcionam diferente para nível de tensão na porta. Por vezes é comum usar a nomenclatura <i>pull-down</i> e <i>pull-up</i> conforme a conexão de componentes, no caso os transistores, com a tensão baixa ou alta.<br><br>Em relação a estas formas de implementar <strong>bits 0</strong> e <strong>1</strong> usando circuitos com chaves ou transistores, análise as sentenças a seguir.",
    questionText: `<strong>I.</strong> Em um circuito <i>pull-down</i>, quando o transistor é ativado conduzindo a corrente, a tensão no dreno e por consequência na saída é de tensão baixa representando o <strong>bit 0</strong>.
    <br>
    <strong>II.</strong> Com um transistor <strong>PNP</strong> no papel de "chave" em uma rede <i>pull-up</i>, uma tensão alta na porta originará uma tensão alta na saída, e isso representará o <strong>bit 1</strong>.
    <br>
    <strong>III.</strong> Um transistor <strong>NPN</strong> é representado por um símbolo com um círculo na porta indicando que ele permite a passagem de corrente quando a porta recebe tensão baixa.
    <br>
    <strong>IV.</strong> Um transistor <strong>PMOS</strong> tem uma configuração <strong>PNP</strong> o que indica que uma tensão baixa na porta não possibilita a passagem de corrente entre os outros conectores.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      {
        letter: "A",
        text: "<strong>I e III, apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "<strong>I e II, apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "<strong>III e IV, apenas</strong>.",
        isCorrect: false,
      },
      { letter: "D", text: "<strong>IV apenas</strong>.", isCorrect: false },
      {
        letter: "E",
        text: "<strong>I, III e IV, apenas</strong>.",
        isCorrect: true,
      },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta pois de fato em um circuito do tipo <i>pull-down</i>, o transistor fica conectado com a tensão baixa. Desta forma, quando o transistor está ativado, funcionando como uma chave, a corrente passa pelo circuito e o dreno (conector superior) ligado a saída fica com tensão baixa equivalente ao <strong>bit 0</strong>.</p>
      
      <p>A afirmativa <strong>III</strong> é correta pois um transistor <strong>NPN</strong> possui um símbolo com um círculo no conector porta. O círculo em circuitos eletrônicos representa negação e indica que um sinal é ativado quando recebe um <strong>bit 0</strong> ou nível baixo de tensão. E é isso que acontece em transistor <strong>NPN</strong>, ele é ativado quando recebe tensão baixa na porta.</p>
      
      <p>A afirmativa <strong>IV</strong> está correta pois de fato a tecnologia <strong>PMOS</strong> indica que as extremidades da junção são do material do tipo <strong>P</strong> e a porta é do tipo <strong>N</strong>. Ele é ativado para níveis altos de tensão na porta, portanto na situação inversa, com níveis baixos de tensão na porta ele funciona como um circuito aberto que não permite a passagem de corrente.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> é incorreta pois em um transistor <strong>PNP</strong>, que possui um círculo na porta, uma tensão alta na porta faz com que ele funcione como uma chave aberta. Como ele é <i>pull-up</i> conectado a tensão alta, como uma chave aberta ele não permite que este nível passe para a saída, portanto a saída não consegue ter nível alto.</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Leia o trecho a seguir:<br><br>O <strong>[preencher 1]</strong> é uma unidade de informação comum em sistemas digitais, por exemplo, como em computadores e sistemas embarcados. Ela serve, por exemplo, para quantificar a capacidade de memória destes dispositivos. Esta unidade de informação é composta por <strong>[preencher 2]</strong> portanto pode assumir os valores entre <strong>[preencher 3]</strong>.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídas por:",
    options: [
      {
        letter: "A",
        text: "1 - nibble; 2 - 4 bits; 3 - 1 e 16.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - nibble; 2 - 8 bits; 3 - 0 e 32.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - byte; 2 - 8 bits; 3 - 0 e 255.",
        isCorrect: true,
      },
      {
        letter: "D",
        text: "1 - nibble; 2 - 4 bits; 3 - 1 e 32.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - byte; 2 - 8 bits; 3 - 1 e 256.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"1 - byte; 2 - 8 <strong>bits</strong>; 3 - 0 e 255."</strong> está correta pois de fato <i>byte</i> é uma unidade de informação muito empregada em computação, por exemplo, dizemos que um computador possui a capacidade de memória de 8 <strong>MB</strong> (<i>Megabytes</i>) ou 8 milhões de <i>bytes</i>. Cada <i>byte</i> é um conjunto de 8 <strong>bits</strong> portanto pode assumir 2<sup>8</sup> números que resulta em 256 números. Como o primeiro número é o 0, para se obter 256 números, o último deve ser o 255. Ou de outra forma, o último número da faixa é igual a <strong>2<sup>n</sup> - 1</strong>. Com n igual a 8, tem-se <strong>256 - 1</strong> que resulta em 255.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais respostas estão incorretas:</h4>
      <p>A alternativa <strong>"1 - byte; 2 - 8 <strong>bits</strong>; 3 - 1 e 256."</strong> está incorreta pois, apesar da unidade de informação comum sem sistemas de computação ser o <i>byte</i>, com 8 <strong>bits</strong> e com 256 possibilidades de números, há um erro na faixa de valores. A faixa não é entre 1 e 256, o correto seria entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 4 <strong>bits</strong>; 3 - 1 e 16."</strong> está incorreta pois a unidade de informação mais comum em sistemas de computação deveria ser <i>byte</i> e não <i>nibble</i>. Outro erro é que apesar do <i>nibble</i> possuir 4 <strong>bits</strong> que permite 16 valores válidos, eles são entre 0 e 15 e não entre 1 e 16. Como a resposta correta é <i>byte</i>, as outras lacunas deveriam ser 8 <strong>bits</strong> com números válidos entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 4 <strong>bits</strong>; 3 - 1 e 32."</strong> está incorreta pois a unidade de informação comumente usada em computação deveria ser <i>byte</i> e não <i>nibble</i>. Outro erro é que apesar do <i>nibble</i> possuir 4 <strong>bits</strong>, isso equivale a 16 valores válidos entre 0 e 15 e não a 32 valores válidos entre 1 e 32, ainda contendo o erro da faiza começar com 1. Como a resposta correta é <i>byte</i>, as outras lacunas deveriam ser 8 <strong>bits</strong> com números válidos entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 8 <strong>bits</strong>; 3 - 0 e 32."</strong> está incorreta pois a unidade de informação comumente usada em computação é o <i>byte</i> e não o <i>nibble</i>. Além disso, outro erro é que um <i>nibble</i> possui 4 <strong>bits</strong> e não 8 <strong>bits</strong>, que seria para um <i>byte</i>. Há ainda o erro de que 32 números possíveis seria para algo com 5 <strong>bits</strong>. Considerando o <i>byte</i> como a unidade de informação certa para a resposta, as outras lacunas deveriam ser 8 <strong>bits</strong> com números válidos entre 0 e 255.</p>
      <p class="final-answer">A resposta correta é: 1 - byte; 2 - 8 <strong>bits</strong>; 3 - 0 e 255.</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Além de sistemas de numeração, o tratamento de informações em sistemas digitais envolve diversos outros padrões e tipos de códigos. Por exemplo, o padrão IEEE-754 especifica como devem ser codificados números grandes chamados de ponto flutuante. Outros códigos como o BCD e o Gray adotam uma lógica própria para realizar a codificação e conversão de informações numéricas.",
    questionText: `A respeito destas codificações, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> Os números em ponto flutuante com precisão simples possuem <strong>32 bits</strong>, dentre eles <strong>8</strong> para o expoente.
    <br>
    <strong>II.</strong> O número <strong>24</strong> em decimal quando convertido para o código BCD resulta em <strong>00011000</strong>.
    <br>
    <strong>III.</strong> Ao converter o <strong>14</strong> em decimal para binário e depois para o código gray resulta em <strong>1001</strong>.
    <br>
    <strong>IV.</strong> O valor <strong>1011</strong> em código gray quando convertido para um código binário resulta em <strong>1101</strong>.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "<strong>I apenas</strong>.", isCorrect: false },
      {
        letter: "B",
        text: "<strong>I, III e IV apenas</strong>.",
        isCorrect: true,
      },
      {
        letter: "C",
        text: "<strong>III e IV apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "<strong>II e IV apenas</strong>.",
        isCorrect: false,
      },
      { letter: "E", text: "<strong>II apenas</strong>.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois de fato os números em ponto flutuante em precisão simples possuem <strong>8 <strong>bits</strong> reservados para o expoente. Esses números podem ter precisão simples, dupla e estendida com <strong>32</strong>, <strong>64</strong> e <strong>80 <strong>bits</strong> respectivamente. Quando com precisão simples, <strong>1 bit</strong> é usado para o sinal, <strong>8</strong> para o expoente e <strong>23</strong> para a mantissa.</p>
      
      <p>A afirmativa <strong>III</strong> é correta, pois o número <strong>14</strong> ao ser convertido para binário simples origina <strong>1110 (8+4+2)</strong>. Para a conversão de binário para gray, copia-se o primeiro dígito e depois soma-se em binário (por exemplo, <strong>1 + 1 = 10</strong>) os números dois a dois obtendo-se o resultado ignorando o <i>carry</i> (vai-um). Dessa forma, na conversão de 1110 tem-se:</p>
      
      <table border="1" style="width:100%; border-collapse: collapse; margin: 15px 0; font-size: 0.85rem; text-align: center;">
        <thead>
          <tr style="background-color: #f1f5f9;">
            <th>Foco</th>
            <th>Lógica</th>
            <th>Cálculo</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Para primeiro bit</td>
            <td>Copiar o <i>bit</i> inicial</td>
            <td>1</td>
            <td><strong>1</strong></td>
          </tr>
          <tr>
            <td>Para segundo bit</td>
            <td>Somar primeiro e segundo <i>bit</i> e ignorar o <i>carry</i> (vai-um)</td>
            <td>1+1 = <strong>10</strong> (ignora-se o 1)</td>
            <td><strong>0</strong></td>
          </tr>
          <tr>
            <td>Para terceiro bit</td>
            <td>Somar segundo e terceiro <i>bit</i> e ignorar o <i>carry</i> (vai-um)</td>
            <td>1+1 = <strong>10</strong> (ignora-se o 1)</td>
            <td><strong>0</strong></td>
          </tr>
          <tr>
            <td>Para quarto bit</td>
            <td>Somar terceiro e quarto bit e ignorar <i>carry</i> (vai-um)</td>
            <td>1+0 = <strong>0</strong></td>
            <td><strong>1</strong></td>
          </tr>
          <tr style="font-weight: bold; background-color: #f8fafc;">
            <td colspan="3" style="text-align: right;">Resultado</td>
            <td>1001</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size: 0.8rem; color: #64748b;">Tabela: Cálculo da conversão de 14 em decimal para código gray. Fonte: O autor</p>

      <p>A afirmativa <strong>IV</strong> é correta, pois o valor <strong>1011</strong> ao ser convertido de código gray para binário resulta mesmo em <strong>1101</strong>. Na conversão de código gray para binário copia-se o dígito mais significativo e depois realiza a soma do dígito obtido na soma com o próximo dígito. Por exemplo, ao converter 1011:</p>

      <table border="1" style="width:100%; border-collapse: collapse; margin: 15px 0; font-size: 0.85rem; text-align: center;">
        <thead>
          <tr style="background-color: #f1f5f9;">
            <th>Foco</th>
            <th>Lógica</th>
            <th>Cálculo</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Para primeiro bit</td>
            <td>Copiar o <i>bit</i> inicial</td>
            <td>1</td>
            <td><strong>1</strong></td>
          </tr>
          <tr>
            <td>Para segundo bit</td>
            <td>Somar primeiro com segundo <i>bit</i> e ignorar o <i>carry</i> (vai-um)</td>
            <td>1+0 = <strong>1</strong></td>
            <td><strong>1</strong></td>
          </tr>
          <tr>
            <td>Para terceiro bit</td>
            <td>Somar resultado anterior com terceiro <i>bit</i> e ignorar o <i>carry</i> (vai-um)</td>
            <td>1+1 = <strong>10</strong> (ignora-se o 1)</td>
            <td><strong>0</strong></td>
          </tr>
          <tr>
            <td>Para quarto bit</td>
            <td>Somar resultado anterior e quarto bit e ignorar <i>carry</i> (vai-um)</td>
            <td>0+1 = <strong>0</strong></td>
            <td><strong>1</strong></td>
          </tr>
          <tr style="font-weight: bold; background-color: #f8fafc;">
            <td colspan="3" style="text-align: right;">Resultado</td>
            <td>1101</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size: 0.8rem; color: #64748b;">Tabela: Cálculo da conversão de 14 em decimal para código gray. Fonte: O autor</p>

      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois em código BCD a conversão é realizada símbolo a símbolo. No exemplo, o 24 é visto como a combinação de 2 e 4 que são convertidos separados, gerando o número 0010 0100. O número binário apresentado, 00011000, é uma conversão decimal binário simples, em que 24 é visto como 16+8 equivalente às posições do 1 no número.</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Em nosso cotidiano lidamos com diversas informações, o peso de uma mercadoria em uma balança, a hora em um relógio digital e cálculos financeiros. Elas são tratadas por sistemas digitais (balança, relógio e calculadora) e podem ser representadas em diversas bases conforme algum sistema de numeração. Em seu tratamento podem ser necessárias conversões por exemplo de um sistema binário para um sistema decimal e vice-versa.<br><br>Imagine por exemplo que the número <strong>10101.011</strong> em binário precise ser convertido para base decimal para expressar o peso de uma mercadoria.",
    questionText:
      "Assinale a alternativa que calcula a conversão deste número <strong>10101.011</strong> em binário para o equivalente em sistema decimal.",
    options: [
      { letter: "A", text: "21.375.", isCorrect: true },
      { letter: "B", text: "11.375.", isCorrect: false },
      { letter: "C", text: "11.625.", isCorrect: false },
      { letter: "D", text: "21.500.", isCorrect: false },
      { letter: "E", text: "31.500.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"21.375"</strong> é correta pois ao obedecer o princípio de valor-posição e ao fazer a conversão de número binário para decimal incluindo as partes decimais, pode-se fazer da seguinte forma:</p>
      <p>O número 10101.011 é igual a:</p>
      <p style="text-align: center;">(1 &times; 2<sup>4</sup>) + (0 &times; 2<sup>3</sup>) + (1 &times; 2<sup>2</sup>) + (0 &times; 2<sup>1</sup>) + (1 &times; 2<sup>0</sup>) + (0 &times; 2<sup>-1</sup>) + (1 &times; 2<sup>-2</sup>) + (1 &times; 2<sup>-3</sup>)</p>
      <p style="text-align: center;">= 16 + 0 + 4 + 0 + 1 + 0 + 0.25 + 0.125 = 21.375</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"21.500"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição. Apesar da parte inteira ser equivalente ao 21, a parte decimal .100 equivale a 1 &times; 2<sup>-1</sup> que é igual a 0.50. O número binário completo seria 10101.100 para 21.500 e não o que foi apresentado no enunciado 10101.011.</p>
      <p>A alternativa <strong>"11.625"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição e ambas partes estão erradas. A parte inteira 1011 equivale a 11 e a parte decimal equivale a .101. O número binário completo seria 1011.101 e não o que foi exposto no enunciado 10101.011.</p>
      <p>A alternativa <strong>"31.500"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição e ambas partes estão erradas. A parte inteira 11111 equivale a 31 e a parte decimal equivale a .100. O número binário completo seria 11111.100 e não o que foi exposto no enunciado 10101.011.</p>
      <p>A alternativa <strong>"11.375"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição. Apesar da parte decimal estar correta a parte inteira está errada. O número 1011 equivale a 11. O número binário completo seria 1011.011 e não o que foi exposto no enunciado 10101.011.</p>
      <p class="final-answer">A resposta correta é: 21.375.</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Um sistema de numeração usa símbolos para representar informação numérica. Egípcios usavam, por exemplo, desenhos de bastão, corda e flor de lis. Já os símbolos <strong>I, V, X, L, C, D e M</strong> são exemplos em números romanos. Alguns sistemas usam o princípio valor-posição em que uma posição indica um valor ligado a potência da base. Por exemplo, em <strong>324</strong>, o <strong>3</strong> na terceira casa da direita para a esquerda, é quantificado para <strong>3 centenas</strong> (<strong>3</strong> multiplicado por <strong>10<sup>2</sup></strong>).",
    questionText: `Considerando alguns dos sistemas de numeração, observe as afirmativas a seguir.
    <br><br>
    <strong>I.</strong> O dígito <strong>3</strong> na segunda casa da direita para esquerda em um sistema duodecimal equivale a 36 unidades no sistema decimal.
    <br>
    <strong>II.</strong> O dígito <strong>4</strong> na primeira casa após a vírgula em um sistema octal equivale ao número <strong>0,5</strong> em um sistema decimal.
    <br>
    <strong>III.</strong> O dígito <strong>B</strong> na segunda casa da direita para a esquerda em um sistema hexadecimal equivale a <strong>176</strong> unidades em um sistema decimal.
    <br>
    <strong>IV.</strong> O dígito <strong>1</strong> na quinta casa da direita para esquerda em um sistema binário equivale a <strong>32</strong> unidades em um sistema decimal.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      {
        letter: "A",
        text: "<strong>I e II apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "<strong>II e IV apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "<strong>I, II e III apenas</strong>.",
        isCorrect: true,
      },
      {
        letter: "D",
        text: "<strong>III e IV apenas</strong>.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "<strong>I, III e IV apenas</strong>.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta pois um sistema duodecimal possui base <strong>12</strong> e um dígito na segunda casa da direita para esquerda, no caso o <strong>3</strong>, deve ser multiplicado por <strong>12</strong> elevado a potência de <strong>1</strong>. Para a primeira casa a potência da base é <strong>0</strong>, para a segunda casa a potência da base é <strong>1</strong> e para a terceira a potência da base é 2 e assim sucessivamente. Daí, <strong>3</strong> multiplicado por 12 a potência de 1 (<strong>3 &times; 12<sup>1</sup></strong>) é igual a 36.</p>

      <p>A afirmativa <strong>II</strong> é correta pois o sistema octal tem base 8 e o dígito <strong>4</strong> na primeira casa após a vírgula equivale ao <strong>8</strong> elevado a potência -1 (<strong>8<sup>-1</sup></strong>), ou seja, equivale a 4 dividido por 8 que é igual a 0,5.</p>

      <p>A afirmativa <strong>III</strong> é correta pois o sistema hexadecimal possui base <strong>16</strong> e para representar os dígitos de 10 a 15 usam-se as letras <strong>A a F</strong>. Na segunda casa da direita para esquerda deve-se multiplicar o número por 16 elevado a potência de 1. Daí, <strong>B</strong> (equivalente a 11) multiplicado por 16 (<strong>11 &times; 16<sup>1</sup></strong>) resulta em 176.</p>
      
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> é incorreta pois no sistema binário a base é 2 e a quinta casa da direita para a esquerda equivale a 2 elevado a potência 4 (<strong>2<sup>4</sup></strong>), perceba que em cada casa da parte inteira a potência subtrai de um em relação a posição já que a primeira casa precisa ser da potência 0 (zero). Desta forma 2 elevado a potência 4 (<strong>2<sup>4</sup></strong>) resulta em 16 e não a 32 que seria 2 elevado a potência 5 (<strong>2<sup>5</sup></strong>).</p>
    `,
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context:
      "Informações numéricas em sistemas podem ser tratadas em diversos formatos e com seus respectivos sistemas de numeração. Por exemplo, ao digitar a quantidade de peças produzidas em uma fábrica, o usuário pode inserir o número 78 em decimal mas internamente este número será um número binário. Para compreender a conversão de um sistema decimal para binário, alguns métodos usados são o das divisões sucessivas ou o da inspeção.",
    questionText:
      "Neste contexto, assinale a alternativa que calcula a sentença com o cálculo correto da conversão do número <strong>78<sub>10</sub></strong> para sua representação em número binário.",
    options: [
      { letter: "A", text: "1001110<sub>2</sub>", isCorrect: true },
      { letter: "B", text: "10011000<sub>2</sub>", isCorrect: false },
      { letter: "C", text: "1001000<sub>2</sub>", isCorrect: false },
      { letter: "D", text: "11001110<sub>2</sub>", isCorrect: false },
      { letter: "E", text: "1101110<sub>2</sub>", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa <strong>1001110<sub>2</sub></strong> é correta pois a conversão de um número decimal para o número binário pode seguir o método de inspeção ou método de divisão sucessivas. No método por inspeção, verifica-se quais potências de 2 somadas forma o número. Daí, usando o método da inspeção, percebe-se que 78 é a soma das seguintes <strong>78 = 64+8+4+2</strong> equivalentes às potências 6, 3, 2 e 1 da base 2. Por isso os dígitos 1 ocupam esta posição no número binário da resposta. Pelo método das divisões sucessivas, o cálculo seria o seguinte. Ao observar a ordem desde o primeiro 1 inferior até o zero superior, obtem-se <strong>1001110<sub>2</sub></strong>.</p>
      
      <p><strong>Figura: Divisões sucessivas por 2 do número 78</strong><br>
      Fonte: O autor.<br>
      Descrição:<br>
      A Figura apresenta várias divisões sucessivas provenientes de 78 por 2, iniciando no canto superior esquerdo e evoluindo em diagonal até o canto inferior direito.<br>
      A primeira divisão de 78 por 2 resulta em 39 com resto 0.<br>
      A segunda divisão é de 39 por 2 que resulta em 19 com resto 1.<br>
      A terceira divisão é de 19 por 2 que resulta em 9 com resto 1.<br>
      A quarta divisão é de 9 por 2 que resulta em 4 com resto 1.<br>
      A quinta divisão é de 4 por 2 que resulta em 2 com resto 0.<br>
      A sexta divisão é de 2 por 2 que resulta em 1 com resto 0.<br>
      Assim, de cima para baixo tem-se a sequência 0111001 que invertido gera a sequência 1001110.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>10011000<sub>2</sub></strong> é incorreta pois além do cálculo mostrado na alternativa correta vale também testar a conversão de binário para decimal. A realizar isso, percebe-se que este número binário <strong>10011000<sub>2</sub></strong> equivale ao número 152 decimal. Vale perceber que os valores 1 são equivalentes aos números 128, 16 e 8 que somados resultam em 152. Percebe-se ainda que o primeiro 1 já possui um peso de 128 muito maior que o número desejado, de 78.</p>
      
      <p>A alternativa <strong>1001000<sub>2</sub></strong> é incorreta pois além do cálculo mostrado na alternativa correta vale também testar a conversão de binário para decimal. A realizar isso, percebe-se que este número binário <strong>1001000<sub>2</sub></strong> equivale ao número 72 em decimal. Vale perceber que os valores 1 são equivalentes aos números 64 e 8 que somados resultam em 72, diferente do número 78 desejado.</p>
      
      <p>A alternativa <strong>1101110<sub>2</sub></strong> é incorreta pois além do cálculo mostrado na alternativa correta vale também testar a conversão de binário para decimal. A realizar isso, percebe-se que este número binário <strong>1101110<sub>2</sub></strong> equivale ao número 110 em decimal. Vale perceber que os valores 1 são equivalentes aos números 64, 32, 8, 4 e 2 que somados resultam em 110, diferente do número 78 desejado.</p>
      
      <p>A alternativa <strong>11001110<sub>2</sub></strong> é incorreta pois além do cálculo mostrado na alternativa correta vale também testar a conversão de binário para decimal. A realizar isso, percebe-se que este número binário <strong>11001110<sub>2</sub></strong> equivale ao número 206 em decimal. Vale perceber que os valores 1 são equivalentes aos números 128, 64, 8, 4 e 2 que resulta em 206, diferente do número 78 desejado.</p>
      <p class="final-answer">A resposta correta é: 1001110<sub>2</sub></p>
    `,
  },
];
