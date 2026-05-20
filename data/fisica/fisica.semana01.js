export const fisicaSemana01 = [
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "A determinação de grandes distâncias na Terra e no espaço tem sido um desafio para cientistas ao longo da história. Um dos primeiros métodos eficazes para esse fim foi a triangulação, técnica utilizada por Eratóstenes no século III a.C. para estimar a circunferência da Terra. Ele observou que, no solstício de verão, ao meio-dia, os raios solares incidiam verticalmente sobre Siena (atual Aswan), enquanto em Alexandria, localizada ao norte no mesmo meridiano, formavam um ângulo <strong>&theta; = 7,2&deg;</strong> com a vertical. Conhecendo a distância de <strong>5000 estádios</strong> entre a cidade, ele conseguiu estimar a circunferência da Terra.",
    questionText: `Com base nessa técnica, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A circunferência da Terra estimada por Eratóstenes, considerando a conversão moderna de <strong>1 estádio &approx; 157 metros</strong>, equivale aproximadamente a <strong>39.250 km</strong>, um valor muito próximo do real.
    <br>
    <strong>II.</strong> Se um cientista tentasse repetir esse experimento em um planeta com o dobro do raio da Terra, mas mantendo o mesmo ângulo de <strong>7,2&deg;</strong> e a mesma distância <strong>s = 5000 estádios</strong>, ele obteria um valor incorreto para a circunferência, pois o método depende diretamente do raio do planeta.
    <br>
    <strong>III.</strong> A técnica de triangulação utilizada por Eratóstenes pode ser aplicada a qualquer corpo celeste, desde que seja possível medir a distância entre dois pontos e o ângulo dos raios solares em relação à vertical nesses locais.
    <br>
    <strong>IV.</strong> Se a cidade de Alexandria estivesse <strong>10.000 estádios</strong> ao norte de Siena e o mesmo método fosse aplicado, o ângulo medido deveria ser <strong>14,4&deg;</strong>, pois há uma relação linear entre a distância percorrida sobre a superfície e o ângulo medido.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "II e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e III, apenas.", isCorrect: false },
      { letter: "E", text: "I e III, apenas.", isCorrect: true },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois Eratóstenes utilizou a relação entre a distância percorrida na superfície e o ângulo medido para estimar a circunferência da Terra. Considerando a conversão de 1 estádio &approx; 157 metros, a distância entre Siena e Alexandria (5000 estádios) corresponde a aproximadamente <strong>785 km</strong>. Aplicando a regra de três baseada na proporção angular (7,2&deg; para <strong>785 km</strong>), obtém-se uma circunferência de aproximadamente <strong>39.250 km</strong>, um valor muito próximo do real (<strong>40.075 km</strong>), com um erro inferior a 3%. Vejamos: <strong>C = (s &times; 360&deg;) / &theta; = (5000 &times; 360) / 7,2 = 250.000 estádios</strong>. Convertendo para metros: <strong>C = 250.000 &times; 157 = 39.250 km</strong>.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois o método de triangulação é amplamente utilizado na astronomia para determinar distâncias de planetas e estrelas. Um exemplo moderno é a medição da distância Terra-Lua usando lasers refletidos na superfície lunar. Além disso, a triangulação é empregada na paralaxe estelar para medir distâncias de estrelas próximas com base no deslocamento aparente causado pela posição da Terra em sua órbita.</p>
      <p class="final-answer">A resposta correta é: I e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois o método de Eratóstenes se baseia na razão entre o arco percorrido e o ângulo medido. Se o planeta tivesse o dobro do raio da Terra e a distância percorrida continuasse a mesma, o ângulo observado seria menor. Como o método utiliza essa relação para calcular a circunferência, o valor obtido ainda estaria correto, pois o cálculo levaria naturalmente em conta o novo raio do planeta.</p>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a relação entre a distância percorrida e o ângulo medido não é linear. Como a Terra é uma esfera, o ângulo entre os raios solares e a vertical em diferentes pontos da superfície segue uma relação trigonométrica baseada na circunferência do planeta. Assim, dobrar a distância percorrida sobre a superfície não implica dobrar o ângulo medido, sendo necessário utilizar funções trigonométricas para obter o novo valor corretamente.</p>
    `,
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "Na realização de experimentos científicos e medições técnicas, a precisão dos instrumentos utilizados desempenha um papel fundamental na confiabilidade dos resultados obtidos. Diferentes ferramentas de medição possuem variações na incerteza associada, o que influencia diretamente a forma como os valores devem ser reportados e tratados em cálculos.<br><br>Um pesquisador mediu a espessura de uma capa de livro utilizando três instrumentos diferentes, obtendo os seguintes valores:<br>• Com régua comum: <strong>3,0 &plusmn; 0,1 mm</strong><br>• Com paquímetro: <strong>3,00 &plusmn; 0,01 mm</strong><br>• Com micrômetro: <strong>3,000 &plusmn; 0,001 mm</strong><br><br>Com base nessas medições e nas regras de propagação de incerteza, observe as afirmativas a seguir:",
    questionText: `<strong>I.</strong> A incerteza da medição está diretamente relacionada à precisão do instrumento utilizado. Quanto menor a incerteza, maior a precisão da medida.<br>
    <strong>II.</strong> A medição realizada com o micrômetro é mais precisa do que a realizada com a régua, pois apresenta uma menor incerteza e um maior número de algarismos significativos.<br>
    <strong>III.</strong> Na soma de duas medições com diferentes incertezas, o resultado deve ter a mesma incerteza do número de menor precisão.<br>
    <strong>IV.</strong> Na subtração de dois valores medidos com diferentes incertezas, o número de casas decimais no resultado final deve ser o mesmo da medida com menor precisão.<br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, apenas.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "D", text: "II e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: true },
    ],
    correctExplanation: `
      <p>A alternativa "I, II e III, apenas." está correta, pois:</p>
      <p>A afirmativa <strong>I</strong> é correta, pois a incerteza de um instrumento está diretamente ligada à sua precisão. Quanto menor a incerteza associada à medição, mais confiável e precisa será a medida obtida. No caso dos instrumentos usados, a régua apresenta a maior incerteza (<strong>&plusmn;0,1 mm</strong>), o paquímetro uma incerteza intermediária (<strong>&plusmn;0,01 mm</strong>) e o micrômetro a menor incerteza (<strong>&plusmn;0,001 mm</strong>), indicando que o micrômetro é o mais preciso.</p>
      <p>A afirmativa <strong>II</strong> é correta, pois a medição realizada com o micrômetro possui mais algarismos significativos e uma incerteza menor, garantindo uma leitura mais detalhada e confiável. O número de algarismos significativos é um indicativo de precisão, pois reflete a capacidade do instrumento de fornecer valores mais refinados. Comparando com a régua, que fornece valores arredondados a uma casa decimal, o micrômetro permite medições até três casas decimais, evidenciando sua superioridade em precisão.</p>
      <p>A afirmativa <strong>III</strong> é correta, pois na soma de medidas with diferentes incertezas, o resultado final deve manter a mesma incerteza do número de menor precisão. A soma de medições com diferentes graus de precisão não pode resultar em um valor mais preciso do que o menos preciso dos números envolvidos. Assim, ao somar um valor medido com a régua (<strong>&plusmn;0,1 mm</strong>) com um valor do micrômetro (<strong>&plusmn;0,001 mm</strong>), o resultado final terá uma incerteza de <strong>&plusmn;0,1 mm</strong>, pois este é o valor com menor precisão.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> é incorreta, pois a regra para subtração de medidas com diferentes incertezas segue o mesmo princípio da soma: o resultado deve ser arredondado de acordo com a menor precisão entre as medidas envolvidas, mas não se baseia diretamente no número de casas decimais, e sim na incerteza absoluta. Se um valor tem incerteza <strong>&plusmn;0,1 mm</strong> e outro tem <strong>&plusmn;0,001 mm</strong>, a incerteza final será ditada pela maior dessas incertezas, independentemente do número de casas decimais dos números envolvidos.</p>
    `,
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "Em um experimento científico, um pesquisador mede duas grandezas físicas utilizando instrumentos com diferentes níveis de precisão. Para garantir que seus resultados sigam as regras de propagação de incertezas, ele precisa considerar corretamente os algarismos significativos ao apresentar o valor final.",
    questionText:
      "Com base nesse contexto, assinale a alternativa que contém a regra que determina a quantidade correta de casas decimais no resultado de uma soma ou subtração de medidas experimentais.",
    options: [
      {
        letter: "A",
        text: "O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão.",
        isCorrect: true,
      },
      {
        letter: "B",
        text: "O resultado deve ter o mesmo número de casas decimais que a medida com maior precisão.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "O resultado sempre deve ser arredondado para um número inteiro.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "O número de casas decimais no resultado deve ser o dobro do número de casas decimais da medida mais precisa.",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "O número total de algarismos significativos no resultado deve ser a soma dos algarismos significativos de cada medida.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa "O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão." está correta, pois, segundo as regras de propagação de incerteza em operações de soma e subtração, o resultado final deve ter a mesma quantidade de casas decimais do número com menor precisão. No cálculo: <strong>12,345 + 4,2 = 16,545</strong>, o número <strong>12,345</strong> possui três casas decimais, enquanto <strong>4,2</strong> possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para uma casa decimal, ficando <strong>16,5</strong>.</p>

      <p class="final-answer">A resposta correta é: O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>

      <p>A alternativa "O resultado deve ter o mesmo número de casas decimais que a medida com maior precisão." está incorreta, pois, segundo as regras de propagação de incerteza em operações de soma e subtração, o resultado final não deve ser determinado pela medida com maior precisão, mas sim pela menos precisa. No cálculo: <strong>12,345 + 4,2 = 16,545</strong>, o número <strong>12,345</strong> possui três casas decimais, enquanto <strong>4,2</strong> possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para <strong>16,5</strong>, e não manter três casas decimais.</p>

      <p>A alternativa "O número total de algarismos significativos no resultado deve ser a soma dos algarismos significativos de cada medida." está incorreta, pois o número total de algarismos significativos no resultado não é determinado pela soma dos algarismos significativos das medidas individuais. No cálculo: <strong>12,345 + 4,2 = 16,545</strong>, o número <strong>12,345</strong> possui três casas decimais, enquanto <strong>4,2</strong> possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para <strong>16,5</strong> e não um valor com mais algarismos significativos.</p>

      <p>A alternativa "O resultado sempre deve ser arredondado para um número inteiro." está incorreta, pois não há regra que obrigue o resultado de uma soma ou subtração a ser arredondado para um número inteiro. No cálculo: <strong>12,345 + 4,2 = 16,545</strong>, o número <strong>12,345</strong> possui três casas decimais, enquanto <strong>4,2</strong> possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para <strong>16,5</strong>, e não para um número inteiro como <strong>16</strong>.</p>

      <p>A alternativa "O número de casas decimais no resultado deve ser o dobro do número de casas decimais da medida mais precisa." está incorreta, pois não há fundamento na propagação de incertezas para dobrar o número de casas decimais da medida mais precisa. No cálculo: <strong>12,345 + 4,2 = 16,545</strong>, o número <strong>12,345</strong> possui três casas decimais, enquanto <strong>4,2</strong> possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para <strong>16,5</strong>, e não um valor com o dobro de casas decimais da medida mais precisa.</p>
    `,
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "Os relógios atômicos são essenciais para a definição precisa da unidade de tempo. O consórcio internacional reúne aproximadamente <strong>[preencher 1]</strong> relógios que trabalham em conjunto para estabelecer um padrão global confiável. O funcionamento desses relógios se baseia na oscilação de átomos, como o <strong>[preencher 2]</strong>, cuja transição energética entre estados bem definidos serve como uma referência extremamente confiável. Essa medida é essencial porque a definição do metro, por exemplo, depende da <strong>[preencher 3]</strong> em uma fração específica de tempo.",
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - 400; 2 - césio; 3 - velocidade da luz",
        isCorrect: true,
      },
      {
        letter: "B",
        text: "1 - 100; 2 - hidrogênio; 3 - pressão atmosférica",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "1 - 50; 2 - carbono; 3 - rotação da Terra",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "1 - 5000; 2 - tório; 3 - frequência eletromagnética",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - 1000; 2 - urânio; 3 - variação gravitacional",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa “1 - 400; 2 - césio; 3 - velocidade da luz” está correta, pois o consórcio internacional responsável pela manutenção da precisão do tempo é composto por aproximadamente 400 relógios atômicos, que trabalham em conjunto para fornecer um valor médio extremamente preciso do segundo. O elemento utilizado nesses relógios é o césio, pois sua transição energética entre dois níveis específicos serve como uma referência confiável e padronizada para a medição do tempo. Além disso, a definição do metro é baseada na velocidade da luz, pois essa unidade de medida foi redefinida em função da distância percorrida pela luz no vácuo em um intervalo específico de tempo, garantindo precisão e universalidade na medição.</p>

      <p class="final-answer">A resposta correta é: 1 - 400; 2 - césio; 3 - velocidade da luz</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>

      <p>A alternativa “1 - 50; 2 - carbono; 3 - rotação da Terra” está incorreta, pois o número de relógios do consórcio internacional é consideravelmente maior que 50, sendo cerca de 400 os equipamentos envolvidos na padronização do tempo. Além disso, o carbono não é utilizado em relógios atômicos, pois não apresenta a estabilidade necessária para medir o tempo com precisão. Por fim, a rotação da Terra não é um fator determinante para a definição do metro, já que essa unidade de medida foi estabelecida com base na velocidade da luz, evitando variações que poderiam ocorrer devido a mudanças na rotação terrestre ao longo do tempo.</p>

      <p>A alternativa “1 - 100; 2 - hidrogênio; 3 - pressão atmosférica” está incorreta, pois o número de relógios do consórcio é significativamente maior que 100, sendo cerca de 400 equipamentos que garantem a estabilidade da medição do tempo. O elemento utilizado nos relógios atômicos não é o hidrogênio, mas sim o césio, devido à sua precisão nas oscilações atômicas que permitem definir o segundo. Além disso, a pressão atmosférica não é um fator que influencia a definição do metro, pois esta unidade de medida é baseada em uma constante universal, que é a velocidade da luz, garantindo que a medição seja confiável independentemente das condições ambientais.</p>

      <p>A alternativa “1 - 1000; 2 - urânio; 3 - variação gravitacional” está incorreta, pois o consórcio internacional não conta com 1000 relógios atômicos, mas sim com aproximadamente 400, sendo esse o número correto para garantir a precisão da medição do tempo. Além disso, o urânio não é o elemento utilizado nesses relógios, pois suas propriedades atômicas não oferecem a estabilidade necessária para definir o segundo com precisão, ao contrário do césio. Por fim, a variação gravitacional não é a base para a definição do metro, uma vez que essa unidade de medida depende de uma constante universal, a velocidade da luz, garantindo que sua definição permaneça inalterada mesmo em diferentes campos gravitacionais.</p>

      <p>A alternativa “1 - 5000; 2 - tório; 3 - frequência eletromagnética” está incorreta, pois o número de relógios do consórcio internacional está muito abaixo de 5000, sendo aproximadamente 400 os equipamentos responsáveis por manter a precisão da medição do tempo. O tório não é utilizado nos relógios atômicos, pois suas transições energéticas não são adequadas para definir a unidade de tempo com a precisão necessária, sendo o césio o elemento escolhido para essa função. Além disso, a definição do metro não está baseada genericamente na frequência eletromagnética, mas sim especificamente na velocidade da luz, que é uma constante universal e garante a padronização da unidade de medida em qualquer circunstância. </p>
    `,
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "A teoria da relatividade restrita, desenvolvida por Albert Einstein, trouxe uma nova compreensão sobre espaço, tempo e movimento. Seus postulados desafiaram conceitos clássicos, mostrando que certas grandezas físicas não são absolutas, mas dependem do referencial adotado. Essa teoria teve grande impacto na física moderna, levando ao desenvolvimento do conceito de espaço-tempo e influenciando diversas áreas do conhecimento.",
    questionText: `Com relação a este tema, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade da luz no vácuo é sempre a mesma para qualquer observador, independentemente da velocidade da fonte emissora ou do observador.
    <br>
    <strong>II.</strong> O conceito de espaço-tempo implica que tempo e espaço não são grandezas absolutas, mas sim relativas e interdependentes.
    <br>
    <strong>III.</strong> A relatividade restrita permite que um objeto com massa atinja a velocidade da luz, desde que receba energia suficiente.
    <br>
    <strong>IV.</strong> O primeiro postulado da relatividade afirma que nenhum experimento físico pode distinguir se um observador está em movimento uniforme ou em repouso.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I, II e IV, apenas.", isCorrect: true },
      { letter: "C", text: "I, II, III e IV.", isCorrect: false },
      { letter: "D", text: "II e III, apenas.", isCorrect: false },
      { letter: "E", text: "I e II, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois a teoria da relatividade restrita estabelece que a velocidade da luz no vácuo é uma constante universal, independente da velocidade da fonte emissora ou do observador. Isso significa que, não importa o referencial utilizado, qualquer medição da velocidade da luz sempre resultará no mesmo valor: <strong>299.792.458 m/s</strong>.</p>

      <p>A afirmativa <strong>II</strong> é correta, pois o conceito de espaço-tempo introduzido por Einstein mostra que tempo e espaço não são grandezas separadas e absolutas, como se pensava na mecânica clássica. Em vez disso, são relativos e interdependentes, ou seja, o tempo e o espaço podem sofrer dilatação ou contração dependendo do referencial do observador. Esse efeito explica fenômenos como a dilatação temporal e a contração espacial em altas velocidades.</p>

      <p>A afirmativa <strong>IV</strong> é correta, pois o primeiro postulado da relatividade afirma que as leis da física são as mesmas em todos os referenciais inerciais, ou seja, não há nenhum experimento físico que possa determinar se um observador está em movimento uniforme ou em repouso absoluto. Isso significa que não existe um "ponto de referência fixo" no universo para medir um movimento absoluto, tornando a velocidade um conceito relativo.</p>

      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>

      <p>A afirmativa <strong>III</strong> é incorreta, pois a relatividade restrita estabelece que nenhum objeto com massa pode atingir a velocidade da luz. À medida que um corpo se aproxima dessa velocidade, a energia necessária para continuar acelerando cresce exponencialmente, tornando impossível que qualquer partícula massiva atinja exatamente c. Apenas partículas sem massa, como os fótons, podem se mover à velocidade da luz.</p>
    `,
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context:
      "Sabendo que a percepção do tempo e da velocidade pode variar para diferentes observadores. Considere que um trem de <strong>200 m</strong> de comprimento se move a uma velocidade constante de <strong>36 m/s</strong> e está prestes a atravessar um túnel de <strong>400 m</strong> de comprimento. Um observador na estação deseja calcular o tempo total necessário para que o trem atravesse completamente o túnel. Além disso, um passageiro dentro do trem caminha do fundo para a frente do vagão a uma velocidade de <strong>2 m/s</strong> em relação ao trem.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> O tempo total necessário para que o trem atravesse completamente o túnel, segundo o observador na estação, é <strong>16,67s</strong>.
    <br>
    <strong>II.</strong> O tempo necessário para que o passageiro, com sua velocidade atual segundo observador na estação, percorra uma extensão igual a do trem, é <strong>5,26s</strong>.
    <br>
    <strong>III.</strong> Para o passageiro dentro do trem, o tempo para atravessar o túnel será menor do que o tempo medido pelo observador na estação.
    <br>
    <strong>IV.</strong> Na situação descrita, a velocidade do passageiro, quando analisada com relação ao observador na estação é <strong>38m/s</strong>.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e II, apenas.", isCorrect: false },
      { letter: "B", text: "I, II, III e IV.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e IV, apenas.", isCorrect: true },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false },
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois o tempo total necessário para que o trem atravesse completamente o túnel deve levar em conta o deslocamento total percorrido pela frente do trem até que a traseira saia completamente. Esse deslocamento total é a soma do comprimento do túnel (400 <strong>m</strong>) e do comprimento do trem (200 <strong>m</strong>), resultando em 600 <strong>m</strong>. Utilizando a equação do tempo (<strong>&Delta;t = &Delta;s / v</strong>), e considerando que a velocidade do trem é 36 <strong>m/s</strong>, encontramos que o tempo total necessário para a travessia completa é <strong>&Delta;t = &Delta;s / v = 600 <strong>m</strong> / 36 <strong>m/s</strong> = 16,67 <strong>s</strong></strong>, confirmando a veracidade da afirmativa.</p>

      <p>A afirmativa <strong>II</strong> é correta, pois para calcular o tempo que o passageiro leva para percorrer uma extensão igual a do trem, ou seja, 200 <strong>m</strong>. É necessário considerar que ele caminha a 2 <strong>m/s</strong> em relação ao trem. No entanto, para um observador na estação, o passageiro tem uma velocidade resultante de 38 <strong>m/s</strong> (soma da velocidade do trem e da velocidade relativa do passageiro), e o tempo necessário para percorrer 200 <strong>m</strong> será de <strong>&Delta;t = 200 / 38 = 5,26 <strong>s</strong></strong>, confirmando a validade da afirmativa.</p>

      <p>A afirmativa <strong>IV</strong> é correta, pois a velocidade do passageiro em relação ao solo deve ser determinada pela soma vetorial da velocidade do trem (36 <strong>m/s</strong>) e da velocidade do passageiro em relação ao trem (2 <strong>m/s</strong>). Assim, a velocidade total do passageiro em relação à estação será 38 <strong>m/s</strong>, confirmando que a afirmativa é verdadeira.</p>
      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> é incorreta, pois o tempo para atravessar o túnel não é menor para o passageiro dentro do trem. Na mecânica clássica, o tempo é o mesmo para todos os passageiros dentro do trem, pois eles compartilham o mesmo referencial inercial do veículo. O tempo medido pelo passageiro será idêntico ao tempo medido por qualquer outro observador que esteja no mesmo referencial do trem, e não inferior ao tempo medido pelo observador na estação.</p>
    `,
  },
];
