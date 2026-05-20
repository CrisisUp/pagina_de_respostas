export const fisicaSemana06 = [
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Uma bancada de madeira possui três pernas de <strong>L = 1,20m</strong> de comprimento e uma quarta perna com um comprimento adicional de <strong>d = 0,40 cm</strong> o que a torna instável inicialmente</strong>. Um bloco metálico de <strong>M = 320 kg</strong> é colocado sobre a bancada, comprimindo suas quatro pernas e tornando a estrutura nivelada</strong>. As pernas da bancada são cilindros ocos de aço com área de seção reta de <strong>A = 2,5cm<sup>2</sup></strong> e módulo de Young <strong>E = 2,0 &times; 10<sup>10</sup> N/m<sup>2</sup></strong>.<br>Sabendo que a força gravitacional atuante no bloco é <strong>g = 9,8 m/s<sup>2</sup></strong>, analise as afirmativas a seguir:",
    questionText: `<strong>I.</strong> A deformação elástica na perna mais longa é maior do que nas demais, pois ela inicialmente não está em contato com o solo.
    <br>
    <strong>II.</strong> A força exercida pelo solo sobre cada uma das três pernas de mesmo tamanho pode ser expressa por <strong>F<sub>3</sub> = Mg/4 - dAE/4L</strong>.
    <br>
    <strong>III.</strong> A força na quarta perna é maior do que nas demais, pois ela precisa compensar a diferença de altura inicial para garantir o equilíbrio da bancada.
    <br>
    <strong>IV.</strong> Se o valor de d fosse maior, a força na quarta perna diminuiria, pois a estrutura ficaria ainda mais instável.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "II e IV, apenas.", isCorrect: false },
      { letter: "D", text: "I e II, apenas.", isCorrect: false },
      { letter: "E", text: "I, II, III e IV.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a deformação elástica &Delta;L de um material está diretamente relacionada à força aplicada, ao comprimento inicial da estrutura, à área da seção reta e ao módulo de Young, conforme a equação: <strong>&Delta;L = FL/AE</strong>. A quarta perna da bancada tem um comprimento inicial maior do que as outras por um valor <strong>d = 0,40 <strong>cm</strong>. Isso significa que, antes da aplicação do peso do bloco metálico, ela não estava completamente em contato com o solo. À medida que o bloco é colocado sobre a bancada, a força sobre as pernas comprime todas elas, e a quarta perna precisa sofrer uma deformação adicional d para que a mesa fique nivelada. Como a deformação elástica é proporcional à força aplicada, isso comprova que: &Delta;L<sub>4</sub> = &Delta;L<sub>3</sub> + d. Ou seja, a quarta perna sofre uma deformação maior do que as outras três, validando a afirmativa.</p>
      
      <p>A afirmativa <strong>II</strong> está correta. Para encontrar a força exercida pelo solo sobre as três pernas de mesmo tamanho (F<sub>3</sub>), utilizamos a equação da equivalência de deformação para nivelar a mesa:</p>
      <p style="text-align: center;">F<sub>4</sub>L / <strong>AE = F</strong><sub>3</sub>L / AE + d</p>
      <p>Cancelando os termos comuns e isolando F<sub>4</sub>, obtemos: F<sub>4</sub> = F<sub>3</sub> + dAE / L</p>
      <p>Sabemos que a soma das forças verticais deve ser igual ao peso total do bloco para garantir o equilíbrio da bancada: 3F<sub>3</sub> + F<sub>4</sub> = Mg. Substituindo F<sub>4</sub> na equação:</p>
      <p style="text-align: center;">3F<sub>3</sub> + (F<sub>3</sub> + dAE / L) = Mg &rarr; 4F<sub>3</sub> = Mg - dAE / L</p>
      <p>Isolando F<sub>3</sub>, F<sub>3</sub> = Mg / 4 - dAE / 4L. A equação coincide exatamente com a fornecida na afirmativa, provando sua correção.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois verificamos a força que a quarta perna exerce sobre o solo (F<sub>4</sub>), a partir da equação de equilíbrio F<sub>4</sub> = Mg - 3F<sub>3</sub>. Substituímos F<sub>3</sub> obtido anteriormente:</p>
      <p style="text-align: center;">F<sub>4</sub> = Mg - 3(Mg / 4 - dAE / 4L)</p>
      <p>Distribuindo os termos:</p>
      <p style="text-align: center;">F<sub>4</sub> = Mg - 3Mg / 4 + 3dAE / 4 <strong>L = (4Mg - 3Mg) / 4 + 3dAE / 4L = Mg / 4 + 3dAE / 4L</strong></p>
      <p>Como Mg é o peso total do bloco e a deformação da quarta perna exige um aumento da força para compensar d, concluímos que F<sub>4</sub> > F<sub>3</sub>, isso confirma que a quarta perna suporta uma força maior do que as outras três, validando a afirmativa.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois se o valor de d fosse maior, a deformação necessária da quarta perna seria ainda maior, e, para garantir que a mesa permanecesse nivelada, a força sobre essa perna também aumentaria. Da equação F<sub>4</sub> = Mg / 4 + 3dAE / 4L, percebe-se que um aumento em d aumentaria o termo adicional, resultando em uma força F<sub>4</sub> maior e não menor. Portanto, a afirmativa <strong>IV</strong> está errada.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Uma barra rígida e homogênea de comprimento <strong>L = 2,0m</strong> e massa <strong>M = 3,0 kg</strong> está apoiada em dois pontos, um em cada extremidade, onde estão posicionadas balanças para medir as forças de reação</strong>. A barra permanece em equilíbrio horizontal. Sobre a barra, é colocado um bloco de massa <strong>m = 5,0 kg</strong> a uma distância de <strong>L/4</strong> do apoio da esquerda</strong>.<br><br>Considerando a aceleração da gravidade <strong>g = 9,8 m/s<sup>2</sup></strong> e desprezando a massa das balanças e qualquer outra força externa, assinale a alternativa que aplica os valores de força indicados pela balança esquerda (F<sub>e</sub>) e direita (F<sub>d</sub>)</strong>.",
    questionText: "Assinale a alternativa correta:",
    options: [
      {
        letter: "A",
        text: "<strong>F<sub>e</sub> = 20,5 N ; F<sub>d</sub> = 43,1 N</strong>",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "<strong>F<sub>e</sub> = 40,2 N ; F<sub>d</sub> = 21,5 N</strong>",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "<strong>F<sub>e</sub> = 25,6 N ; F<sub>d</sub> = 37,2 N</strong>",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "<strong>F<sub>e</sub> = 30,3 N ; F<sub>d</sub> = 32,5 N</strong>",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "<strong>F<sub>e</sub> = 35,8 N ; F<sub>d</sub> = 27,0 N</strong>",
        isCorrect: true,
      },
    ],
    correctExplanation: `
      <p>A alternativa "F<sub>e</sub> = 35,8 <strong>N</strong> e F<sub>d</sub> = 27,0 <strong>N</strong>" está correta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 <strong>N</strong></p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero:</p>
      <p style="text-align: center;">F<sub>d</sub> &sdot; <strong>L = Mg &sdot; L/2 + mg &sdot; L/4</strong></p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9</p>
      <p>Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 <strong>N</strong>. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 <strong>N</strong>.</p>
      <p class="final-answer">A resposta correta é: F<sub>e</sub> = 35,8 <strong>N</strong> e F<sub>d</sub> = 27,0 <strong>N</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>- A alternativa “F<sub>e</sub> = 30,3 <strong>N</strong> e F<sub>d</sub> = 32,5 <strong>N</strong>” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 <strong>N</strong></p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; <strong>L = Mg &sdot; L/2 + mg &sdot; L/4</strong>. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 <strong>N</strong>. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 <strong>N</strong>.</p>

      <p>- A alternativa “F<sub>e</sub> = 25,6 <strong>N</strong> e F<sub>d</sub> = 37,2 <strong>N</strong>” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 <strong>N</strong></p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; <strong>L = Mg &sdot; L/2 + mg &sdot; L/4</strong>. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 <strong>N</strong>. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 <strong>N</strong>.</p>

      <p>- A alternativa “F<sub>e</sub> = 40,2 <strong>N</strong> e F<sub>d</sub> = 21,5 <strong>N</strong>” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 <strong>N</strong></p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; <strong>L = Mg &sdot; L/2 + mg &sdot; L/4</strong>. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 <strong>N</strong>. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 <strong>N</strong>.</p>

      <p>- A alternativa “F<sub>e</sub> = 20,5 <strong>N</strong> e F<sub>d</sub> = 43,1 <strong>N</strong>” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 <strong>N</strong></p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; <strong>L = Mg &sdot; L/2 + mg &sdot; L/4</strong>. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 <strong>N</strong>. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 <strong>N</strong>.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Na engenharia estrutural, a análise das deformações e tensões é essencial para garantir a segurança de construções e componentes mecânicos. Quando um material é submetido a uma força externa, ele sofre uma deformação proporcional à tensão aplicada, de acordo com a lei de Hooke. Considere um fio de aço de comprimento inicial <strong>l<sub>0</sub> = 2,5m</strong> e seção reta <strong>A = 3,0 mm<sup>2</sup></strong>, submetido a uma força de tração <strong>F = 1800 N</strong>. O módulo de Young do aço é <strong>Y<sub>aço</sub> = 2,0 &times; 10<sup>11</sup> N/m<sup>2</sup></strong>.",
    questionText: `Com base nesses dados e considerando que o módulo de Young do cobre é de <strong>Y = 1,1 &times; 10</strong><sup>11</sup> N/m<sup>2</sup>, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A tensão no fio é <strong>1,0 &times; 10<sup>9</sup> N/m<sup>2</sup></strong>.
    <br>
    <strong>II.</strong> A deformação do fio é <strong>300 &times; 10<sup>-3</sup></strong>.
    <br>
    <strong>III.</strong> A variação de comprimento do fio devido à força aplicada é <strong>7,5 mm</strong>.
    <br>
    <strong>IV.</strong> Se a mesma força fosse aplicada a um fio de cobre de mesmo comprimento e área de seção reta, a deformação seria maior.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II, III e IV.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: false },
      { letter: "C", text: "I, II e III, apenas.", isCorrect: false },
      { letter: "D", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "E", text: "III e IV, apenas.", isCorrect: true },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>III</strong> está correta, pois a variação de comprimento do fio pode ser determinada pela equação:</p>
      <p style="text-align: center;">&Delta;l = (F &sdot; l<sub>0</sub>) / (Y &sdot; A)</p>
      <p>Substituindo os valores do problema:</p>
      <p style="text-align: center;">&Delta;l = (1800 &sdot; 2,5) / ( (2,0 &times; 10<sup>11</sup>) &sdot; (3,0 &times; 10<sup>-6</sup>) ) = 4500 / (6,0 &times; 10<sup>5</sup>) = 7,5 &times; 10<sup>-3</sup> m</p>
      <p>Portanto, a variação de comprimento do fio devido à força aplicada é 7,5 <strong>mm</strong>, confirmando a afirmativa <strong>III</strong>.</p>
      
      <p>A afirmativa <strong>IV</strong> está correta, pois a deformação em um material depende do seu módulo de Young (Y). Se aplicarmos a mesma força em um fio de cobre com mesmas dimensões, mas com um módulo de Young menor (Y<sub>cobre</sub> = 1,1 &times; 10<sup>11</sup> N/m<sup>2</sup>), a deformação resultante será maior. Sabemos que a deformação é dada por: <strong>&epsilon; = &sigma; / Y</strong>. Como Y<sub>cobre</sub> < Y<sub>aço</sub>, então &epsilon;<sub>cobre</sub> > &epsilon;<sub>aço</sub>, indicando que o fio de cobre se deformaria mais sob a mesma força aplicada. Isso confirma que a afirmativa <strong>IV</strong> está correta.</p>
      <p class="final-answer">A resposta correta é: III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>I</strong> está incorreta, pois a tensão no fio pode ser determinada pela equação da tensão mecânica: <strong>&sigma; = F / A</strong>. Substituindo os valores fornecidos no problema: <strong>&sigma; = 1800 / (3,0 &times; 10</strong><sup>-6</sup>) = 6,0 &times; 10<sup>8</sup> N/m<sup>2</sup>. Esse resultado confirma que a tensão no fio é 6,0 &times; 10<sup>8</sup> N/m<sup>2</sup> diferindo do valor apresentado na afirmativa.</p>
      <p>A afirmativa <strong>II</strong> está incorreta, pois a deformação do fio pode ser determinada utilizando a relação entre tensão e o módulo de elasticidade: <strong>&epsilon; = &sigma; / Y</strong>. Substituindo os valores: <strong>&epsilon; = (6,0 &times; 10</strong><sup>8</sup>) / (2,0 &times; 10<sup>11</sup>) = 3,0 &times; 10<sup>-3</sup>. Portanto, a deformação do fio é 3,0 &times; 10<sup>-3</sup>, valor que difere do apresentado na afirmativa.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Leia o trecho a seguir:<br><br>A posição do centro de gravidade de um corpo é um fator determinante para sua estabilidade e equilíbrio. Em corpos simétricos, como esferas, cubos e placas homogêneas, o centro de gravidade coincide com <strong>[preencher 1]</strong>, facilitando sua determinação. Para corpos mais complexos, pode-se estimar sua posição aproximando a estrutura por pequenas partes <strong>[preencher 2]</strong>, aplicando métodos matemáticos adequados para sua localização. Além disso, a estabilidade de um corpo depende diretamente da posição do seu centro de gravidade: quando ele está <strong>[preencher 3]</strong>, há uma menor probabilidade de tombamento, pois o torque gerado por forças externas é reduzido. Essa relação é observada em veículos, edifícios e até mesmo em animais, onde um centro de gravidade mais próximo do solo favorece o equilíbrio e a mobilidade segura.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - sua borda externa; 2 - homogêneas; 3 - instável",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - seu eixo de rotação; 2 - elásticas; 3 - elevado",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - seu centro geométrico; 2 - simétricas; 3 - baixo",
        isCorrect: true,
      },
      {
        letter: "D",
        text: "1 - sua superfície de contato; 2 - aleatórias; 3 - alto",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - seu ponto de suspensão; 2 - irregulares; 3 - disperso",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "1 - seu centro geométrico; 2 - simétricas; 3 - baixo" está correta, pois o centro de gravidade, em corpos simétricos como esferas, cubos e placas homogêneas, coincide com o centro geométrico, facilitando sua determinação. Quando se trata de corpos mais complexos, é possível estimar sua posição considerando que são compostos por pequenas partes simétricas, o que permite a aplicação de métodos matemáticos para sua localização. Além disso, a estabilidade de um corpo está diretamente relacionada à posição do seu centro de gravidade. Quanto mais baixo ele estiver, menor será a probabilidade de tombamento, pois isso reduz a influência de forças externas que possam gerar um torque capaz de desequilibrar o sistema. Essa relação pode ser observada em diversos contextos, como no design de veículos, na construção de edifícios e até mesmo na locomoção de animais, onde um centro de gravidade mais próximo do solo favorece o equilíbrio e a mobilidade segura.</p>
      <p class="final-answer">A resposta correta é: 1 - seu centro geométrico; 2 - simétricas; 3 - baixo</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas por diversos motivos:</h4>
      <p>- A alternativa “1 - seu eixo de rotação; 2 - elásticas; 3 - elevado” não é adequada, pois o centro de gravidade nem sempre coincide com o eixo de rotação, e um centro de gravidade elevado compromete a estabilidade, tornando o corpo mais suscetível a tombamentos.</p>
      <p>- A alternativa “1 - sua borda externa; 2 - homogêneas; 3 - instável” também está errada, pois a borda externa não é um critério válido para a determinação do centro de gravidade, e corpos homogêneos nem sempre podem ser divididos em partes simétricas. Além disso, um centro de gravidade mais baixo, e não instável, é o fator determinante para uma maior estabilidade.</p>
      <p>- A alternativa “1 - sua superfície de contato; 2 - aleatórias; 3 - alto” não está correta porque o centro de gravidade não se localiza, necessariamente, na superfície de contato do corpo com o solo, e as estruturas dos corpos geralmente não são compostas por partes aleatórias.</p>
      <p>- A alternativa “1 - seu ponto de suspensão; 2 - irregulares; 3 - disperso” apresenta um erro conceitual, pois, embora o ponto de suspensão possa ser usado experimentalmente para encontrar o centro de gravidade, ele não determina sua posição natural quando o corpo está em repouso. Além disso, considerar que a estrutura é composta por partes irregulares não contribui para a determinação precisa do centro de gravidade, e a ideia de um centro de gravidade disperso não se aplica à estabilidade dos corpos.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "No estudo da biomecânica do corpo humano, considera-se que o equilíbrio estático é fundamental para entender o funcionamento das articulações e dos músculos. No caso do levantamento de um objeto, forças são distribuídas entre os músculos e articulações para manter a estabilidade do movimento.<br><br>Suponha que um atleta segure um halter de peso igual a <strong>60 N</strong> em sua mão, mantendo o antebraço na posição horizontal. O músculo bíceps exerce uma força F<sub>b</sub> para cima a uma distância de <strong>4,00 cm</strong> da articulação do cotovelo, enquanto o peso do halter atua a <strong>40,0 cm</strong> da articulação. Despreze o peso do antebraço e considere que o sistema está em equilíbrio.",
    questionText: `Com base nesses dados, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A força exercida pelo bíceps é de aproximadamente <strong>600 N</strong>.
    <br>
    <strong>II.</strong> O torque gerado pelo bíceps é igual ao torque gerado pelo peso segurado.
    <br>
    <strong>III.</strong> A força que a articulação do cotovelo exerce para baixo é de aproximadamente <strong>660 N</strong>.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "III, apenas.", isCorrect: false },
      { letter: "B", text: "I, apenas.", isCorrect: false },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e III.", isCorrect: true },
      { letter: "E", text: "II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a força exercida pelo bíceps pode ser determinada aplicando a equação do torque no equilíbrio estático: &tau;<sub>b</sub> = &tau;<sub>p</sub>. Sabemos que o torque é dado por: F<sub>b</sub> &sdot; <strong>d = P &sdot; l</strong>. Substituindo os valores fornecidos no problema: F<sub>b</sub> &sdot; 0,04 = 60 &sdot; 0,40. Isolando F<sub>b</sub>, temos: F<sub>b</sub> = (60 &times; 0,40) / 0,04 = 600 <strong>N</strong>. Esse resultado confirma que a força exercida pelo bíceps é de 600 <strong>N</strong>.</p>
      
      <p>A afirmativa <strong>II</strong> está correta, pois, no equilíbrio estático, o torque gerado pelo bíceps deve ser igual ao torque gerado pelo peso segurado, garantindo que o antebraço permaneça na posição horizontal. Isso pode ser demonstrado matematicamente substituindo os valores: F<sub>b</sub> &sdot; <strong>d = P &sdot; l &rarr; 600 &times; 0,04 = 60 &times; 0,40</strong>. Onde temos como resultado: 24 = 24. Portanto, os torques exercidos pelo bíceps e pelo peso segurado são iguais, validando a afirmativa.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois a força exercida pela articulação do cotovelo pode ser determinada considerando o equilíbrio das forças verticais no sistema. Como o antebraço não se move, a soma das forças para cima deve ser igual à soma das forças para baixo: F<sub>a</sub> = F<sub>b</sub> + P. Substituindo os valores: F<sub>a</sub> = 600 + 60 = 660 <strong>N</strong>. Esse resultado confirma que a força exercida pela articulação do cotovelo é de 660 <strong>N</strong>.</p>
      <p class="final-answer">A resposta correta é: I, II e III.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>Nesta questão, as afirmativas <strong>I</strong>, <strong>II</strong> e <strong>III</strong> estão todas corretas conforme as leis do equilíbrio estático e torque aplicadas à biomecânica, tornando a alternativa D a única escolha válida.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Os materiais respondem de maneiras distintas às forças aplicadas, gerando differentes tipos de deformação. A elasticidade descreve a capacidade de um material recuperar sua forma original após a remoção da força deformadora. O comportamento elástico dos materiais pode ser caracterizado por grandezas como a tensão, a deformação e o módulo de Young, sendo que cada uma delas está associada a differentes tipos de esforços mecânicos.<br><br>Com base na teoria da elasticidade e nos conceitos de tensão e deformação apresentados, associe os tipos de tensão às suas características correspondentes. Considere que nem todos os itens das colunas possuem associação ou podem possuir mais de uma correlação.",
    questionText: `Assinale a alternativa que apresenta a associação correta.
    <br><br>
    <strong>Tipos de Tensão</strong><br>
    <strong>I.</strong> Tração<br>
    <strong>II.</strong> Compressão<br>
    <strong>III.</strong> Cisalhamento<br>
    <strong>IV.</strong> Tensão Hidrostática<br><br>
    <strong>Características</strong><br>
    <strong>A.</strong> Ocorre quando forças paralelas atuam sobre um material, provocando um deslocamento angular sem alterar significativamente seu volume.<br>
    <strong>B.</strong> Está relacionada à deformação volumétrica uniforme do material devido a forças externas aplicadas em todas as direções.<br>
    <strong>C.</strong> Ocorre quando um material é submetido a forças opostas ao longo de seu eixo, alongando-o e aumentando seu comprimento.<br>
    <strong>D.</strong> Ocorre quando um corpo é submetido a forças que atuam ao longo do eixo longitudinal no sentido de encurtá-lo, reduzindo seu comprimento.`,
    options: [
      { letter: "A", text: "I - C; II - D; III - A; IV - B.", isCorrect: true },
      {
        letter: "B",
        text: "I - C; II - B; III - D; IV - A.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "I - A; II - B; III - C; IV - D.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "I - B; II - A; III - D; IV - C.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "I - D; II - C; III - B; IV - A.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A sentença <strong>C</strong> se enquadra no conceito <strong>I</strong> (Tração), pois a tração ocorre quando um material é submetido a forças opostas ao longo de seu eixo, resultando no alongamento e aumento de seu comprimento. Conforme ilustrado no material, essa é uma deformação característica de materiais elásticos dentro do seu limite de elasticidade.</p>
      
      <p>A sentença <strong>D</strong> se enquadra no conceito <strong>II</strong> (Compressão), pois a compressão ocorre quando forças atuam ao longo do eixo longitudinal de um corpo no sentido de encurtá-lo, reduzindo seu comprimento. O gráfico tensão-deformação apresentado na videoaula ilustra esse comportamento, que é o inverso da tração.</p>
      
      <p>A sentença <strong>A</strong> se enquadra no conceito <strong>III</strong> (Cisalhamento), pois o cisalhamento acontece quando forças paralelas atuam sobre um material, provocando um deslocamento angular sem alteração significativa no volume. Esse fenômeno ocorre, por exemplo, quando se aplica uma força cortante em uma chapa metálica.</p>
      
      <p>A sentença <strong>B</strong> se enquadra no conceito <strong>IV</strong> (Tensão Hidrostática), pois esse tipo de tensão ocorre quando um material é submetido a uma pressão uniforme em todas as direções, provocando uma deformação volumétrica sem alterar sua forma. Esse fenômeno é observado em fluidos e em materiais sólidos submersos sob alta pressão.</p>
      <p class="final-answer">A resposta correta é: I-C; II-D; III-A; IV-B.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A associação correta entre os esforços mecânicos e suas deformações resultantes é: I-C (Tração e Alongamento), II-D (Compressão e Encurtamento), III-A (Cisalhamento e Deslocamento Angular) e IV-B (Tensão Hidrostática e Deformação Volumétrica). As outras opções misturam incorretamente essas definições fundamentais da teoria da elasticidade.</p>
    `,
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context:
      "Em uma indústria de construção metálica, uma barra de alumínio de <strong>2,5 m</strong> de comprimento e seção transversal de <strong>5 cm<sup>2</sup></strong> é utilizada como suporte estrutural em uma máquina. Durante a operação, essa barra é submetida a uma força axial de <strong>10.000 N</strong>, aplicada ao longo de seu eixo. O material da barra, o alumínio, possui propriedades mecânicas bem definidas, incluindo um módulo de elasticidade de <strong>70 &times; 10<sup>9</sup> N/m<sup>2</sup></strong>, conforme tabelas técnicas. Como a estrutura exige precisão nos deslocamentos das peças, os engenheiros responsáveis pelo projeto precisam calcular com exatidão a deformação sofrida pela barra devido à aplicação da força. <br><br>Considerando que o material permanece dentro da região de comportamento elástico, assinale a alternativa que recorda o assunto sobre o alongamento sofrido pela barra.",
    questionText: "Assinale a alternativa correta:",
    options: [
      { letter: "A", text: "<strong>0,36 mm</strong>", isCorrect: false },
      { letter: "B", text: "<strong>0,50 mm</strong>", isCorrect: false },
      { letter: "C", text: "<strong>0,71 mm</strong>", isCorrect: true },
      { letter: "D", text: "<strong>0,64 mm</strong>", isCorrect: false },
      { letter: "E", text: "<strong>0,18 mm</strong>", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa "<strong>0,71 mm</strong>" está correta, pois representa o alongamento real da barra de alumínio ao ser submetida à força especificada, considerando suas propriedades mecânicas. O cálculo do alongamento &Delta;L pode ser obtido a partir da equação do módulo de Young, que relaciona tensão e deformação em materiais na região elástica. Utilizando os valores fornecidos no enunciado na equação:</p>
      <p style="text-align: center;">&Delta;L = (F &sdot; L) / (A &sdot; E)</p>
      <p>Substituindo os dados:</p>
      <p style="text-align: center;">&Delta;L = (10.000) &sdot; (2,5) / ( (5 &times; 10<sup>-4</sup>) &sdot; (70 &times; 10<sup>9</sup>) ) = 25.000 / (3,5 &times; 10<sup>7</sup>) = 0,00071 m = <strong>0,71 mm</strong></p>
      <p>Portanto, o alongamento correto da barra é <strong>0,71 mm</strong>.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>- As demais alternativas estão incorretas, pois representam valores que divergem do alongamento real da barra de alumínio ao ser submetida à força especificada. O cálculo do alongamento &Delta;L, conforme demonstrado, resulta exatamente em 0,71 <strong>mm</strong>:</p>
      <p style="text-align: center;">&Delta;L = (F &sdot; L) / (A &sdot; E) = (10.000) &sdot; (2,5) / ( (5 &times; 10<sup>-4</sup>) &sdot; (70 &times; 10<sup>9</sup>) ) = 25.000 / (3,5 &times; 10<sup>7</sup>) = 0,00071 <strong>m</strong> = 0,71 <strong>mm</strong></p>
    `,
  },
];
