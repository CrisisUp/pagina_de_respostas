export const fisicaSemana03 = [
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Ao formular suas leis do movimento, Newton baseou-se no conceito de que o tempo e o espaço eram absolutos, ou seja, independentes do observador e das condições do movimento. Esse modelo foi amplamente utilizado e permaneceu inquestionável até o surgimento de novas teorias que ampliaram a compreensão da física.",
    questionText: `Com base nesse contexto, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> Newton considerava o tempo como uma grandeza constante e universal, fluindo da mesma maneira para todos os observadores, independentemente do movimento dos corpos.
    <br>
    <strong>II.</strong> A concepção de espaço e tempo absolutos foi mantida sem alterações até os dias de hoje, pois as leis de Newton continuam sendo a melhor forma de descrever o movimento em qualquer escala.
    <br>
    <strong>III.</strong> A teoria da relatividade trouxe uma nova perspectiva ao demonstrar que a passagem do tempo pode variar dependendo do referencial, o que contrasta com a visão newtoniana de tempo absoluto.
    <br>
    <strong>IV.</strong> Apesar de limitações em escalas extremas, a mecânica newtoniana continua sendo uma excelente aproximação para descrever fenômenos cotidianos e sistemas macroscópicos.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e IV, apenas.", isCorrect: false },
      { letter: "B", text: "II e III, apenas.", isCorrect: false },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "II, III e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I, III e IV, apenas.", isCorrect: true },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois Newton baseava sua descrição do universo na ideia de que o tempo era absoluto e fluía de maneira uniforme para todos os observadores. Esse conceito permaneceu fundamental na mecânica clássica, sendo utilizado para descrever sistemas físicos sem considerar variações temporais em diferentes referenciais. No modelo newtoniano, não havia a percepção de que o tempo pudesse ser influenciado por fatores externos, como velocidade ou gravidade.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois a teoria da relatividade trouxe uma nova compreensão sobre a passagem do tempo, mostrando que ela pode variar de acordo com a velocidade do observador e a intensidade do campo gravitacional. Diferente da visão newtoniana, na qual o tempo é absoluto, a relatividade demonstra que dois observadores em condições distintas podem medir tempos diferentes para o mesmo evento. Essa descoberta reformulou o entendimento da física e mostrou que o modelo clássico de Newton tinha limitações.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois, mesmo com os avanços da relatividade e da mecânica quântica, a mecânica newtoniana continua sendo uma excelente ferramenta para descrever fenômenos macroscópicos e de baixa velocidade. No cotidiano, os efeitos relativísticos são praticamente imperceptíveis, tornando as equações de Newton suficientes para resolver a maioria dos problemas envolvendo movimento, forças e interações. Dessa forma, embora não seja um modelo universalmente preciso, a mecânica clássica ainda é amplamente utilizada.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois a concepção de espaço e tempo absolutos foi modificada com o avanço da física moderna. A mecânica newtoniana ainda é amplamente utilizada para descrever movimentos em situações cotidianas, mas, em escalas extremas, como altas velocidades e intensos campos gravitacionais, a relatividade geral e especial de Einstein demonstraram que o tempo e o espaço são relativos ao referencial do observador. Isso significa que o modelo de Newton, embora útil, não é a melhor forma de descrever todos os fenômenos físicos.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Um engenheiro mecânico está projetando um novo sistema de transporte para um ambiente industrial. Durante os testes, ele observa que um dos carrinhos utilizados para movimentação de peças metálicas altera sua velocidade ao longo do tempo ao ser puxado por um motor. Para garantir que o sistema funcione corretamente, ele precisa calcular a força necessária para movimentar um carrinho de <strong>5 kg</strong> que apresenta uma aceleração de <strong>2 m/s<sup>2</sup></strong>.",
    questionText:
      "Com base nessa situação, assinale a alternativa que identifica o valor da força aplicada sobre o carrinho.",
    options: [
      { letter: "A", text: "<strong>12 N</strong>", isCorrect: false },
      { letter: "B", text: "<strong>15 N</strong>", isCorrect: false },
      { letter: "C", text: "<strong>2 N</strong>", isCorrect: false },
      { letter: "D", text: "<strong>5 N</strong>", isCorrect: false },
      { letter: "E", text: "<strong>10 N</strong>", isCorrect: true },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"10 <strong>N</strong>"</strong> está correta, pois a força aplicada sobre um corpo pode ser determinada a partir da relação entre sua massa e a aceleração adquirida de acordo com a fórmula da segunda lei de Newton: <strong>|F|</strong> = m &sdot; |a|. Substituindo os valores do enunciado:</p>
      <p style="text-align: center;">F = <strong>|F|</strong> = m &sdot; |a| = 5 &sdot; 2 = 10 <strong>N</strong></p>
      <p>Portanto o valor da força aplicada sobre o carrinho é de <strong>10 <strong>N</strong>.</p>
      <p class="final-answer">A resposta correta é: 10 <strong>N</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"2 <strong>N</strong>"</strong> está incorreta, pois a força aplicada sobre um corpo deve ser determinada pelo produto da massa pela aceleração (<strong>|F|</strong> = m &sdot; |a|). Com uma massa de <strong>5 <strong>kg</strong> e aceleração de <strong>2 <strong>m/s</strong><sup>2</sup></strong>, o resultado correto é <strong>10 <strong>N</strong>.</p>
      <p>A alternativa <strong>"5 <strong>N</strong>"</strong> está incorreta, pois não corresponde ao cálculo correto da segunda lei de Newton para os valores fornecidos de 5 <strong>kg</strong> e 2 <strong>m/s</strong><sup>2</sup>.</p>
      <p>A alternativa <strong>"12 <strong>N</strong>"</strong> está incorreta, pois o valor da força resultante deve ser exatamente o produto de 5 por 2, resultando em 10 <strong>N</strong>.</p>
      <p>A alternativa <strong>"15 <strong>N</strong>"</strong> está incorreta, pois excede o valor matemático obtido pela relação fundamental da dinâmica para este sistema.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Um drone autônomo está sendo testado para mapear uma região utilizando sensores de movimento. Durante o teste, ele percorre uma trajetória curva no plano xy, seguindo um padrão pré-programado que define sua posição ao longo do tempo. A trajetória do drone é descrita pelas funções <strong>x(t) = 2t<sup>2</sup> + 3</strong> e <strong>y(t) = 3t + 1</strong>, onde <strong>x</strong> e <strong>y</strong> são dados em metros e <strong>t</strong> está em segundos. Os engenheiros responsáveis pelo teste precisam analisar o comportamento do drone em diferentes momentos da trajetória, verificando sua movimentação média ao longo de um intervalo de tempo e sua velocidade instantânea em um determinado instante. Para isso, eles registram a posição do drone em diferentes instantes, e utilizam os conceitos de velocidade vetorial para interpretar os dados.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade média no intervalo de tempo de <strong>t = 1s</strong> a <strong>t = 3s</strong> tem componentes <strong>v<sub>x,m</sub> = 8 m/s</strong> e <strong>v<sub>y,m</sub> = 3 m/s</strong>.
    <br>
    <strong>II.</strong> A velocidade instantânea do drone no instante <strong>t = 2s</strong> tem componentes <strong>v<sub>x</sub> = 8 m/s</strong> e <strong>v<sub>y</sub> = 3 m/s</strong>.
    <br>
    <strong>III.</strong> A magnitude da velocidade instantânea no instante <strong>t = 2s</strong> é aproximadamente <strong>10,2 m/s</strong>.
    <br>
    <strong>IV.</strong> A equação geral para a velocidade vetorial do drone ao longo do tempo é dada por <strong>v(t) = (2t)i + 3j</strong>.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: true },
      { letter: "C", text: "I e IV, apenas.", isCorrect: false },
      { letter: "D", text: "II e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a velocidade média é determinada pela variação da posição dividida pelo intervalo de tempo <strong>v<sub>m</sub> = &Delta;x / &Delta;t</strong>. Considerando o tempo inicial de 1 <strong>s</strong> e o tempo final de 3 <strong>s</strong>, teremos em x:</p>
      <p style="text-align: center;">v<sub>x,m</sub> = (x(3) - x(1)) / (3 - 1) = ([2(3)<sup>2</sup> + 3] - [2(1)<sup>2</sup> + 3]) / 2 = (21 - 5) / 2 = 8 <strong>m/s</strong></p>
      <p>Em y teremos:</p>
      <p style="text-align: center;">v<sub>y,m</sub> = (y(3) - y(1)) / (3 - 1) = ([3(3) + 1] - [3(1) + 1]) / 2 = (10 - 4) / 2 = 3 <strong>m/s</strong></p>
      <p>Portanto a velocidade média no intervalo de tempo de <strong>t = 1 <strong>s</strong> a t = 3 <strong>s</strong> tem componentes v</strong><sub>x,m</sub> = 8 <strong>m/s</strong> e v<sub>y,m</sub> = 3 <strong>m/s</strong>.</p>

      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade instantânea é obtida derivando as funções x(t) e y(t):</p>
      <p style="text-align: center;">v<sub>x</sub>(t) = dx/dt (2t<sup>2</sup> + 3) = 4t</p>
      <p style="text-align: center;">v<sub>y</sub>(t) = dy/dt (3t + 1) = 3</p>
      <p>Resolvendo para <strong>t = 2 <strong>s</strong>, em x teremos:  v<sub>x</sub>(2) = 4(2) = 8 <strong>m/s</strong>. Em y teremos: <strong>v<sub>y</sub>(2) = 3 <strong>m/s</strong>. Portanto, a velocidade instantânea do drone no instante <strong>t = 2 <strong>s</strong> tem componentes v</strong><sub>x</sub> = 8 <strong>m/s</strong> e v<sub>y</sub> = 3 <strong>m/s</strong>.</p>
      <p class="final-answer">A resposta correta é: I e II, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> está incorreta, pois o módulo da velocidade instantânea no instante <strong>t = 2 <strong>s</strong> é dado pela soma quadrática dos componentes x e y da velocidade:</strong></p>
      <p style="text-align: center;">|v(2)| = &radic;(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) = &radic;(8<sup>2</sup> + 3<sup>2</sup>) = &radic;(64 + 9) = &radic;73 &approx; 8,54 <strong>m/s</strong></p>
      <p>Portanto, o valor correto da magnitude da velocidade instantânea é aproximadamente 8,54 <strong>m/s</strong>, e não 10,2 <strong>m/s</strong>, conforme presente na afirmativa.</p>

      <p>A afirmativa <strong>IV</strong> está incorreta, pois a velocidade vetorial pode ser expressa como v(t) = v<sub>x</sub>(t)i + v<sub>y</sub>(t)j. Portanto a equação correta para a velocidade vetorial é: v(t) = (4t)i + 3j. A equação fornecida na afirmativa IV apresenta um erro no termo 2t, pois a derivada correta da função x(t) = 2t<sup>2</sup> + 3 é 4t, e não 2t.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Em uma fábrica de eletrodomésticos, um engenheiro mecânico está testando o motor de um novo modelo de ventilador de teto. Para garantir que o equipamento opere dentro dos padrões de segurança, ele precisa determinar a aceleração angular do motor no instante da partida. Durante o teste, o ventilador parte do repouso e acelera uniformemente até atingir uma velocidade angular de <strong>20 rad/s</strong> em um intervalo de tempo de <strong>10 segundos</strong>.",
    questionText:
      "Com base nos princípios do movimento circular uniformemente acelerado, assinale a alternativa que aplica o valor correto da aceleração angular do motor.",
    options: [
      {
        letter: "A",
        text: "<strong>2,0 rad/s<sup>2</sup></strong>",
        isCorrect: true,
      },
      {
        letter: "B",
        text: "<strong>3,0 rad/s<sup>2</sup></strong>",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "<strong>1,0 rad/s<sup>2</sup></strong>",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "<strong>2,5 rad/s<sup>2</sup></strong>",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "<strong>1,5 rad/s<sup>2</sup></strong>",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "2,0 <strong>rad/s</strong><sup>2</sup>" está correta, pois a aceleração angular pode ser determinada a partir da equação da velocidade angular instantânea: &omega;(t) = &omega;<sub>0</sub> + &alpha;(t - t<sub>0</sub>). Como o motor parte do repouso, temos a velocidade angular inicial &omega;<sub>0</sub> = 0, a velocidade angular final <strong>&omega; = 20 <strong>rad/s</strong> e t - t</strong><sub>0</sub> = 10 <strong>s</strong>.</p>
      <p>Substituindo os valores na fórmula, obtemos: 20 = 0 + &alpha;(10), isolando a aceleração angular: <strong>&alpha; = 20 / 10 = 2,0 <strong>rad/s</strong><sup>2</sup></strong>. Portanto, o valor da aceleração angular do motor é de 2,0 <strong>rad/s</strong><sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: 2,0 <strong>rad/s</strong><sup>2</sup></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "1,0 <strong>rad/s</strong><sup>2</sup>" está incorreta, pois a aceleração angular é a razão entre a variação da velocidade angular e o tempo (<strong>&alpha; = &Delta;&omega; / &Delta;t)</strong>. Com uma variação de 20 <strong>rad/s</strong> em 10 <strong>s</strong>, o valor correto é 2,0 <strong>rad/s</strong><sup>2</sup>.</p>
      <p>A alternativa "1,5 <strong>rad/s</strong><sup>2</sup>" está incorreta, pois não corresponde ao resultado da divisão da velocidade angular final pelo intervalo de tempo decorrido para os dados fornecidos.</p>
      <p>A alternativa "2,5 <strong>rad/s</strong><sup>2</sup>" está incorreta, pois excede o valor da taxa de variação da velocidade angular necessária para atingir 20 <strong>rad/s</strong> em 10 <strong>s</strong>.</p>
      <p>A alternativa "3,0 <strong>rad/s</strong><sup>2</sup>" está incorreta, pois resultaria em uma velocidade angular de 30 <strong>rad/s</strong> após 10 <strong>s</strong>, o que diverge do valor observado no teste.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Um satélite artificial orbita um planeta em um movimento circular uniforme a uma altitude constante. A trajetória do satélite pode ser descrita pelo raio orbital <strong>r = 7000 km</strong> e pelo seu período de revolução <strong>T = 6000s</strong>. Os engenheiros espaciais precisam analisar os parâmetros do movimento para garantir a estabilidade da órbita e evitar desvios que possam comprometer a missão.",
    questionText: `Com base nessa situação, avalie as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade angular do satélite é aproximadamente <strong>1,05 &times; 10<sup>-3</sup> rad/s</strong>.
    <br>
    <strong>II.</strong> A velocidade linear do satélite é aproximadamente <strong>7,35 <strong>km</strong>/s</strong>.
    <br>
    <strong>III.</strong> A aceleração centrípeta do satélite é aproximadamente <strong>7,72 <strong>m/s</strong><sup>2</sup></strong>.
    <br>
    <strong>IV.</strong> Se o raio da órbita fosse reduzido ao meio, a velocidade angular seria o dobro do valor original.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "I, II, III e IV.", isCorrect: false },
      { letter: "E", text: "II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a velocidade angular &omega; é dada por: <strong>&omega; = 2&pi; / T</strong>. Substituindo os valores dados pelo enunciado temos: <strong>&omega; = 2&pi; / 6000</strong>. Que resulta em: &omega; &approx; 1,05 &times; 10<sup>-3</sup> rad/s. Portanto a velocidade angular é de aproximadamente 1,05 &times; 10<sup>-3</sup> rad/s.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade linear v é determinada por: <strong>v = &omega;r</strong>. Substituindo os valores dados pelo enunciado, teremos: <strong>v = (1,05 &times; 10</strong><sup>-3</sup>) &times; (7000 &times; 10<sup>3</sup>), resultando em v &approx; 7,35 <strong>km</strong>/s. Portanto a velocidade linear é de aproximadamente 7,35 <strong>km</strong>/s.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois a aceleração centrípeta a<sub>c</sub> é dada por: a<sub>c</sub> = v<sup>2</sup> / r. Substituindo os valores dados pelo enunciado, teremos: a<sub>c</sub> = (7,35 &times; 10<sup>3</sup>)<sup>2</sup> / (7 &times; 10<sup>6</sup>), resultando em a<sub>c</sub> &approx; 7,72 <strong>m/s</strong><sup>2</sup>. Portanto a aceleração centrípeta é de aproximadamente 7,72 <strong>m/s</strong><sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a velocidade angular &omega; está relacionada ao raio e ao período da órbita. Se o raio fosse reduzido à metade, a relação entre período e raio para órbitas circulares indicaria que o novo período seria menor, mas a relação não implica diretamente que a nova velocidade angular seria exatamente o dobro do valor original. A relação entre &omega; e r depende do modelo dinâmico da órbita, e a afirmação simplifica essa relação de maneira incorreta.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Na Grécia antiga, Aristóteles já estava pensando no movimento e como ele ocorria. Naquela época, a ideia de força estava atrelada principalmente à <strong>[preencher 1]</strong>, ou seja, acreditava-se que algo precisava de uma força contínua para manter-se em movimento. Apenas mais tarde, com Newton, a força foi associada à <strong>[preencher 2]</strong>, e não à <strong>[preencher 3]</strong>.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - velocidade; 2 - força; 3 - gravidade.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - inércia; 2 - força; 3 - massa.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - gravidade; 2 - inércia; 3 - aceleração.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "1 - aceleração; 2 - massa; 3 - força.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - velocidade; 2 - aceleração; 3 - velocidade.",
        isCorrect: true,
      },
    ],
    correctExplanation: `
      <p>A alternativa "1 - velocidade; 2 - aceleração; 3 - velocidade" está correta, pois, segundo Aristóteles, a força era necessária para manter um corpo em movimento, sendo proporcional à velocidade. Isso significava que, sem força, o corpo pararia. Mais tarde, Newton demonstrou que a força não mantém a velocidade, mas sim provoca sua variação ao longo do tempo, ou seja, a aceleração. Ele formulou a Segunda Lei do Movimento, mostrando que a força altera o estado de movimento de um corpo e não sua velocidade constante. Assim, Newton provou que a força não está associada à velocidade, como Aristóteles acreditava.</p>
      <p class="final-answer">A resposta correta é: 1 - velocidade; 2 - aceleração; 3 - velocidade</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas por várias razões:</h4>
      <p>A alternativa "1 - inércia; 2 - força; 3 - massa" está incorreta, pois Aristóteles não utilizava o conceito de inércia, que só foi formulado mais tarde por Galileu e formalizado por Newton. Além disso, Newton associou a força à aceleração, e não à força diretamente, como indicado na segunda lacuna. Por fim, a massa não se encaixa na terceira lacuna, pois Newton não negou sua importância, mas sim a idea aristotélica de que a força era necessária para manter um corpo em movimento.</p>
      <p>A alternativa "1 - velocidade; 2 - força; 3 - gravidade" está incorreta, pois Newton demonstrou que a força não está relacionada à velocidade, mas sim à sua variação ao longo do tempo. Além disso, a força não pode ocupar a segunda lacuna, pois Newton estabeleceu que a força causa aceleração e não é o próprio fator determinante da mudança de movimento. A gravidade, por sua vez, não está relacionada ao conceito geral de força no contexto da questão, já que Newton desenvolveu a Lei da Gravitação Universal posteriormente.</p>
      <p>A alternativa "1 - aceleração; 2 - massa; 3 - força" está incorreta, pois Aristóteles não utilizava o conceito de aceleração para descrever o movimento, mas sim a ideia de que a força era diretamente responsável por manter a velocidade de um corpo. A massa também não pode ocupar a segunda lacuna, pois Newton associou a força à aceleração, e não apenas à massa. A força na terceira lacuna está errada porque Newton não negou sua existência, apenas reformulou sua relação com o movimento.</p>
      <p>A alternativa "1 - gravidade; 2 - inércia; 3 - aceleração" está incorreta, pois Aristóteles não compreendia a gravidade como uma força universal, mas sim como uma tendência natural dos corpos a retornarem ao seu "lugar natural". O conceito de inércia também não se encaixa na segunda lacuna, pois Newton associou a força à aceleração e não à resistência ao movimento. A aceleração, embora seja um conceito correto na mecânica newtoniana, não deveria ocupar a terceira lacuna, pois Newton não negou sua importância, mas sim sua relação com a necessidade contínua de força para manter um corpo em movimento.</p>
    `,
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context:
      "Na física, forças são grandezas vetoriais que podem ser representadas em um sistema de coordenadas tridimensional. Essas forças possuem componentes nos eixos <strong>x, y e z</strong>, e sua resultante é obtida considerando suas projeções em cada direção. Um engenheiro está analisando uma força aplicada sobre um objeto, que possui componentes <strong>F<sub>x</sub> = 3 N</strong>, <strong>F<sub>y</sub> = 4 N</strong> e <strong>F<sub>z</sub> = 12 N</strong>.",
    questionText:
      "Com base nessas informações, assinale a alternativa que identifica o módulo da força resultante.",
    options: [
      { letter: "A", text: "<strong>11 N</strong>", isCorrect: false },
      { letter: "B", text: "<strong>15 N</strong>", isCorrect: false },
      { letter: "C", text: "<strong>14 N</strong>", isCorrect: false },
      { letter: "D", text: "<strong>12 N</strong>", isCorrect: false },
      { letter: "E", text: "<strong>13 N</strong>", isCorrect: true },
    ],
    correctExplanation: `
      <p>A alternativa "13 <strong>N</strong>" está correta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: <strong>|F|</strong> = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: <strong>|F|</strong> = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; <strong>|F|</strong> = &radic;(9 + 16 + 144) &rarr; <strong>|F|</strong> = 13 <strong>N</strong>. Portanto o módulo da força resultante é igual a 13 <strong>N</strong>.</p>
      <p class="final-answer">A resposta correta é: 13 <strong>N</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "11 <strong>N</strong>" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: <strong>|F|</strong> = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: <strong>|F|</strong> = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; <strong>|F|</strong> = &radic;(9 + 16 + 144) &rarr; <strong>|F|</strong> = 13 <strong>N</strong>. Portanto o módulo da força resultante é igual a 13 <strong>N</strong>.</p>
      <p>A alternativa "12 <strong>N</strong>" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: <strong>|F|</strong> = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: <strong>|F|</strong> = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; <strong>|F|</strong> = &radic;(9 + 16 + 144) &rarr; <strong>|F|</strong> = 13 <strong>N</strong>. Portanto o módulo da força resultante é igual a 13 <strong>N</strong>.</p>
      <p>A alternativa "14 <strong>N</strong>" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: <strong>|F|</strong> = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: <strong>|F|</strong> = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; <strong>|F|</strong> = &radic;(9 + 16 + 144) &rarr; <strong>|F|</strong> = 13 <strong>N</strong>. Portanto o módulo da força resultante é igual a 13 <strong>N</strong>.</p>
      <p>A alternativa "15 <strong>N</strong>" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: <strong>|F|</strong> = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: <strong>|F|</strong> = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; <strong>|F|</strong> = &radic;(9 + 16 + 144) &rarr; <strong>|F|</strong> = 13 <strong>N</strong>. Portanto o módulo da força resultante é igual a 13 <strong>N</strong>.</p>
    `,
  },
];
