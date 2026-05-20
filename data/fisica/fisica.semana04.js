export const fisicaSemana04 = [
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      "O conceito de trabalho mecânico está presente em diversas situações do cotidiano e da engenharia, como no empurrar de um carrinho, no levantamento de um objeto ou no funcionamento de máquinas. Considere um bloco que se desloca sobre uma superfície horizontal enquanto uma força externa é aplicada perpendicularmente ao seu movimento.",
    questionText:
      "Com base na situação descrita, é correto identificar que o trabalho realizado por essa força será:",
    options: [
      {
        letter: "A",
        text: "negativo, pois a força aplicada está contrária ao sentido do deslocamento.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "máximo, pois toda a força aplicada contribui para o deslocamento do bloco.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "igual ao produto da força aplicada pela distância percorrida pelo bloco.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "nulo, pois a força aplicada não tem componente na direção do deslocamento.",
        isCorrect: true,
      },
      {
        letter: "E",
        text: "mínimo, mas ainda diferente de zero, pois a força aplicada afeta a trajetória do bloco.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "nulo, pois a força aplicada não tem componente na direção do deslocamento." está correta, pois o trabalho realizado por uma força é dado pela equação <strong>W = F &sdot; d &sdot; cos&theta;</strong>. O ângulo &theta; representa a inclinação da força em relação ao deslocamento. Quando <strong>&theta; = 90&deg;, o cosseno do ângulo é igual a zero, o que anula completamente o trabalho realizado pela força</strong>. Isso significa que a força aplicada não contribui para o deslocamento, pois está atuando perpendicularmente à direção do movimento.</p>
      <p class="final-answer">A resposta correta é: nulo, pois a força aplicada não tem componente na direção do deslocamento.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "máximo, pois toda a força aplicada contribui para o deslocamento do bloco" está incorreta, pois o trabalho máximo ocorre quando a força está completamente alinhada com o deslocamento, ou seja, quando <strong>&theta; = 0&deg;, resultando em W = F &sdot; d</strong>.</p>
      <p>A alternativa "mínimo, mas ainda diferente de zero, pois a força aplicada afeta a trajetória do bloco" está incorreta, pois o trabalho mínimo nesse caso é exatamente zero. A força perpendicular ao deslocamento pode influenciar o movimento de outras formas, como alterando a normal exercida pela superfície, mas não realiza trabalho.</p>
      <p>A alternativa "negativo, pois a força aplicada está contrária ao sentido do deslocamento" está incorreta, pois o trabalho negativo ocorre quando a força tem uma componente contrária à direção do deslocamento, o que acontece para ângulos entre 90&deg; e 180&deg;. No caso de uma força perpendicular, não há componente contrária ou favorável ao deslocamento.</p>
      <p>A alternativa "igual ao produto da força aplicada pela distância percorrida pelo bloco" está incorreta, pois a equação do trabalho envolve o fator cos&theta;. Quando <strong>&theta; = 90&deg;, esse fator anula o trabalho realizado</strong>.</p>
    `,
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      'Leia o trecho a seguir:<br><br>"A matriz energética brasileira é predominantemente composta por fontes renováveis, sendo a <strong>[preencher 1]</strong> responsável por aproximadamente <strong>65%</strong> da geração elétrica no país. No entanto, durante períodos de estiagem, há a necessidade de recorrer às <strong>[preencher 2]</strong>, que utilizam combustíveis fósseis e apresentam maior custo e impacto ambiental. Nos últimos anos, houve um crescimento significativo no uso da energia <strong>[preencher 3]</strong>, viabilizada por painéis fotovoltaicos instalados tanto em usinas de grande porte quanto em residências e indústrias."',
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - térmica; 2 - hidrelétricas; 3 - nuclear.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - nuclear; 2 - eólicas; 3 - térmica.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - hidrelétrica; 2 - termelétricas; 3 - solar.",
        isCorrect: true,
      },
      {
        letter: "D",
        text: "1 - termelétrica; 2 - solares; 3 - eólica.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - eólica; 2 - nucleares; 3 - biomassa.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "1 - hidrelétrica; 2 - termelétricas; 3 - solar" está correta, pois a geração de energia elétrica no Brasil é majoritariamente proveniente das usinas hidrelétricas, que representam cerca de 65% da matriz elétrica do país. As termelétricas são acionadas em momentos de escassez hídrica, quando o nível dos reservatórios das hidrelétricas está baixo. Nos últimos anos, a energia solar tem apresentado um crescimento significativo na matriz energética brasileira. A instalação de painéis fotovoltaicos em telhados de residências, indústrias e grandes usinas solares tem permitido a descentralização da produção de energia e contribuído para a diversificação das fontes energéticas.</p>
      <p class="final-answer">A resposta correta é: 1- hidrelétrica; 2- termelétricas; 3- solar.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "1 - termelétrica; 2 - solares; 3 - eólica" está incorreta, pois a principal fonte de geração de energia no Brasil não é a termelétrica. As termelétricas são usadas apenas como fontes complementares em períodos de crise hídrica. Além disso, a energia solar não é utilizada como solução emergencial para suprir a demanda elétrica, pois sua geração depende da incidência solar.</p>
      <p>A alternativa "1 - nuclear; 2 - eólicas; 3 - térmica" está incorreta, pois a energia nuclear representa apenas cerca de 2% da matriz elétrica brasileira e não é a principal fonte de geração. Além disso, as usinas nucleares não são utilizadas como solução emergencial, já que sua operação exige planejamento e controle rigoroso. A energia eólica também não substitui diretamente as hidrelétricas, pois sua geração varia conforme a intensidade dos ventos.</p>
      <p>A alternativa "1 - eólica; 2 - nucleares; 3 - biomassa" está incorreta, pois a energia eólica, embora em crescimento, ainda não é a principal fonte de geração elétrica no Brasil. A energia nuclear, como citado anteriormente, não é utilizada como fonte emergencial para compensar a falta de geração hidrelétrica. Além disso, a biomassa, embora seja uma fonte renovável, representa uma parcela menor da matriz elétrica quando comparada a outras fontes.</p>
      <p>A alternativa "1 - térmica; 2 - hidrelétricas; 3 - nuclear" está incorreta, pois as termelétricas não são a principal fonte de geração elétrica no Brasil. As hidrelétricas não atuam apenas como fontes secundárias, mas sim como a base do sistema elétrico nacional. Além disso, a energia nuclear não é uma alternativa amplamente utilizada para suprir a demanda energética do país.</p>
    `,
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      "A matriz energética de um país é composta por diferentes fontes de energia, cada uma com suas particularidades e impactos. No Brasil, diversas formas de geração elétrica são utilizadas, desde fontes renováveis até não renováveis. O crescimento de tecnologias alternativas vem modificando a participação de cada fonte na matriz elétrica ao longo do tempo.",
    questionText: `Com base nas características da matriz energética brasileira, observe as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia hidrelétrica é a principal fonte de geração elétrica no Brasil, representando mais da metade da produção nacional.
    <br>
    <strong>II.</strong> A energia eólica e solar vêm ganhando espaço na matriz elétrica do país, reduzindo a dependência de fontes não renováveis.
    <br>
    <strong>III.</strong> A energia nuclear representa uma das maiores fontes de geração elétrica no Brasil, superando a participação da energia térmica.
    <br>
    <strong>IV.</strong> As termoelétricas desempenham um papel importante na matriz energética, sendo acionadas em momentos de baixa geração hídrica.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I, II e IV, apenas.", isCorrect: true },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "I, II, III e IV.", isCorrect: false },
      { letter: "E", text: "II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia hidrelétrica é a principal fonte de geração elétrica no Brasil, representando cerca de 65% da matriz elétrica. No entanto, essa fonte depende do regime de chuvas e pode ser impactada por períodos de estiagem, reduzindo sua eficiência e exigindo o acionamento de outras fontes complementares, como as termoelétricas.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois a energia eólica e solar têm se expandido significativamente no Brasil. Avanços tecnológicos permitiram a redução dos custos de instalação, tornando essas fontes mais competitivas. A energia eólica, por exemplo, já representa cerca de 9% da matriz elétrica brasileira, enquanto a solar fotovoltaica cresce rapidamente, aproximando-se dos 2%. Apesar do seu crescimento, essas fontes ainda enfrentam desafios, como a intermitência na geração e a necessidade de sistemas de armazenamento ou complementação por outras fontes.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois as termoelétricas desempenham um papel essencial na matriz energética brasileira, sendo acionadas principalmente quando a geração hidrelétrica é insuficiente. No entanto, o custo de operação das usinas térmicas é significativamente maior devido ao uso de combustíveis fósseis, como carvão, gás natural e óleo diesel. Além disso, essas usinas emitem gases poluentes e contribuem para o efeito estufa, tornando-se uma alternativa menos sustentável no longo prazo.</p>
      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> está incorreta, pois a energia nuclear não é uma das maiores fontes de geração elétrica no Brasil. Atualmente, a participação da energia nuclear na matriz elétrica é de aproximadamente 2%, sendo gerada pelas usinas de Angra 1 e Angra 2. Esse valor é inferior ao da geração térmica, que representa cerca de 25% da matriz energética do país. Além disso, apesar de sua eficiência e baixa emissão de gases poluentes, a energia nuclear ainda enfrenta desafios relacionados à segurança, ao alto custo de implantação e à gestão de resíduos radioativos.</p>
    `,
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      "Ao dirigir um automóvel, a segurança dos passageiros depende diretamente do controle da velocidade e da inércia do veículo. A energia cinética é um dos fatores que determinam a gravidade de um impacto em caso de colisão. Por exemplo, um carro de massa <strong>1000 kg</strong> trafegando a <strong>20 m/s</strong> tem uma certa quantidade de energia armazenada em seu movimento.",
    questionText: `Com base nessa situação, observe as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia cinética de um corpo é diretamente proporcional à sua massa e ao quadrado de sua velocidade.
    <br>
    <strong>II.</strong> Se a velocidade do carro for dobrada, sua energia cinética também dobrará.
    <br>
    <strong>III.</strong> Se outro veículo de mesma massa estiver em repouso, sua energia cinética será zero.
    <br>
    <strong>IV.</strong> A energia cinética do carro a <strong>20 m/s</strong> é menor do que a energia cinética do mesmo carro a <strong>40 m/s</strong>.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e III, apenas.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: true },
      { letter: "D", text: "I, apenas.", isCorrect: false },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a equação da energia cinética é dada por: <strong>K = &frac12; mv</strong><sup>2</sup>. Essa equação mostra que a energia cinética (K) de um corpo é diretamente proporcional à sua massa (m) e ao quadrado de sua velocidade (v<sup>2</sup>). Isso significa que, ao aumentar a velocidade de um corpo, sua energia cinética crescerá de maneira quadrática. Da mesma forma, se a massa do corpo for aumentada, sua energia cinética também será proporcionalmente maior.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois se um veículo estiver em repouso, sua velocidade será zero (<strong>v = 0)</strong>. Como a energia cinética é diretamente dependente do quadrado da velocidade, temos: <strong>K = &frac12; m(0)</strong><sup>2</sup> = 0. Isso significa que um corpo sem movimento não possui energia cinética, pois essa forma de energia está relacionada à velocidade do objeto. Portanto, a afirmação está correta ao indicar que a energia cinética de um veículo em repouso é zero.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois, segundo a equação da energia cinética <strong>K = &frac12; mv</strong><sup>2</sup>, quando a velocidade aumenta, a energia cinética também aumenta. Comparando a energia cinética de um carro a 20 <strong>m/s</strong> com a energia cinética do mesmo carro a 40 <strong>m/s</strong>, temos:</p>
      <p style="text-align: center;">K<sub>carro 20 <strong>m/s</strong></sub> = &frac12; m(20)<sup>2</sup> = &frac12; m &sdot; 400 = 200 <strong>m</strong></p>
      <p style="text-align: center;">K<sub>carro 40 <strong>m/s</strong></sub> = &frac12; m(40)<sup>2</sup> = &frac12; m &sdot; 1600 = 800 <strong>m</strong></p>
      <p>Como o carro possui a mesma massa, podemos confirmar que o carro a 40 <strong>m/s</strong> possui maior energia cinética do que o carro a 20 <strong>m/s</strong>.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> é incorreta, pois a energia cinética não dobra quando a velocidade é dobrada, mas sim quadruplica. Isso ocorre porque a velocidade está elevada ao quadrado na equação da energia cinética. Se a velocidade inicial for v e dobrarmos essa velocidade para 2v, a nova energia cinética será: K' = &frac12; m(2v)<sup>2</sup> = &frac12; m &sdot; 4v<sup>2</sup> = 4K. Ou seja, a energia cinética se torna quatro vezes maior e não apenas o dobro. Isso mostra que a variação da energia cinética com a velocidade não é linear, mas sim quadrática.</p>
    `,
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      "Montanhas-russas são exemplos práticos da conservação da energia mecânica em sistemas físicos, onde a energia potencial gravitacional é convertida em energia cinética e vice-versa ao longo do percurso. Suponha que um carrinho de massa <strong>m = 500 kg</strong> seja liberado do repouso no topo de uma colina de altura <strong>h = 40m</strong> em relação ao solo</strong>. Considerando que não há dissipação de energia por atrito ou resistência do ar, e que a aceleração da gravidade é <strong>g = 9,8 m/s<sup>2</sup></strong>, o carrinho atinge uma segunda colina de altura <strong>h'</strong>.",
    questionText: `Com base nesses dados, analise as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia mecânica total do sistema se mantém constante ao longo do percurso, sendo a soma da energia cinética e da energia potencial gravitacional.
    <br>
    <strong>II.</strong> A velocidade do carrinho no ponto mais baixo da trajetória, ao nível do solo, será de aproximadamente <strong>28 m/s</strong>.
    <br>
    <strong>III.</strong> Se a segunda colina tiver altura <strong>h' = 20 m</strong>, a velocidade do carrinho no topo dessa colina será de aproximadamente <strong>19,8 m/s</strong>.
    <br>
    <strong>IV.</strong> Caso existisse resistência do ar, a energia mecânica total ainda se conservaria, pois a força de arrasto não realiza trabalho sobre o sistema.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e II, apenas.", isCorrect: false },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I, II, III e IV.", isCorrect: false },
      { letter: "D", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia mecânica total de um sistema é a soma da energia cinética e da energia potencial, conforme a equação: <strong>E = K + U</strong>. Onde: <strong>E = energia mecânica total, K = energia cinética (K = &frac12; mv</strong><sup>2</sup>) e <strong>U = energia potencial gravitacional (U = m &sdot; g &sdot; h)</strong>. Caso um sistema seja conservativo (sem forças dissipativas, como atrito ou resistência do ar), a energia mecânica total se mantém constante.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade do carrinho no ponto mais baixo pode ser encontrada a partir da equação de conservação da energia mecânica: E<sub>i</sub> = E<sub>f</sub> &rarr; <strong>mgh = &frac12; mv</strong><sup>2</sup>. Cancelando m e substituindo os valores: (9,8)(40) = &frac12; v<sup>2</sup>, isolando e resolvendo para v:</p>
      <p style="text-align: center;">v = &radic;(2 &times; 9,8 &times; 40) &approx; 28 <strong>m/s</strong>.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois ao subir para a segunda colina de altura h' = 20 <strong>m</strong>, a energia potencial é recuperada e parte da energia cinética do ponto mais baixo é convertida novamente em energia potencial. A velocidade do carrinho no topo da segunda colina é determinada pela conservação da energia mecânica: <strong>mgh = mgh' + &frac12; mv</strong><sup>2</sup>. Cancelando m e substituindo os valores: (9,8)(40) = (9,8)(20) + &frac12; v<sup>2</sup> &rarr; 392 = 196 + &frac12; v<sup>2</sup>. Isolando e resolvendo para v: <strong>v = &radic;(2 &times; 196) &approx; 19,8 <strong>m/s</strong>.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a presença de resistência do ar implicaria na dissipação de energia mecânica em forma de calor, reduzindo a energia total disponível para a conversão entre energia cinética e potencial. Assim, a energia mecânica não seria mais conservada.</p>
    `,
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context:
      "No dia a dia, a energia potencial gravitacional está presente em diversas situações, como na construção civil, em brinquedos de parques de diversões e até no armazenamento de energia em barragens hidrelétricas. Imagine um operário que trabalha em um canteiro de obras e precisa levantar sacos de cimento do solo até uma plataforma elevada. Esse processo envolve a conversão de trabalho mecânico em energia potencial gravitacional, que depende da altura atingida e da massa do objeto. Suponha que o operário esteja transportando sacos de cimento de <strong>50 kg</strong> cada para uma plataforma de <strong>5 metros</strong> de altura. A aceleração da gravidade no local pode ser considerada como <strong>g = 9,8 <strong>m/s</strong><sup>2</sup></strong>.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A energia potencial gravitacional adquirida por um saco ao ser elevado até a plataforma é de <strong>2450 J</strong>.
    <br>
    <strong>II.</strong> Se a altura da plataforma fosse dobrada para <strong>10 metros</strong>, a energia potencial gravitacional do saco também dobraria.
    <br>
    <strong>III.</strong> Caso dois sacos fossem levantados simultaneamente até a plataforma de <strong>5 metros</strong>, a energia potencial gravitacional total seria <strong>4900 J</strong>.
    <br>
    <strong>IV.</strong> Se a altura inicial fosse considerada como <strong>2 metros</strong> em vez de <strong>0 metros</strong>, a variação de energia potencial gravitacional ao elevar o saco até a plataforma de <strong>5 metros</strong> seria <strong>980 J</strong>.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I, II, III e IV.", isCorrect: false },
      { letter: "D", text: "I e II, apenas.", isCorrect: false },
      { letter: "E", text: "II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia potencial gravitacional é calculada pela equação: <strong>U = m &sdot; g &sdot; &Delta;y</strong>. Substituindo os valores fornecidos no enunciado (<strong>m = 50 <strong>kg</strong>, g = 9,8 <strong>m/s</strong><sup>2</sup>, <strong>&Delta;y = 5 <strong>m</strong>):</strong></p>
      <p style="text-align: center;">U = (50 <strong>kg</strong>) &times; (9,8 <strong>m/s</strong><sup>2</sup>) &times; (5 <strong>m</strong>) = 2450 <strong>J</strong>.</p>
      <p>Portanto, a energia potencial gravitacional adquirida por um saco ao ser elevado até a plataforma é de 2450 <strong>J</strong>.</p>
      
      <p>A afirmativa <strong>II</strong> está correta, pois a energia potencial gravitacional é diretamente proporcional à altura. Se a altura for dobrada para 10 <strong>metros</strong> teríamos: <strong>U = 50 &times; 9,8 &times; 10 = 4900 <strong>J</strong>. Ou seja, dobrar a altura resulta no dobro da energia potencial gravitacional, confirmando a veracidade da afirmativa.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois ao elevar dois sacos de cimento à plataforma de 5 <strong>metros</strong>, a energia potencial total será o dobro da energia de um único saco. Como já calculado anteriormente, a energia de um único saco é 2450 <strong>J</strong>, logo: U<sub>total</sub> = 2 &times; 2450 = 4900 <strong>J</strong>. Portanto, a afirmativa está correta, pois a soma da energia potencial de ambos os sacos resulta no valor apresentado.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois se a altura inicial for alterada para 2 <strong>metros</strong>, a variação de energia potencial gravitacional ao elevar o saco até 5 <strong>metros</strong> será dada por: <strong>&Delta;U = mg(h</strong><sub>f</sub> - h<sub>i</sub>) = 50 &times; 9,8 &times; (5 - 2) = 1470 <strong>J</strong>. Portanto, a variação de energia potencial gravitacional ao elevar o saco até a plataforma de 5 <strong>metros</strong> seria de 1470 <strong>J</strong>, diferindo do valor apresentado pela afirmativa.</p>
    `,
  },
];
