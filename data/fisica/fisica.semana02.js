export const fisicaSemana02 = [
  {
    week: 2,
    subject: "Física do Movimento",
    context:
      "Leia o trecho a seguir:<br><br>Na cinemática, o deslocamento de um corpo, representado por <strong>&Delta;x</strong>, é definido como a diferença entre a sua posição <strong>[preencher 1]</strong>, e a sua posição <strong>[preencher 2]</strong>. Quando esse deslocamento é dividido pelo intervalo de tempo <strong>&Delta;t</strong>, obtemos a velocidade média, que representa a razão de variação da posição ao longo do tempo. No entanto, essa grandeza não nos fornece informações sobre a velocidade em um instante específico. Para determinar a velocidade instantânea, é necessário calcular o limite da velocidade média quando o intervalo de tempo tende <strong>[preencher 3]</strong>.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - inicial; 2 - final; 3 - a zero",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - final; 2 - inicial; 3 - um intervalo arbitrário",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - inicial; 2 - final; 3 - ao infinito",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "1 - final; 2 - inicial; 3 - a zero",
        isCorrect: true,
      },
      {
        letter: "E",
        text: "1 - final; 2 - inicial; 3 - a metade do tempo total",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"1 - final; 2 - inicial; 3 - a zero"</strong> está correta, pois o deslocamento é calculado como a diferença entre a posição final e a posição inicial de um corpo em movimento. Essa relação nos permite entender como a posição varia ao longo do tempo. A velocidade média é definida pela razão entre esse deslocamento e o intervalo de tempo, enquanto a velocidade instantânea é obtida como o limite da velocidade média quando o intervalo de tempo tende a zero. Esse conceito é essencial na cinemática, pois nos permite determinar a velocidade exata de um corpo em um instante específico.</p>
      <p class="final-answer">A resposta correta é: 1- final; 2- inicial; 3- a zero</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas por várias razões:</h4>
      <p>A alternativa <strong>"1 - inicial; 2 - final; 3 - ao infinito"</strong> está incorreta, os dois primeiros termos estão invertidos, pois o deslocamento é calculado como a diferença entre a posição final e a posição inicial de um corpo em movimento. E por último, o limite que define a velocidade instantânea ocorre quando o intervalo de tempo tende a zero, e não ao infinito. Se o tempo fosse infinito, estaríamos analisando um comportamento global do movimento, e não uma velocidade em um instante específico.</p>
      <p>A alternativa <strong>"1- inicial; 2- final; 3- a zero"</strong> está incorreta porque a ordem das 2 lacunas iniciais está invertida. O deslocamento é calculado como posição final menos posição inicial, e não o contrário. Isso altera a interpretação correta do conceito de deslocamento na cinemática, podendo levar a erros na análise do movimento. O último termo está correto, pois o limite que define a velocidade instantânea ocorre quando o intervalo de tempo tende a zero.</p>
      <p>A alternativa <strong>"1- final; 2- inicial; 3- um intervalo arbitrário"</strong> está incorreta, as duas primeiras lacunas estão corretas, porém, a terceira lacuna está equivocada, porque o cálculo da velocidade instantânea não pode ser feito para um intervalo de tempo arbitrário. O conceito de limite exige que o intervalo de tempo tenda especificamente a zero, para que a velocidade instantânea seja determinada corretamente. Qualquer outro valor impediria a obtenção da velocidade em um instante preciso.</p>
      <p>A alternativa <strong>"1- final; 2- inicial; 3- a metade do tempo total"</strong> está incorreta, as duas primeiras lacunas estão corretas, porém, a terceira lacuna está equivocada, porque a metade do tempo total não tem relação com o conceito de velocidade instantânea. A velocidade em um instante específico depende da derivada da posição em relação ao tempo, e não de um intervalo de tempo fixo. Utilizar a metade do tempo total implicaria uma média sobre um intervalo definido, e não a velocidade em um único instante.</p>
    `,
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context:
      "Durante uma competição de arrancada, os pilotos precisam acelerar ao máximo para alcançar a maior velocidade possível em poucos segundos. Um dos competidores, dirigindo um carro de alto desempenho, parte do repouso assim que o semáforo sinaliza a largada. Os engenheiros da equipe, responsáveis por otimizar o desempenho do carro, desejam compreender como a aceleração média pode ser utilizada para analisar o desempenho inicial do piloto.",
    questionText:
      "Com base nesse contexto, identifique qual das alternativas abaixo representa corretamente o conceito de aceleração média.",
    options: [
      {
        letter: "A",
        text: "A aceleração média é calculada pela variação da velocidade do corpo dividida pelo intervalo de tempo que a variação ocorreu.",
        isCorrect: true,
      },
      {
        letter: "B",
        text: "A aceleração média é determinada pelo deslocamento do corpo dividido pelo intervalo de tempo similar ao movimento.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "A aceleração média é definida como a maior variação de velocidade que um corpo atinge em um instante de tempo.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "A aceleração média não pode ser determinada se a velocidade inicial do corpo for igual a zero no início do movimento.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "A aceleração média de um corpo é sempre constante, independentemente das mudanças de velocidade ao longo do percurso.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"A aceleração média é calculada pela variação da velocidade do corpo dividida pelo intervalo de tempo que a variação ocorreu"</strong> está correta, pois essa é a definição formal de aceleração média na cinemática. Ela pode ser expressa matematicamente como: a<sub>m</sub> = &Delta;v / &Delta;t. Onde &Delta;v representa a variação da velocidade e &Delta;t o tempo decorrido. Esse conceito permite avaliar o quão rápido a velocidade de um corpo muda ao longo do tempo, sendo essencial para analisar movimentos acelerados, como o de um carro em uma corrida de arrancada.</p>
      <p class="final-answer">A resposta correta é: A aceleração média é calculada pela variação da velocidade do corpo dividida pelo intervalo de tempo que a variação ocorreu.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"A aceleração média é determinada pelo deslocamento do corpo dividido pelo intervalo de tempo similar ao movimento"</strong> está incorreta, pois essa é a definição de velocidade média e não de aceleração média. A aceleração mede a variação da velocidade, enquanto a velocidade média mede a variação da posição ao longo do tempo. Confundir esses conceitos pode levar a erros na análise do movimento de um corpo.</p>
      <p>A alternativa <strong>"A aceleração média de um corpo é sempre constante, independentemente das mudanças de velocidade ao longo do percurso"</strong> está incorreta, pois a aceleração média depende do movimento do corpo e pode variar em diferentes trechos do percurso. Em muitos casos, a aceleração não é constante, como em movimentos não uniformes, onde a variação de velocidade ocorre de maneira irregular. Assim, essa alternativa falha ao considerar que a aceleração média pode mudar dependendo do contexto.</p>
      <p>A alternativa <strong>"A aceleração média é definida como a maior variação de velocidade que um corpo atinge em um intervalo de tempo"</strong> está incorreta, pois a aceleração média representa a variação da velocidade ao longo de um período de tempo total, e não o maior valor que essa variação pode atingir. Se a aceleração variasse significativamente durante o intervalo analisado, ainda assim seu valor médio seria obtido a partir da relação entre a variação total da velocidade e o tempo decorrido.</p>
      <p>A alternativa <strong>"A aceleração média não pode ser determinada se a velocidade inicial do corpo for igual a zero no início do movimento."</strong> está incorreta, pois a aceleração média é calculada independentemente do valor da velocidade inicial. Se um corpo parte do repouso (v<sub>0</sub> = 0), sua aceleração média ainda pode ser determinada observando a variação de velocidade durante o intervalo de tempo considerado. O fato da velocidade inicial ser zero não impede o cálculo da aceleração média, desde que haja uma variação de velocidade ao longo do tempo.</p>
    `,
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context:
      "Os movimentos de projéteis têm aplicações em diversos campos da física e da engenharia, desde a balística até a análise de trajetórias em esportes. Ao ser lançado sob um ângulo de inclinação, um projétil segue uma trajetória parabólica, sendo influenciado pela aceleração da gravidade. O alcance horizontal do projétil é um dos parâmetros fundamentais para determinar a eficiência e a precisão do lançamento. Considere que um projétil é lançado do solo com uma velocidade inicial de <strong>30 m/s</strong> sob um ângulo de <strong>40&deg;</strong> em relação à horizontal. Assuma que a aceleração da gravidade é <strong>9,8 m/s</strong><sup>2</sup> e despreze a resistência do ar.",
    questionText:
      "Com base na situação descrita, assinale a alternativa que contém o alcance horizontal aproximado do projétil.",
    options: [
      { letter: "A", text: "60,2 <strong>m</strong>", isCorrect: false },
      { letter: "B", text: "101,5 <strong>m</strong>", isCorrect: false },
      { letter: "C", text: "90,4 <strong>m</strong>", isCorrect: true },
      { letter: "D", text: "75,3 <strong>m</strong>", isCorrect: false },
      { letter: "E", text: "120,8 <strong>m</strong>", isCorrect: false },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"90,4 <strong>m</strong>"</strong> está correta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: <strong>A = (v</strong><sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: <strong>A = ( (30)</strong><sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 <strong>m</strong>. Portanto, o alcance horizontal do projétil é 90,4 <strong>m</strong>.</p>
      <p class="final-answer">A resposta correta é: 90,4 <strong>m</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"60,2 <strong>m</strong>"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: <strong>A = (v</strong><sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: <strong>A = ( (30)</strong><sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 <strong>m</strong>. Portanto, o alcance horizontal do projétil é 90,4 <strong>m</strong>.</p>
      <p>A alternativa <strong>"75,3 <strong>m</strong>"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: <strong>A = (v</strong><sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: <strong>A = ( (30)</strong><sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 <strong>m</strong>. Portanto, o alcance horizontal do projétil é 90,4 <strong>m</strong>.</p>
      <p>A alternativa <strong>"101,5 <strong>m</strong>"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: <strong>A = (v</strong><sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: <strong>A = ( (30)</strong><sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 <strong>m</strong>. Portanto, o alcance horizontal do projétil é 90,4 <strong>m</strong>.</p>
      <p>A alternativa <strong>"120,8 <strong>m</strong>"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: <strong>A = (v</strong><sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: <strong>A = ( (30)</strong><sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 <strong>m</strong>. Portanto, o alcance horizontal do projétil é 90,4 <strong>m</strong>.</p>
    `,
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context:
      "Em muitos fenômenos físicos, a posição de um corpo em movimento pode ser descrita por uma função matemática do tempo. A velocidade instantânea de um objeto em um instante específico é obtida a partir da derivada da função posição em relação ao tempo, enquanto a aceleração é determinada pela derivada da velocidade. Esses conceitos são fundamentais para a compreensão de movimentos variáveis, como a queda livre e trajetórias não uniformes. Suponha que um corpo esteja se movendo ao longo de uma trajetória retilínea e que sua posição seja descrita pela equação: <strong>x(t) = 3t<sup>3</sup> - 5t<sup>2</sup> + 2t + 4</strong> onde x está em metros e t em segundos.",
    questionText: `Com base nessa equação, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade instantânea do móvel no instante <strong>t = 2s</strong> é <strong>18 m/s</strong>.
    <br>
    <strong>II.</strong> O móvel muda de direção em <strong>t = 5/3 s</strong>.
    <br>
    <strong>III.</strong> A aceleração instantânea no instante <strong>t = 2s</strong> é <strong>26 m/s<sup>2</sup></strong>.
    <br>
    <strong>IV.</strong> A função posição indica um movimento uniforme.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "II, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e III, apenas.", isCorrect: true },
      { letter: "C", text: "II e III, apenas.", isCorrect: false },
      { letter: "D", text: "I e II, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois a velocidade instantânea é obtida derivando a função posição em relação ao tempo. Aplicando a derivação temos:</p>
      <p style="text-align: center;">v(t) = d/dt (3t<sup>3</sup> - 5t<sup>2</sup> + 2t + 4) = 9t<sup>2</sup> - 10t + 2</p>
      <p>Substituindo o valor <strong>t = 2 <strong>s</strong>:</strong></p>
      <p style="text-align: center;">v(2) = 9(2)<sup>2</sup> - 10(2) + 2 = 36 - 20 + 2 = 18 <strong>m/s</strong></p>

      <p>A afirmativa <strong>III</strong> é correta, pois a aceleração instantânea é a derivada da velocidade:</p>
      <p style="text-align: center;">a(t) = d/dt (9t<sup>2</sup> - 10t + 2) &rarr; a(t) = 18t - 10</p>
      <p>Substituindo <strong>t = 2 <strong>s</strong>:  a(2) = 18(2) - 10 = 36 - 10 = 26 <strong>m/s</strong><sup>2</sup></strong>. Portanto, a afirmativa <strong>III</strong> correta, pois o valor corresponde a 26 <strong>m/s</strong><sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: I e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> é incorreta, pois o móvel muda de direção quando a velocidade se anula, ou seja, quando: 9t<sup>2</sup> - 10t + 2 = 0. Resolvendo a equação do segundo grau:</p>
      <p style="text-align: center;">t = ( -(-10) &plusmn; &radic;((-10)<sup>2</sup> - 4(9)(2)) ) / (2(9)) &rarr; <strong>t = (10 &plusmn; &radic;28) / 1</strong>8</p>
      <p style="text-align: center;">t<sub>1</sub> &approx; (10 - 5.29) / 18 &approx; 0.26 <strong>s</strong> | t<sub>2</sub> &approx; (10 + 5.29) / 18 &approx; 0.85 <strong>s</strong></p>
      <p>Portanto, o móvel muda de direção nos instantes t &approx; 0.26 <strong>s</strong> e t &approx; 0.85 <strong>s</strong>. Como a afirmativa afirma que a mudança ocorre em <strong>t = 5/3 <strong>s</strong>, que é aproximadamente 1,67 <strong>s</strong>, essa afirmativa está incorreta</strong>.</p>
      <p>A afirmativa <strong>IV</strong> é incorreta, pois para que o movimento fosse uniforme, a aceleração deveria ser constante. Como a aceleração é dada por a(t) = 18t - 10, ela varia com o tempo. Sendo assim, o movimento não é uniforme e sim, uniformemente acelerado.</p>
    `,
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context:
      "A cinemática é um ramo da mecânica que estuda o movimento dos corpos sem considerar suas causas. O deslocamento, a velocidade e a aceleração são grandezas fundamentais para a descrição do movimento. Em trajetórias retilíneas, o comportamento dessas grandezas pode ser analisado por meio de equações matemáticas e gráficos, permitindo a compreensão do comportamento do corpo ao longo do tempo.",
    questionText: `Com base nos conceitos de cinemática, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade média de um corpo em um intervalo de tempo pode ser determinada independentemente do caminho percorrido, considerando apenas as posições inicial e final.
    <br>
    <strong>II.</strong> Quando um corpo percorre certa distância e, ao final, retorna ao ponto de partida, seu deslocamento é nulo.
    <br>
    <strong>III.</strong> Quando um corpo está com velocidade negativa, ele necessariamente está desacelerando ao longo do tempo.
    <br>
    <strong>IV.</strong> No movimento retilíneo uniformemente acelerado, a velocidade instantânea pode ser obtida a partir da derivada da função horária da posição.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "II e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I, II e IV, apenas.", isCorrect: true },
      { letter: "C", text: "I, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e III, apenas.", isCorrect: false },
      { letter: "E", text: "I e II, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a velocidade média é definida como a razão entre o deslocamento total e o intervalo de tempo, sendo independente do caminho percorrido. O deslocamento considera apenas a variação entre a posição final e a posição inicial, sem levar em conta as possíveis trajetórias intermediárias. Essa ideia é reforçada ao destacar que a velocidade média não depende do percurso seguido, mas apenas da posição inicial e final do corpo.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois o deslocamento é a diferença entre a posição final e a posição inicial de um corpo. Se ele retorna ao ponto de partida após percorrer certa distância, seu deslocamento será zero, já que a posição final e inicial coincide. Esse conceito é fundamental para distinguir deslocamento de distância percorrida, sendo exemplificado ao mostrar que um objeto pode percorrer uma grande distância, mas ter deslocamento nulo caso retorne à posição original.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois no movimento retilíneo uniformemente acelerado, a velocidade instantânea pode ser obtida pela derivada da função horária da posição em relação ao tempo. Esse conceito é essencial na cinemática diferencial, pois permite calcular a velocidade em qualquer instante de tempo sem a necessidade de um intervalo. Essa relação é apresentada ao demonstrar que a velocidade instantânea é obtida por meio da derivação da equação da posição em função do tempo.</p>
      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> está incorreta, pois a velocidade negativa não significa necessariamente desaceleração. A velocidade negativa indica apenas que o corpo está se movendo no sentido oposto ao adotado como positivo no referencial. A desaceleração ocorre apenas quando a velocidade e a aceleração possuem sinais opostos. Um corpo pode ter velocidade negativa e continuar aumentando sua rapidez, desde que sua aceleração também seja negativa (movimento acelerado retrógrado).</p>
    `,
  },
];
