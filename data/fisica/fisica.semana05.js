export const fisicaSemana05 = [
  {
    week: 5,
    subject: "Física do Movimento",
    context:
      "O conceito de energia potencial é fundamental para descrever sistemas conservativos, nos quais a força pode ser expressa como o gradiente negativo da energia potencial. Esse princípio é amplamente aplicado em diversos campos da física, como mecânica clássica, eletrostática e gravitação. O gradiente de uma função escalar representa a taxa de variação dessa função em cada direção do espaço, sendo crucial para a determinação das forças em sistemas conservativos. Considere um sistema onde a energia potencial de uma partícula de massa m é descrita pela função:<br><strong>U(x,y,z) = 5x<sup>3</sup>y - 6y<sup>2</sup>z + 4xz<sup>2</sup></strong>. Onde U é a energia potencial em joules e (x, y, z) são as coordenadas espaciais em metros.",
    questionText: `Com base nessa equação e nos conceitos de gradiente e forças conservativas, analise as afirmativas abaixo:
    <br><br>
    <strong>I.</strong> A componente da força na direção x, calculada em <strong>P = (2, 1, -3)</strong> é <strong>76 N</strong>.
    <br>
    <strong>II.</strong> A componente da força na direção y, calculada em <strong>P = (2, 1, -3)</strong> é <strong>-76 N</strong>.
    <br>
    <strong>III.</strong> A componente da força na direção z, calculada em <strong>P = (2, 1, -3)</strong> é <strong>54 N</strong>.
    <br>
    <strong>IV.</strong> O módulo da força resultante na posição <strong>P = (2, 1, -3)</strong> é aproximadamente <strong>133,8 N</strong>.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "II, III e IV, apenas.", isCorrect: true },
      { letter: "B", text: "I e III, apenas.", isCorrect: false },
      { letter: "C", text: "II e IV, apenas.", isCorrect: false },
      { letter: "D", text: "I, II, III e IV.", isCorrect: false },
      { letter: "E", text: "I, III e IV, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>II</strong> está correta, pois a força é dada pelo gradiente negativo da energia potencial: <strong>F = -&nabla;U</strong>. Derivamos U(x,y,z) em relação a y para descobrir a componente da força na direção y:</p>
      <p style="text-align: center;">F<sub>y</sub> = -&part;U / <strong>&part;y = -(5x</strong><sup>3</sup> - 12yz)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>y</sub>. Substituindo <strong>x = 2, y = 1, z = -3:</strong></p>
      <p style="text-align: center;">F<sub>y</sub> = -(5(8) + 36) = -(40 + 36) = -76 <strong>N</strong></p>
      <p>Portanto, o valor da componente da força na direção y, calculada em P é -76 <strong>N</strong>.</p>

      <p>A afirmativa <strong>III</strong> está correta, pois derivamos U(x,y,z) em relação a z para descobrir a componente da força na direção z:</p>
      <p style="text-align: center;">F<sub>z</sub> = -&part;U / <strong>&part;z = -(-6y</strong><sup>2</sup> + 8xz)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>z</sub>. Substituindo <strong>x = 2, y = 1, z = -3:</strong></p>
      <p style="text-align: center;">F<sub>z</sub> = -(-6(1)<sup>2</sup> + 8(2)(-3)) = -(-6 - 48) = 54 <strong>N</strong></p>
      <p>Portanto, o valor da componente da força na direção z, calculada em P é 54 <strong>N</strong>.</p>

      <p>A afirmativa <strong>IV</strong> está correta, pois fazemos a soma quadrática das componentes da força F para encontrar o módulo da força resultante no ponto P:</p>
      <p style="text-align: center;"><strong>|F|</strong> = &radic;((-96)<sup>2</sup> + (-76)<sup>2</sup> + (54)<sup>2</sup>) = &radic;(9216 + 5776 + 2916)</p>
      <p style="text-align: center;">Resultando em: <strong>|F|</strong> = &radic;17908 &approx; 133,8 <strong>N</strong></p>
      <p class="final-answer">A resposta correta é: II, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>I</strong> está incorreta, pois derivamos U(x,y,z) em relação a x para descobrir a componente da força na direção x:</p>
      <p style="text-align: center;">F<sub>x</sub> = -&part;U / <strong>&part;x = -(15x</strong><sup>2</sup>y + 4z<sup>2</sup>)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>x</sub>. Substituindo <strong>x = 2, y = 1, z = -3:</strong></p>
      <p style="text-align: center;">F<sub>x</sub> = -(15(2)<sup>2</sup>(1) + 4(-3)<sup>2</sup>) = -(15(4) + 4(9)) = -(60 + 36) = -96 <strong>N</strong></p>
      <p>Portanto, o valor da componente da força na direção x, calculada em P, é de -96 <strong>N</strong>, e não 76 <strong>N</strong>.</p>
    `,
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context:
      "Um vagão de carga de massa <strong>m<sub>1</sub> = 4000 kg</strong> se move sobre trilhos horizontais com velocidade de <strong>5,0 m/s</strong>. À frente, um segundo vagão de massa <strong>m<sub>2</sub> = 6000 kg</strong> está parado. Os dois vagões colidem e se acoplam, movendo-se juntos após a colisão. Após a colisão, os vagões permanecem unidos e se movem com uma nova velocidade v<sub>f</sub>, que pode ser determinada pela conservação da quantidade de movimento.",
    questionText:
      "Com base nessas informações, assinale a alternativa que apresenta a velocidade final dos vagões acoplados após a colisão.",
    options: [
      { letter: "A", text: "<strong>2,5 m/s</strong>", isCorrect: false },
      { letter: "B", text: "<strong>3,0 m/s</strong>", isCorrect: false },
      { letter: "C", text: "<strong>2,0 m/s</strong>", isCorrect: true },
      { letter: "D", text: "<strong>1,5 m/s</strong>", isCorrect: false },
      { letter: "E", text: "<strong>3,5 m/s</strong>", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa "2,0 <strong>m/s</strong>" está correta, pois como a colisão é perfeitamente inelástica, os dois vagões se movem juntos após a colisão. Conseguimos aplicar a fórmula da velocidade final de ambos os corpos para essa colisão:</p>
      <p style="text-align: center;">v<sub>f</sub> = (m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>)) &sdot; v<sub>1</sub></p>
      <p>Substituindo os valores de massa de cada vagão e a velocidade do vagão 1 na fórmula, obtemos:</p>
      <p style="text-align: center;">v<sub>f</sub> = (4000 / (4000 + 6000)) &sdot; 5 = 2,0 <strong>m/s</strong></p>
      <p>Portanto, a velocidade final dos vagões acoplados após a colisão é 2,0 <strong>m/s</strong>.</p>
      <p class="final-answer">A resposta correta é: 2,0 <strong>m/s</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "1,5 <strong>m/s</strong>" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 <strong>kg</strong>, 6000 <strong>kg</strong> e 5,0 <strong>m/s</strong>, o resultado exato é 2,0 <strong>m/s</strong>.</p>
      <p>A alternativa "2,5 <strong>m/s</strong>" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 <strong>kg</strong>, 6000 <strong>kg</strong> e 5,0 <strong>m/s</strong>, o resultado exato é 2,0 <strong>m/s</strong>.</p>
      <p>A alternativa "3,0 <strong>m/s</strong>" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 <strong>kg</strong>, 6000 <strong>kg</strong> e 5,0 <strong>m/s</strong>, o resultado exato é 2,0 <strong>m/s</strong>.</p>
      <p>A alternativa "3,5 <strong>m/s</strong>" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 <strong>kg</strong>, 6000 <strong>kg</strong> e 5,0 <strong>m/s</strong>, o resultado exato é 2,0 <strong>m/s</strong>.</p>
    `,
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context:
      "Os sistemas de partículas são amplamente estudados na mecânica para compreender o comportamento de corpos interagindo sob differentes forças. O oscilador harmônico simples é um exemplo clássico que descreve o movimento periódico de uma partícula presa a uma mola. Esse tipo de movimento ocorre quando uma força restauradora age sobre a partícula, direcionando-a sempre para a posição de equilíbrio. Durante a oscilação, a energia do sistema se alterna entre energia cinética e energia potencial, assumindo que o sistema seja ideal. Além disso, as grandezas envolvidas no movimento, como deslocamento, velocidade e aceleração, variam de maneira periódica ao longo do tempo.",
    questionText: `Com base nesses conceitos, analise as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia mecânica total do oscilador harmônico permanece constante e independe da posição da partícula durante o movimento.
    <br>
    <strong>II.</strong> A aceleração da partícula no oscilador harmônico tem sempre o mesmo sentido do deslocamento e cresce linearmente com a posição.
    <br>
    <strong>III.</strong> O período de oscilação da partícula depende apenas da massa e da constante elástica da mola, sendo independente da amplitude do movimento.
    <br>
    <strong>IV.</strong> No ponto de maior deslocamento, a energia cinética da partícula é nula e a energia potencial atinge seu valor máximo.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e III, apenas.", isCorrect: false },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: true },
      { letter: "C", text: "II e IV, apenas.", isCorrect: false },
      { letter: "D", text: "III e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I e II, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia mecânica total de um oscilador harmônico ideal é conservada ao longo do tempo, assumindo que não há forças dissipativas, como atrito ou resistência do ar. A energia mecânica total é dada por: <strong>E = &frac12; kA</strong><sup>2</sup>. Onde k é a constante elástica da mola e A é a amplitude da oscilação. Como essa equação não depende da posição da partícula x, a energia total se mantém constante durante todo o movimento.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois o período de oscilação de um oscilador harmônico simples depende apenas da massa m da partícula e da constante elástica k da mola, conforme a equação: <strong>T = 2&pi;&radic;(m / k)</strong>. Essa equação mostra que o período não depende da amplitude A, confirmando que a afirmativa é verdadeira.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois no ponto de maior deslocamento <strong>x = &plusmn;A, a partícula está momentaneamente em repouso, ou seja, sua velocidade é zero e, consequentemente, sua energia cinética é nula</strong>. Nesse instante, toda a energia do sistema está armazenada como energia potencial, dada por: <strong>U = &frac12; kx</strong><sup>2</sup>. Substituindo <strong>x = A, obtemos U = &frac12; kA</strong><sup>2</sup>, que corresponde ao valor máximo da energia potencial no sistema.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois a aceleração no oscilador harmônico é proporcional ao deslocamento, mas tem sentido oposto a ele. Isso significa que, se a partícula está deslocada para a direita em relação à posição de equilíbrio, a aceleração aponta para a esquerda, e vice-versa. A equação que rege a aceleração é: <strong>a = -&omega;</strong><sup>2</sup>x. Onde <strong>&omega; = &radic;(k / m) é a frequência angular da oscilação</strong>. O sinal negativo indica que a aceleração sempre aponta para a posição de equilíbrio.</p>
    `,
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context:
      "O estudo da energia potencial é fundamental na análise de sistemas conservativos, como oscilações mecânicas, interações eletrostáticas e sistemas gravitacionais. A relação entre energia potencial e força permite determinar a dinâmica de uma partícula sem a necessidade de medições diretas de aceleração ou força externa. Considere uma partícula de massa <strong>2,5 kg</strong> sujeita a um campo de energia potencial descrito pela função: <strong>U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x</strong>. Onde U(x) está em joules e x está em metros.",
    questionText:
      "Com base no apresentado e considerando que a partícula está na posição <strong>x = 4m</strong>, assinale a alternativa que aplica o módulo da força atuante sobre ela nesse instante</strong>.",
    options: [
      { letter: "A", text: "<strong>86 N</strong>", isCorrect: false },
      { letter: "B", text: "<strong>150 N</strong>", isCorrect: false },
      { letter: "C", text: "<strong>106 N</strong>", isCorrect: true },
      { letter: "D", text: "<strong>62 N</strong>", isCorrect: false },
      { letter: "E", text: "<strong>274 N</strong>", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa "106 <strong>N</strong>" está correta, pois a força conservativa que atua sobre a partícula pode ser determinada a partir da derivada da energia potencial em relação à posição: F(x) = -dU / dx. Derivando a função fornecida no enunciado:</p>
      <p style="text-align: center;">F(x) = - d/dx (3x<sup>3</sup> - 5x<sup>2</sup> + 2x) = -(9x<sup>2</sup> - 10x + 2)</p>
      <p>Agora, substituímos <strong>x = 4 <strong>m</strong>:</strong></p>
      <p style="text-align: center;">F(4) = -(9(4)<sup>2</sup> - 10(4) + 2) = -(144 - 40 + 2) = -106</p>
      <p>O sinal negativo indica que a força age na direção oposta ao aumento de x, mas como o enunciado pede o módulo da força, temos: <strong>|F|</strong> = 106 <strong>N</strong>.</p>
      <p class="final-answer">A resposta correta é: 106 <strong>N</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "150 <strong>N</strong>" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição <strong>x = 4 <strong>m</strong>, o valor modular correto é 106 <strong>N</strong>.</p>
      <p>A alternativa "62 <strong>N</strong>" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição <strong>x = 4 <strong>m</strong>, o valor modular correto é 106 <strong>N</strong>.</p>
      <p>A alternativa "274 <strong>N</strong>" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição <strong>x = 4 <strong>m</strong>, o valor modular correto é 106 <strong>N</strong>.</p>
      <p>A alternativa "86 <strong>N</strong>" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição <strong>x = 4 <strong>m</strong>, o valor modular correto é 106 <strong>N</strong>.</p>
    `,
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context:
      "Leia o trecho a seguir:<br><br>O centro de massa é o ponto onde a massa total de um sistema de partículas pode ser considerada concentrada, fundamental para análise de movimento e equilíbrio. É um ponto que se move como se toda a <strong>[preencher 1]</strong> do sistema estivesse concentrada nele e todas as <strong>[preencher 2]</strong> atuassem sobre esse ponto. Sua posição é determinada pela média ponderada das posições das partículas que compõem o sistema, levando em consideração suas respectivas <strong>[preencher 3]</strong>.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1- massa; 2- forças externas; 3- massas",
        isCorrect: true,
      },
      {
        letter: "B",
        text: "1- força resultante; 2- forças internas; 3- velocidades",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1- velocidade; 2- acelerações; 3- cargas elétricas",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "1- quantidade de movimento; 2- pressões; 3- distribuições de volume",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1- energia; 2- deslocamentos; 3- forças gravitacionais",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "1 - massa; 2 - forças externas; 3 - massas" está correta, pois o centro de massa é o ponto onde podemos considerar que toda a massa do sistema está concentrada, permitindo que sua posição seja calculada como uma média ponderada das posições individuais das partículas, levando em conta suas respectivas massas. Além disso, as forças que atuam sobre o centro de massa são exclusivamente as forças externas, pois as forças internas do sistema se anulam devido ao princípio da ação e reação. Essa abordagem simplifica a análise do movimento de sistemas complexos, possibilitando a aplicação das leis de Newton a sistemas compostos por múltiplas partículas como se fossem um único corpo.</p>
      <p class="final-answer">A resposta correta é: 1- massa; 2- forças externas; 3- massas</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas por várias razões:</h4>
      <p>A alternativa "1 - velocidade; 2 - acelerações; 3 - cargas elétricas" está incorreta, pois o conceito de centro de massa não está relacionado diretamente à velocidade do sistema, mas sim à distribuição de massa. Além disso, as forças que determinam o movimento do centro de massa não são acelerações, mas sim forças externas, e a posição do centro de massa não depende de cargas elétricas, mas das massas individuais das partículas.</p>
      <p>A alternativa "1 - força resultante; 2 - forças internas; 3 - velocidades" está incorreta porque a definição do centro de massa não envolve a força resultante diretamente, mas sim a distribuição de massa do sistema. Além disso, as forças internas não influenciam a posição do centro de massa, pois se cancelam dentro do sistema, e a posição do centro de massa não é determinada pelas velocidades das partículas, mas sim por suas massas e posições.</p>
      <p>A alternativa "1 - energia; 2 - deslocamentos; 3 - forças gravitacionais" está incorreta porque o centro de massa não representa uma medida de energia do sistema, mas sim de distribuição de massa. Além disso, deslocamentos não são forças atuantes sobre o sistema, e, embora a gravidade possa afetar o movimento do centro de massa, sua posição não depende exclusivamente das forças gravitacionais, mas da distribuição de massas no sistema.</p>
      <p>A alternativa "1 - quantidade de movimento; 2 - pressões; 3 - distribuições de volume" está incorreta porque a quantidade de movimento descreve a dinâmica do sistema, mas não define a localização do centro de massa. Além disso, pressões não estão diretamente relacionadas ao centro de massa, e distribuições de volume não são parâmetros utilizados para determinar sua posição.</p>
    `,
  },
];
