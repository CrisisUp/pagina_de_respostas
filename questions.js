const questions = [
  {
    week: 1,
    subject: "Física do Movimento",
    context: "A determinação de grandes distâncias na Terra e no espaço tem sido um desafio para cientistas ao longo da história. Um dos primeiros métodos eficazes para esse fim foi a triangulação, técnica utilizada por Eratóstenes no século III a.C. para estimar a circunferência da Terra. Ele observou que, no solstício de verão, ao meio-dia, os raios solares incidiam verticalmente sobre Siena (atual Aswan), enquanto em Alexandria, localizada ao norte no mesmo meridiano, formavam um ângulo <strong>&theta; = 7,2&deg;</strong> com a vertical. Conhecendo a distância de <strong>5000 estádios</strong> entre a cidade, ele conseguiu estimar a circunferência da Terra.",
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
      { letter: "E", text: "I e III, apenas.", isCorrect: true }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois Eratóstenes utilizou a relação entre a distância percorrida na superfície e o ângulo medido para estimar a circunferência da Terra. Considerando a conversão de 1 estádio &approx; 157 metros, a distância entre Siena e Alexandria (5000 estádios) corresponde a aproximadamente 785 **km**. Aplicando a regra de três baseada na proporção angular (7,2&deg; para 785 **km**), obtém-se uma circunferência de aproximadamente 39.250 **km**, um valor muito próximo do real (40.075 **km**), com um erro inferior a 3%. Vejamos: <strong>C = (s &times; 360&deg;) / &theta; = (5000 &times; 360) / 7,2 = 250.000 estádios</strong>. Convertendo para metros: <strong>C = 250.000 &times; 157 = 39.250 **km**</strong>.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois o método de triangulação é amplamente utilizado na astronomia para determinar distâncias de planetas e estrelas. Um exemplo moderno é a medição da distância Terra-Lua usando lasers refletidos na superfície lunar. Além disso, a triangulação é empregada na paralaxe estelar para medir distâncias de estrelas próximas com base no deslocamento aparente causado pela posição da Terra em sua órbita.</p>
      <p class="final-answer">A resposta correta é: I e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois o método de Eratóstenes se baseia na razão entre o arco percorrido e o ângulo medido. Se o planeta tivesse o dobro do raio da Terra e a distância percorrida continuasse a mesma, o ângulo observado seria menor. Como o método utiliza essa relação para calcular a circunferência, o valor obtido ainda estaria correto, pois o cálculo levaria naturalmente em conta o novo raio do planeta.</p>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a relação entre a distância percorrida e o ângulo medido não é linear. Como a Terra é uma esfera, o ângulo entre os raios solares e a vertical em diferentes pontos da superfície segue uma relação trigonométrica baseada na circunferência do planeta. Assim, dobrar a distância percorrida sobre a superfície não implica dobrar o ângulo medido, sendo necessário utilizar funções trigonométricas para obter o novo valor corretamente.</p>
    `
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context: "Na realização de experimentos científicos e medições técnicas, a precisão dos instrumentos utilizados desempenha um papel fundamental na confiabilidade dos resultados obtidos. Diferentes ferramentas de medição possuem variações na incerteza associada, o que influencia diretamente a forma como os valores devem ser reportados e tratados em cálculos.<br><br>Um pesquisador mediu a espessura de uma capa de livro utilizando três instrumentos diferentes, obtendo os seguintes valores:<br>• Com régua comum: 3,0 &plusmn; 0,1 **mm**<br>• Com paquímetro: 3,00 &plusmn; 0,01 **mm**<br>• Com micrômetro: 3,000 &plusmn; 0,001 **mm**<br><br>Com base nessas medições e nas regras de propagação de incerteza, observe as afirmativas a seguir:",
    questionText: `I. A incerteza da medição está diretamente relacionada à precisão do instrumento utilizado. Quanto menor a incerteza, maior a precisão da medida.<br>
    II. A medição realizada com o micrômetro é mais precisa do que a realizada com a régua, pois apresenta uma menor incerteza e um maior número de algarismos significativos.<br>
    III. Na soma de duas medições com diferentes incertezas, o resultado deve ter a mesma incerteza do número de menor precisão.<br>
    IV. Na subtração de dois valores medidos com diferentes incertezas, o número de casas decimais no resultado final deve ser o mesmo da medida com menor precisão.<br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, apenas.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "D", text: "II e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: true }
    ],
    correctExplanation: `
      <p>A alternativa "I, II e III, apenas." está correta, pois:</p>
      <p>A afirmativa <strong>I</strong> é correta, pois a incerteza de um instrumento está diretamente ligada à sua precisão. Quanto menor a incerteza associada à medição, mais confiável e precisa será a medida obtida. No caso dos instrumentos usados, a régua apresenta a maior incerteza (&plusmn;0,1 **mm**), o paquímetro uma incerteza intermediária (&plusmn;0,01 **mm**) e o micrômetro a menor incerteza (&plusmn;0,001 **mm**), indicando que o micrômetro é o mais preciso.</p>
      <p>A afirmativa <strong>II</strong> é correta, pois a medição realizada com o micrômetro possui mais algarismos significativos e uma incerteza menor, garantindo uma leitura mais detalhada e confiável. O número de algarismos significativos é um indicativo de precisão, pois reflete a capacidade do instrumento de fornecer valores mais refinados. Comparando com a régua, que fornece valores arredondados a uma casa decimal, o micrômetro permite medições até três casas decimais, evidenciando sua superioridade em precisão.</p>
      <p>A afirmativa <strong>III</strong> é correta, pois na soma de medidas com diferentes incertezas, o resultado final deve manter a mesma incerteza do número de menor precisão. A soma de medições com diferentes graus de precisão não pode resultar em um valor mais preciso do que o menos preciso dos números envolvidos. Assim, ao somar um valor medido com a régua (&plusmn;0,1 **mm**) com um valor do micrômetro (&plusmn;0,001 **mm**), o resultado final terá uma incerteza de &plusmn; 0,1 **mm**, pois este é o valor com menor precisão.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> é incorreta, pois a regra para subtração de medidas com diferentes incertezas segue o mesmo princípio da soma: o resultado deve ser arredondado de acordo com a menor precisão entre as medidas envolvidas, mas não se baseia diretamente no número de casas decimais, e sim na incerteza absoluta. Se um valor tem incerteza &plusmn;0,1 **mm** e outro tem &plusmn;0,001 **mm**, a incerteza final será ditada pela maior dessas incertezas, independentemente do número de casas decimais dos números envolvidos.</p>
    `
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context: "Em um experimento científico, um pesquisador mede duas grandezas físicas utilizando instrumentos com diferentes níveis de precisão. Para garantir que seus resultados sigam as regras de propagação de incertezas, ele precisa considerar corretamente os algarismos significativos ao apresentar o valor final.",
    questionText: "Com base nesse contexto, assinale a alternativa que contém a regra que determina a quantidade correta de casas decimais no resultado de uma soma ou subtração de medidas experimentais.",
    options: [
      { letter: "A", text: "O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão.", isCorrect: true },
      { letter: "B", text: "O resultado deve ter o mesmo número de casas decimais que a medida com maior precisão.", isCorrect: false },
      { letter: "C", text: "O resultado sempre deve ser arredondado para um número inteiro.", isCorrect: false },
      { letter: "D", text: "O número de casas decimais no resultado deve ser o dobro do número de casas decimais da medida mais precisa.", isCorrect: false },
      { letter: "E", text: "O número total de algarismos significativos no resultado deve ser a soma dos algarismos significativos de cada medida.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão." está correta, pois, segundo as regras de propagação de incerteza em operações de soma e subtração, o resultado final deve ter a mesma quantidade de casas decimais do número com menor precisão. No cálculo: 12,345 + 4,2 = 16,545, o número 12,345 possui três casas decimais, enquanto 4,2 possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para uma casa decimal, ficando 16,5.</p>

      <p class="final-answer">A resposta correta é: O resultado deve ter o mesmo número de casas decimais que a medida com menor precisão.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>

      <p>A alternativa "O resultado deve ter o mesmo número de casas decimais que a medida com maior precisão." está incorreta, pois, segundo as regras de propagação de incerteza em operações de soma e subtração, o resultado final não deve ser determinado pela medida com maior precisão, mas sim pela menos precisa. No cálculo: 12,345 + 4,2 = 16,545, o número 12,345 possui três casas decimais, enquanto 4,2 possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para 16,5, e não manter três casas decimais.</p>

      <p>A alternativa "O número total de algarismos significativos no resultado deve ser a soma dos algarismos significativos de cada medida." está incorreta, pois o número total de algarismos significativos no resultado não é determinado pela soma dos algarismos significativos das medidas individuais. No cálculo: 12,345 + 4,2 = 16,545, o número 12,345 possui três casas decimais, enquanto 4,2 possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para 16,5 e não um valor com mais algarismos significativos.</p>

      <p>A alternativa "O resultado sempre deve ser arredondado para um número inteiro." está incorreta, pois não há regra que obrigue o resultado de uma soma ou subtração a ser arredondado para um número inteiro. No cálculo: 12,345 + 4,2 = 16,545, o número 12,345 possui três casas decimais, enquanto 4,2 possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para 16,5, e não para um número inteiro como 16.</p>

      <p>A alternativa "O número de casas decimais no resultado deve ser o dobro do número de casas decimais da medida mais precisa." está incorreta, pois não há fundamento na propagação de incertezas para dobrar o número de casas decimais da medida mais precisa. No cálculo: 12,345 + 4,2 = 16,545, o número 12,345 possui três casas decimais, enquanto 4,2 possui apenas uma casa decimal. Como o número com menor precisão tem uma casa decimal, o resultado final deve ser arredondado para 16,5, e não um valor com le dobro de casas decimais da medida mais precisa.</p>
    `
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context: "Os relógios atômicos são essenciais para a definição precisa da unidade de tempo. O consórcio internacional reúne aproximadamente <strong>[preencher 1]</strong> relógios que trabalham em conjunto para estabelecer um padrão global confiável. O funcionamento desses relógios se baseia na oscilação de átomos, como o <strong>[preencher 2]</strong>, cuja transição energética entre estados bem definidos serve como uma referência extremamente confiável. Essa medida é essencial porque a definição do metro, por exemplo, depende da <strong>[preencher 3]</strong> em uma fração específica de tempo.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1 - 400; 2 - césio; 3 - velocidade da luz", isCorrect: true },
      { letter: "B", text: "1 - 100; 2 - hidrogênio; 3 - pressão atmosférica", isCorrect: false },
      { letter: "C", text: "1 - 50; 2 - carbono; 3 - rotação da Terra", isCorrect: false },
      { letter: "D", text: "1 - 5000; 2 - tório; 3 - frequência eletromagnética", isCorrect: false },
      { letter: "E", text: "1 - 1000; 2 - urânio; 3 - variação gravitacional", isCorrect: false }
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
    `
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context: "A teoria da relatividade restrita, desenvolvida por Albert Einstein, trouxe uma nova compreensão sobre espaço, tempo e movimento. Seus postulados desafiaram conceitos clássicos, mostrando que certas grandezas físicas não são absolutas, mas dependem do referencial adotado. Essa teoria teve grande impacto na física moderna, levando ao desenvolvimento do conceito de espaço-tempo e influenciando diversas áreas do conhecimento.",
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
      { letter: "E", text: "I e II, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois a teoria da relatividade restrita estabelece que a velocidade da luz no vácuo é uma constante universal, independente da velocidade da fonte emissora ou do observador. Isso significa que, não importa o referencial utilizado, qualquer medição da velocidade da luz sempre resultará no mesmo valor: 299.792.458 m/s.</p>

      <p>A afirmativa <strong>II</strong> é correta, pois o conceito de espaço-tempo introduzido por Einstein mostra que tempo e espaço não são grandezas separadas e absolutas, como se pensava na mecânica clássica. Em vez disso, são relativos e interdependentes, ou seja, o tempo e o espaço podem sofrer dilatação ou contração dependendo do referencial do observador. Esse efeito explica fenômenos como a dilatação temporal e a contração espacial em altas velocidades.</p>

      <p>A afirmativa <strong>IV</strong> é correta, pois o primeiro postulado da relatividade afirma que as leis da física são as mesmas em todos os referenciais inerciais, ou seja, não há nenhum experimento físico que possa determinar se um observador está em movimento uniforme ou em repouso absoluto. Isso significa que não existe um "ponto de referência fixo" no universo para medir um movimento absoluto, tornando a velocidade um conceito relativo.</p>

      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>

      <p>A afirmativa <strong>III</strong> é incorreta, pois a relatividade restrita estabelece que nenhum objeto com massa pode atingir a velocidade da luz. À medida que um corpo se aproxima dessa velocidade, a energia necessária para continuar acelerando cresce exponencialmente, tornando impossível que qualquer partícula massiva atinja exatamente c. Apenas partículas sem massa, como os fótons, podem se mover à velocidade da luz.</p>
    `
  },
  {
    week: 1,
    subject: "Física do Movimento",
    context: "Sabendo que a percepção do tempo e da velocidade pode variar para diferentes observadores. Considere que um trem de **200 m** de comprimento se move a uma velocidade constante de **36 m/s** e está prestes a atravessar um túnel de **400 m** de comprimento. Um observador na estação deseja calcular o tempo total necessário para que o trem atravesse completamente o túnel. Além disso, um passageiro dentro do trem caminha do fundo para a frente do vagão a uma velocidade de **2 m/s** em relação ao trem.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> O tempo total necessário para que o trem atravesse completamente o túnel, segundo o observador na estação, é <strong>16,67 s</strong>.
    <br>
    <strong>II.</strong> O tempo necessário para que o passageiro, com sua velocidade atual segundo observador na estação, percorra uma extensão igual a do trem, é <strong>5,26 s</strong>.
    <br>
    <strong>III.</strong> Para o passageiro dentro do trem, o tempo para atravessar o túnel será menor do que o tempo medido pelo observador na estação.
    <br>
    <strong>IV.</strong> Na situação descrita, a velocidade do passageiro, quando analisada com relação ao observador na estação é <strong>38 m/s</strong>.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e II, apenas.", isCorrect: false },
      { letter: "B", text: "I, II, III e IV.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e IV, apenas.", isCorrect: true },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois o tempo total necessário para que o trem atravesse completamente o túnel deve levar em conta o deslocamento total percorrido pela frente do trem até que a traseira saia completamente. Esse deslocamento total é a soma do comprimento do túnel (**400 m**) e do comprimento do trem (**200 m**), resultando em **600 m**. Utilizando a equação do tempo (&Delta;t = &Delta;s / v), e considerando que a velocidade do trem é **36 m/s**, encontramos que o tempo total necessário para a travessia completa é &Delta;t = &Delta;s / v = **600 m** / **36 m/s** = **16,67 s**, confirmando a veracidade da afirmativa.</p>

      <p>A afirmativa <strong>II</strong> é correta, pois para calcular o tempo que o passageiro leva para percorrer uma extensão igual a do trem, ou seja, **200 m**. É necessário considerar que ele caminha a **2 m/s** em relação ao trem. No entanto, para um observador na estação, o passageiro tem uma velocidade resultante de **38 m/s** (soma da velocidade do trem e da velocidade relativa do passageiro), e o tempo necessário para percorrer **200 m** será de &Delta;t = 200 / 38 = **5,26 s**, confirmando a validade da afirmativa.</p>

      <p>A afirmativa <strong>IV</strong> é correta, pois a velocidade do passageiro em relação ao solo deve ser determinada pela soma vetorial da velocidade do trem (**36 m/s**) e da velocidade do passageiro em relação ao trem (**2 m/s**). Assim, a velocidade total do passageiro em relação à estação será **38 m/s**, confirmando que a afirmativa é verdadeira.</p>
      <p class="final-answer">A resposta correta é: I, II e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> é incorreta, pois o tempo para atravessar o túnel não é menor para o passageiro dentro do trem. Na mecânica clássica, o tempo é o mesmo para todos os passageiros dentro do trem, pois eles compartilham o mesmo referencial inercial do veículo. O tempo medido pelo passageiro será idêntico ao tempo medido por qualquer outro observador que esteja no mesmo referencial do trem, e não inferior ao tempo medido pelo observador na estação.</p>
    `
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context: "Leia o trecho a seguir:<br><br>Na cinemática, o deslocamento de um corpo, representado por <strong>&Delta;x</strong>, é definido como a diferença entre a sua posição <strong>[preencher 1]</strong>, e a sua posição <strong>[preencher 2]</strong>. Quando esse deslocamento é dividido pelo intervalo de tempo <strong>&Delta;t</strong>, obtemos a velocidade média, que representa a razão de variação da posição ao longo do tempo. No entanto, essa grandeza não nos fornece informações sobre a velocidade em um instante específico. Para determinar a velocidade instantânea, é necessário calcular o limite da velocidade média quando o intervalo de tempo tende <strong>[preencher 3]</strong>.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1- inicial; 2- final; 3- a zero", isCorrect: false },
      { letter: "B", text: "1- final; 2- inicial; 3- um intervalo arbitrário", isCorrect: false },
      { letter: "C", text: "1- inicial; 2- final; 3- ao infinito", isCorrect: false },
      { letter: "D", text: "1- final; 2- inicial; 3- a zero", isCorrect: true },
      { letter: "E", text: "1- final; 2- inicial; 3- a metade do tempo total", isCorrect: false }
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
    `
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context: "Durante uma competição de arrancada, os pilotos precisam acelerar ao máximo para alcançar a maior velocidade possível em poucos segundos. Um dos competidores, dirigindo um carro de alto desempenho, parte do repouso assim que o semáforo sinaliza a largada. Os engenheiros da equipe, responsáveis por otimizar o desempenho do carro, desejam compreender como a aceleração média pode ser utilizada para analisar o desempenho inicial do piloto.",
    questionText: "Com base nesse contexto, identifique qual das alternativas abaixo representa corretamente o conceito de aceleração média.",
    options: [
      { letter: "A", text: "A aceleração média é calculada pela variação da velocidade do corpo dividida pelo intervalo de tempo que a variação ocorreu.", isCorrect: true },
      { letter: "B", text: "A aceleração média é determinada pelo deslocamento do corpo dividido pelo intervalo de tempo similar ao movimento.", isCorrect: false },
      { letter: "C", text: "A aceleração média é definida como a maior variação de velocidade que um corpo atinge em um instante de tempo.", isCorrect: false },
      { letter: "D", text: "A aceleração média não pode ser determinada se a velocidade inicial do corpo for igual a zero no início do movimento.", isCorrect: false },
      { letter: "E", text: "A aceleração média de um corpo é sempre constante, independentemente das mudanças de velocidade ao longo do percurso.", isCorrect: false }
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
    `
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context: "Os movimentos de projéteis têm aplicações em diversos campos da física e da engenharia, desde a balística até a análise de trajetórias em esportes. Ao ser lançado sob um ângulo de inclinação, um projétil segue uma trajetória parabólica, sendo influenciado pela aceleração da gravidade. O alcance horizontal do projétil é um dos parâmetros fundamentais para determinar a eficiência e a precisão do lançamento. Considere que um projétil é lançado do solo com uma velocidade inicial de 30 m/s sob um ângulo de 40&deg; em relação à horizontal. Assuma que a aceleração da gravidade é 9,8 m/s<sup>2</sup> e despreze a resistência do ar.",
    questionText: "Com base na situação descrita, assinale a alternativa que contém o alcance horizontal aproximado do projétil.",
    options: [
      { letter: "A", text: "60,2 m", isCorrect: false },
      { letter: "B", text: "101,5 m", isCorrect: false },
      { letter: "C", text: "90,4 m", isCorrect: true },
      { letter: "D", text: "75,3 m", isCorrect: false },
      { letter: "E", text: "120,8 m", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa <strong>"90,4 m"</strong> está correta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: A = (v<sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: A = ( (30)<sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 m. Portanto, o alcance horizontal do projétil é 90,4 m.</p>
      <p class="final-answer">A resposta correta é: 90,4 m</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"60,2 m"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: A = (v<sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: A = ( (30)<sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 m. Portanto, o alcance horizontal do projétil é 90,4 m.</p>
      <p>A alternativa <strong>"75,3 m"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: A = (v<sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: A = ( (30)<sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 m. Portanto, o alcance horizontal do projétil é 90,4 m.</p>
      <p>A alternativa <strong>"101,5 m"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: A = (v<sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: A = ( (30)<sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 m. Portanto, o alcance horizontal do projétil é 90,4 m.</p>
      <p>A alternativa <strong>"120,8 m"</strong> está incorreta, pois o alcance horizontal (A) de um projétil lançado obliquamente pode ser determinado pela equação: A = (v<sub>0</sub><sup>2</sup> &sdot; sin(2&theta;)) / g. Substituindo os valores fornecidos no problema: A = ( (30)<sup>2</sup> &sdot; sin(2 &times; 40&deg;) ) / 9,8 &rarr; ( 900 &sdot; sin(80&deg;) ) / 9,8 &rarr; ( 900 &sdot; 0,9848 ) / 9,8 &rarr; 886,3 / 9,8 &approx; 90,4 m. Portanto, o alcance horizontal do projétil é 90,4 m.</p>
    `
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context: "Em muitos fenômenos físicos, a posição de um corpo em movimento pode ser descrita por uma função matemática do tempo. A velocidade instantânea de um objeto em um instante específico é obtida a partir da derivada da função posição em relação ao tempo, enquanto a aceleração é determinada pela derivada da velocidade. Esses conceitos são fundamentais para a compreensão de movimentos variáveis, como a queda livre e trajetórias não uniformes. Suponha que um corpo esteja se movendo ao longo de uma trajetória retilínea e que sua posição seja descrita pela equação:<br><br>x(t) = 3t<sup>3</sup> - 5t<sup>2</sup> + 2t + 4<br><br>onde x está em metros e t em segundos.",
    questionText: `Com base nessa equação, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade instantânea do móvel no instante t = 2s é 18 m/s.
    <br>
    <strong>II.</strong> O móvel muda de direção em t = 5/3s.
    <br>
    <strong>III.</strong> A aceleração instantânea no instante t = 2s é 26 m/s<sup>2</sup>.
    <br>
    <strong>IV.</strong> A função posição indica um movimento uniforme.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "II, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e III, apenas.", isCorrect: true },
      { letter: "C", text: "II e III, apenas.", isCorrect: false },
      { letter: "D", text: "I e II, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois a velocidade instantânea é obtida derivando a função posição em relação ao tempo. Aplicando a derivação temos:</p>
      <p style="text-align: center;"><strong>v(t) = d/dt (3t<sup>3</sup> - 5t<sup>2</sup> + 2t + 4) = 9t<sup>2</sup> - 10t + 2</strong></p>
      <p>Substituindo o valor t = 2s:</p>
      <p style="text-align: center;"><strong>v(2) = 9(2)<sup>2</sup> - 10(2) + 2 = 36 - 20 + 2 = 18 m/s</strong></p>

      <p>A afirmativa <strong>III</strong> é correta, pois a aceleração instantânea é a derivada da velocidade:</p>
      <p style="text-align: center;"><strong>a(t) = d/dt (9t<sup>2</sup> - 10t + 2) &rarr; a(t) = 18t - 10</strong></p>
      <p>Substituindo t = 2s: <strong>a(2) = 18(2) - 10 = 36 - 10 = 26 m/s<sup>2</sup></strong>. Portanto, a afirmativa <strong>III</strong> correta, pois o valor corresponde a 26 m/s<sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: I e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> é incorreta, pois o móvel muda de direção quando a velocidade se anula, ou seja, quando: 9t<sup>2</sup> - 10t + 2 = 0. Resolvendo a equação do segundo grau:</p>
      <p style="text-align: center;"><strong>t = ( -(-10) &plusmn; &radic;((-10)<sup>2</sup> - 4(9)(2)) ) / (2(9)) &rarr; t = (10 &plusmn; &radic;28) / 18</strong></p>
      <p style="text-align: center;"><strong>t<sub>1</sub> &approx; (10 - 5.29) / 18 &approx; 0.26s | t<sub>2</sub> &approx; (10 + 5.29) / 18 &approx; 0.85s</strong></p>
      <p>Portanto, o móvel muda de direção nos instantes t &approx; 0.26s e t &approx; 0.85s. Como a afirmativa afirma que a mudança ocorre em t = 5/3s, que é aproximadamente 1,67s, essa afirmativa está incorreta.</p>
      <p>A afirmativa <strong>IV</strong> é incorreta, pois para que o movimento fosse uniforme, a aceleração deveria ser constante. Como a aceleração é dada por a(t) = 18t - 10, ela varia com o tempo. Sendo assim, o movimento não é uniforme e sim, uniformemente acelerado.</p>
    `
  },
  {
    week: 2,
    subject: "Física do Movimento",
    context: "A cinemática é um ramo da mecânica que estuda o movimento dos corpos sem considerar suas causas. O deslocamento, a velocidade e a aceleração são grandezas fundamentais para a descrição do movimento. Em trajetórias retilíneas, o comportamento dessas grandezas pode ser analisado por meio de equações matemáticas e gráficos, permitindo a compreensão do comportamento do corpo ao longo do tempo.",
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
      { letter: "E", text: "I e II, apenas.", isCorrect: false }
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
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Ao formular suas leis do movimento, Newton baseou-se no conceito de que o tempo e o espaço eram absolutos, ou seja, independentes do observador e das condições do movimento. Esse modelo foi amplamente utilizado e permaneceu inquestionável até o surgimento de novas teorias que ampliaram a compreensão da física.",
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
      { letter: "E", text: "I, III e IV, apenas.", isCorrect: true }
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
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Um engenheiro mecânico está projetando um novo sistema de transporte para um ambiente industrial. Durante os testes, ele observa que um dos carrinhos utilizados para movimentação de peças metálicas altera sua velocidade ao longo do tempo ao ser puxado por um motor. Para garantir que o sistema funcione corretamente, ele precisa calcular a força necessária para movimentar um carrinho de 5 kg que apresenta uma aceleração de 2 m/s<sup>2</sup>.",
    questionText: "Com base nessa situação, assinale a alternativa que identifica o valor da força aplicada sobre o carrinho.",
    options: [
      { letter: "A", text: "12 N", isCorrect: false },
      { letter: "B", text: "15 N", isCorrect: false },
      { letter: "C", text: "2 N", isCorrect: false },
      { letter: "D", text: "5 N", isCorrect: false },
      { letter: "E", text: "10 N", isCorrect: true }
    ],
    correctExplanation: `
      <p>A alternativa <strong>"10 N"</strong> está correta, pois a força aplicada sobre um corpo pode ser determinada a partir da relação entre sua massa e a aceleração adquirida de acordo com a fórmula da segunda lei de Newton: <strong>|F| = m &sdot; |a|</strong>. Substituindo os valores do enunciado:</p>
      <p style="text-align: center;"><strong>F = |F| = m &sdot; |a| = 5 &sdot; 2 = 10 N</strong></p>
      <p>Portanto o valor da força aplicada sobre o carrinho é de <strong>10 N</strong>.</p>
      <p class="final-answer">A resposta correta é: 10 N</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"2 N"</strong> está incorreta, pois a força aplicada sobre um corpo deve ser determinada pelo produto da massa pela aceleração (<strong>|F| = m &sdot; |a|</strong>). Com uma massa de <strong>5 kg</strong> e aceleração de <strong>2 m/s<sup>2</sup></strong>, o resultado correto é <strong>10 N</strong>.</p>
      <p>A alternativa <strong>"5 N"</strong> está incorreta, pois não corresponde ao cálculo correto da segunda lei de Newton para os valores fornecidos de 5 kg e 2 m/s<sup>2</sup>.</p>
      <p>A alternativa <strong>"12 N"</strong> está incorreta, pois o valor da força resultante deve ser exatamente o produto de 5 por 2, resultando em 10 N.</p>
      <p>A alternativa <strong>"15 N"</strong> está incorreta, pois excede o valor matemático obtido pela relação fundamental da dinâmica para este sistema.</p>
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Um drone autônomo está sendo testado para mapear uma região utilizando sensores de movimento. Durante o teste, ele percorre uma trajetória curva no plano xy, seguindo um padrão pré-programado que define sua posição ao longo do tempo. A trajetória do drone é descrita pelas funções x(t) = 2t<sup>2</sup> + 3 e y(t) = 3t + 1, onde x e y são dados em metros e t está em segundos. Os engenheiros responsáveis pelo teste precisam analisar o comportamento do drone em diferentes momentos da trajetória, verificando sua movimentação média ao longo de um intervalo de tempo e sua velocidade instantânea em um determinado instante. Para isso, eles registram a posição do drone em diferentes instantes, e utilizam os conceitos de velocidade vetorial para interpretar os dados.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade média no intervalo de tempo de t = 1s a t = 3s tem componentes v<sub>x,m</sub> = 8 m/s e v<sub>y,m</sub> = 3 m/s.
    <br>
    <strong>II.</strong> A velocidade instantânea do drone no instante t = 2s tem componentes v<sub>x</sub> = 8 m/s e v<sub>y</sub> = 3 m/s.
    <br>
    <strong>III.</strong> A magnitude da velocidade instantânea no instante t = 2s é aproximadamente 10,2 m/s.
    <br>
    <strong>IV.</strong> A equação geral para a velocidade vetorial do drone ao longo do tempo é dada por v(t) = (2t)i + 3j.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: true },
      { letter: "C", text: "I e IV, apenas.", isCorrect: false },
      { letter: "D", text: "II e IV, apenas.", isCorrect: false },
      { letter: "E", text: "I, II e III, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a velocidade média é determinada pela variação da posição dividida pelo intervalo de tempo <strong>v<sub>m</sub> = &Delta;x / &Delta;t</strong>. Considerando o tempo inicial de 1s e o tempo final de 3s, teremos em x:</p>
      <p style="text-align: center;"><strong>v<sub>x,m</sub> = (x(3) - x(1)) / (3 - 1) = ([2(3)<sup>2</sup> + 3] - [2(1)<sup>2</sup> + 3]) / 2 = (21 - 5) / 2 = 8 m/s</strong></p>
      <p>Em y teremos:</p>
      <p style="text-align: center;"><strong>v<sub>y,m</sub> = (y(3) - y(1)) / (3 - 1) = ([3(3) + 1] - [3(1) + 1]) / 2 = (10 - 4) / 2 = 3 m/s</strong></p>
      <p>Portanto a velocidade média no intervalo de tempo de t = 1s a t = 3s tem componentes v<sub>x,m</sub> = 8 m/s e v<sub>y,m</sub> = 3 m/s.</p>

      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade instantânea é obtida derivando as funções x(t) e y(t):</p>
      <p style="text-align: center;"><strong>v<sub>x</sub>(t) = dx/dt (2t<sup>2</sup> + 3) = 4t</strong></p>
      <p style="text-align: center;"><strong>v<sub>y</sub>(t) = dy/dt (3t + 1) = 3</strong></p>
      <p>Resolvendo para t = 2s, em x teremos: <strong>v<sub>x</sub>(2) = 4(2) = 8 m/s</strong>. Em y teremos: <strong>v<sub>y</sub>(2) = 3 m/s</strong>. Portanto, a velocidade instantânea do drone no instante t = 2s tem componentes v<sub>x</sub> = 8 m/s e v<sub>y</sub> = 3 m/s.</p>
      <p class="final-answer">A resposta correta é: I e II, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>III</strong> está incorreta, pois o módulo da velocidade instantânea no instante t = 2s é dado pela soma quadrática dos componentes x e y da velocidade:</p>
      <p style="text-align: center;"><strong>|v(2)| = &radic;(v<sub>x</sub><sup>2</sup> + v<sub>y</sub><sup>2</sup>) = &radic;(8<sup>2</sup> + 3<sup>2</sup>) = &radic;(64 + 9) = &radic;73 &approx; 8,54 m/s</strong></p>
      <p>Portanto, o valor correto da magnitude da velocidade instantânea é aproximadamente 8,54 m/s, e não 10,2 m/s, conforme presente na afirmativa.</p>

      <p>A afirmativa <strong>IV</strong> está incorreta, pois a velocidade vetorial pode ser expressa como v(t) = v<sub>x</sub>(t)i + v<sub>y</sub>(t)j. Portanto a equação correta para a velocidade vetorial é: v(t) = (4t)i + 3j. A equação fornecida na afirmativa IV apresenta um erro no termo 2t, pois a derivada correta da função x(t) = 2t<sup>2</sup> + 3 é 4t, e não 2t.</p>
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Em uma fábrica de eletrodomésticos, um engenheiro mecânico está testando o motor de um novo modelo de ventilador de teto. Para garantir que o equipamento opere dentro dos padrões de segurança, ele precisa determinar a aceleração angular do motor no instante da partida. Durante o teste, o ventilador parte do repouso e acelera uniformemente até atingir uma velocidade angular de 20 rad/s em um intervalo de tempo de 10 segundos.",
    questionText: "Com base nos princípios do movimento circular uniformemente acelerado, assinale a alternativa que aplica o valor correto da aceleração angular do motor.",
    options: [
      { letter: "A", text: "2,0 rad/s<sup>2</sup>", isCorrect: true },
      { letter: "B", text: "3,0 rad/s<sup>2</sup>", isCorrect: false },
      { letter: "C", text: "1,0 rad/s<sup>2</sup>", isCorrect: false },
      { letter: "D", text: "2,5 rad/s<sup>2</sup>", isCorrect: false },
      { letter: "E", text: "1,5 rad/s<sup>2</sup>", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "2,0 rad/s<sup>2</sup>" está correta, pois a aceleração angular pode ser determinada a partir da equação da velocidade angular instantânea: &omega;(t) = &omega;<sub>0</sub> + &alpha;(t - t<sub>0</sub>). Como o motor parte do repouso, temos a velocidade angular inicial &omega;<sub>0</sub> = 0, a velocidade angular final &omega; = 20 rad/s e t - t<sub>0</sub> = 10 s.</p>
      <p>Substituindo os valores na fórmula, obtemos: 20 = 0 + &alpha;(10), isolando a aceleração angular: &alpha; = 20 / 10 = 2,0 rad/s<sup>2</sup>. Portanto, o valor da aceleração angular do motor é de 2,0 rad/s<sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: 2,0 rad/s<sup>2</sup></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "1,0 rad/s<sup>2</sup>" está incorreta, pois a aceleração angular é a razão entre a variação da velocidade angular e o tempo (&alpha; = &Delta;&omega; / &Delta;t). Com uma variação de 20 rad/s em 10 s, o valor correto é 2,0 rad/s<sup>2</sup>.</p>
      <p>A alternativa "1,5 rad/s<sup>2</sup>" está incorreta, pois não corresponde ao resultado da divisão da velocidade angular final pelo intervalo de tempo decorrido para os dados fornecidos.</p>
      <p>A alternativa "2,5 rad/s<sup>2</sup>" está incorreta, pois excede o valor da taxa de variação da velocidade angular necessária para atingir 20 rad/s em 10 s.</p>
      <p>A alternativa "3,0 rad/s<sup>2</sup>" está incorreta, pois resultaria em uma velocidade angular de 30 rad/s após 10 s, o que diverge do valor observado no teste.</p>
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Um satélite artificial orbita um planeta em um movimento circular uniforme a uma altitude constante. A trajetória do satélite pode ser descrita pelo raio orbital r = 7000 km e pelo seu período de revolução T = 6000 s. Os engenheiros espaciais precisam analisar os parâmetros do movimento para garantir a estabilidade da órbita e evitar desvios que possam comprometer a missão.",
    questionText: `Com base nessa situação, avalie as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A velocidade angular do satélite é aproximadamente 1,05 &times; 10<sup>-3</sup> rad/s.
    <br>
    <strong>II.</strong> A velocidade linear do satélite é aproximadamente 7,35 km/s.
    <br>
    <strong>III.</strong> A aceleração centrípeta do satélite é aproximadamente 7,72 m/s<sup>2</sup>.
    <br>
    <strong>IV.</strong> Se o raio da órbita fosse reduzido ao meio, a velocidade angular seria o dobro do valor original.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "I, II, III e IV.", isCorrect: false },
      { letter: "E", text: "II e III, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a velocidade angular &omega; é dada por: &omega; = 2&pi; / T. Substituindo os valores dados pelo enunciado temos: &omega; = 2&pi; / 6000. Que resulta em: &omega; &approx; 1,05 &times; 10<sup>-3</sup> rad/s. Portanto a velocidade angular é de aproximadamente 1,05 &times; 10<sup>-3</sup> rad/s.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade linear v é determinada por: v = &omega;r. Substituindo os valores dados pelo enunciado, teremos: v = (1,05 &times; 10<sup>-3</sup>) &times; (7000 &times; 10<sup>3</sup>), resultando em v &approx; 7,35 km/s. Portanto a velocidade linear é de aproximadamente 7,35 km/s.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois a aceleração centrípeta a<sub>c</sub> é dada por: a<sub>c</sub> = v<sup>2</sup> / r. Substituindo os valores dados pelo enunciado, teremos: a<sub>c</sub> = (7,35 &times; 10<sup>3</sup>)<sup>2</sup> / (7 &times; 10<sup>6</sup>), resultando em a<sub>c</sub> &approx; 7,72 m/s<sup>2</sup>. Portanto a aceleração centrípeta é de aproximadamente 7,72 m/s<sup>2</sup>.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a velocidade angular &omega; está relacionada ao raio e ao período da órbita. Se o raio fosse reduzido à metade, a relação entre período e raio para órbitas circulares indicaria que o novo período seria menor, mas a relação não implica diretamente que a nova velocidade angular seria exatamente o dobro do valor original. A relação entre &omega; e r depende do modelo dinâmico da órbita, e a afirmação simplifica essa relação de maneira incorreta.</p>
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Na Grécia antiga, Aristóteles já estava pensando no movimento e como ele ocorria. Naquela época, a ideia de força estava atrelada principalmente à <strong>[preencher 1]</strong>, ou seja, acreditava-se que algo precisava de uma força contínua para manter-se em movimento. Apenas mais tarde, com Newton, a força foi associada à <strong>[preencher 2]</strong>, e não à <strong>[preencher 3]</strong>.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1 - velocidade; 2 - força; 3 - gravidade.", isCorrect: false },
      { letter: "B", text: "1 - inércia; 2 - força; 3 - massa.", isCorrect: false },
      { letter: "C", text: "1 - gravidade; 2 - inércia; 3 - aceleração.", isCorrect: false },
      { letter: "D", text: "1 - aceleração; 2 - massa; 3 - força.", isCorrect: false },
      { letter: "E", text: "1 - velocidade; 2 - aceleração; 3 - velocidade.", isCorrect: true }
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
    `
  },
  {
    week: 3,
    subject: "Física do Movimento",
    context: "Na física, forças são grandezas vetoriais que podem ser representadas em um sistema de coordenadas tridimensional. Essas forças possuem componentes nos eixos x, y e z, e sua resultante é obtida considerando suas projeções em cada direção. Um engenheiro está analisando uma força aplicada sobre um objeto, que possui componentes F<sub>x</sub> = 3N, F<sub>y</sub> = 4N e F<sub>z</sub> = 12N.",
    questionText: "Com base nessas informações, assinale a alternativa que identifica o módulo da força resultante.",
    options: [
      { letter: "A", text: "11 N", isCorrect: false },
      { letter: "B", text: "15 N", isCorrect: false },
      { letter: "C", text: "14 N", isCorrect: false },
      { letter: "D", text: "12 N", isCorrect: false },
      { letter: "E", text: "13 N", isCorrect: true }
    ],
    correctExplanation: `
      <p>A alternativa "13 N" está correta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: |F| = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: |F| = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; |F| = &radic;(9 + 16 + 144) &rarr; |F| = 13N. Portanto o módulo da força resultante é igual a 13 N.</p>
      <p class="final-answer">A resposta correta é: 13 N</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "11 N" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: |F| = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: |F| = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; |F| = &radic;(9 + 16 + 144) &rarr; |F| = 13N. Portanto o módulo da força resultante é igual a 13 N.</p>
      <p>A alternativa "12 N" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: |F| = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: |F| = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; |F| = &radic;(9 + 16 + 144) &rarr; |F| = 13N. Portanto o módulo da força resultante é igual a 13 N.</p>
      <p>A alternativa "14 N" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: |F| = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: |F| = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; |F| = &radic;(9 + 16 + 144) &rarr; |F| = 13N. Portanto o módulo da força resultante é igual a 13 N.</p>
      <p>A alternativa "15 N" está incorreta, pois o módulo da força resultante em um sistema tridimensional é calculado utilizando o teorema de Pitágoras estendido para três dimensões, ou seja: |F| = &radic;(F<sub>x</sub><sup>2</sup> + F<sub>y</sub><sup>2</sup> + F<sub>z</sub><sup>2</sup>). Substituindo os valores fornecidos: |F| = &radic;((3)<sup>2</sup> + (4)<sup>2</sup> + (12)<sup>2</sup>) &rarr; |F| = &radic;(9 + 16 + 144) &rarr; |F| = 13N. Portanto o módulo da força resultante é igual a 13 N.</p>
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "O conceito de trabalho mecânico está presente em diversas situações do cotidiano e da engenharia, como no empurrar de um carrinho, no levantamento de um objeto ou no funcionamento de máquinas. Considere um bloco que se desloca sobre uma superfície horizontal enquanto uma força externa é aplicada perpendicularmente ao seu movimento.",
    questionText: "Com base na situação descrita, é correto identificar que o trabalho realizado por essa força será:",
    options: [
      { letter: "A", text: "negativo, pois a força aplicada está contrária ao sentido do deslocamento.", isCorrect: false },
      { letter: "B", text: "máximo, pois toda a força aplicada contribui para o deslocamento do bloco.", isCorrect: false },
      { letter: "C", text: "igual ao produto da força aplicada pela distância percorrida pelo bloco.", isCorrect: false },
      { letter: "D", text: "nulo, pois a força aplicada não tem componente na direção do deslocamento.", isCorrect: true },
      { letter: "E", text: "mínimo, mas ainda diferente de zero, pois a força aplicada afeta a trajetória do bloco.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "nulo, pois a força aplicada não tem componente na direção do deslocamento." está correta, pois o trabalho realizado por uma força é dado pela equação W = F &sdot; d &sdot; cos&theta;. O ângulo &theta; representa a inclinação da força em relação ao deslocamento. Quando &theta; = 90&deg;, o cosseno do ângulo é igual a zero, o que anula completamente o trabalho realizado pela força. Isso significa que a força aplicada não contribui para o deslocamento, pois está atuando perpendicularmente à direção do movimento.</p>
      <p class="final-answer">A resposta correta é: nulo, pois a força aplicada não tem componente na direção do deslocamento.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "máximo, pois toda a força aplicada contribui para o deslocamento do bloco" está incorreta, pois o trabalho máximo ocorre quando a força está completamente alinhada com o deslocamento, ou seja, quando &theta; = 0&deg;, resultando em W = F &sdot; d.</p>
      <p>A alternativa "mínimo, mas ainda diferente de zero, pois a força aplicada afeta a trajetória do bloco" está incorreta, pois o trabalho mínimo nesse caso é exatamente zero. A força perpendicular ao deslocamento pode influenciar o movimento de outras formas, como alterando a normal exercida pela superfície, mas não realiza trabalho.</p>
      <p>A alternativa "negativo, pois a força aplicada está contrária ao sentido do deslocamento" está incorreta, pois o trabalho negativo ocorre quando a força tem uma componente contrária à direção do deslocamento, o que acontece para ângulos entre 90&deg; e 180&deg;. No caso de uma força perpendicular, não há componente contrária ou favorável ao deslocamento.</p>
      <p>A alternativa "igual ao produto da força aplicada pela distância percorrida pelo bloco" está incorreta, pois a equação do trabalho envolve o fator cos&theta;. Quando &theta; = 90&deg;, esse fator anula o trabalho realizado.</p>
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "Leia o trecho a seguir:<br><br>\"A matriz energética brasileira é predominantemente composta por fontes renováveis, sendo a <strong>[preencher 1]</strong> responsável por aproximadamente 65% da geração elétrica no país. No entanto, durante períodos de estiagem, há a necessidade de recorrer às <strong>[preencher 2]</strong>, que utilizam combustíveis fósseis e apresentam maior custo e impacto ambiental. Nos últimos anos, houve um crescimento significativo no uso da energia <strong>[preencher 3]</strong>, viabilizada por painéis fotovoltaicos instalados tanto em usinas de grande porte quanto em residências e indústrias.\"",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1- térmica; 2- hidrelétricas; 3- nuclear.", isCorrect: false },
      { letter: "B", text: "1- nuclear; 2- eólicas; 3- térmica.", isCorrect: false },
      { letter: "C", text: "1- hidrelétrica; 2- termelétricas; 3- solar.", isCorrect: true },
      { letter: "D", text: "1- termelétrica; 2- solares; 3- eólica.", isCorrect: false },
      { letter: "E", text: "1- eólica; 2- nucleares; 3- biomassa.", isCorrect: false }
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
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "A matriz energética de um país é composta por differentes fontes de energia, cada uma com suas particularidades e impactos. No Brasil, diversas formas de geração elétrica são utilizadas, desde fontes renováveis até não renováveis. O crescimento de tecnologias alternativas vem modificando a participação de cada fonte na matriz elétrica ao longo do tempo.",
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
      { letter: "E", text: "II e III, apenas.", isCorrect: false }
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
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "Ao dirigir um automóvel, a segurança dos passageiros depende diretamente do controle da velocidade e da inércia do veículo. A energia cinética é um dos fatores que determinam a gravidade de um impacto em caso de colisão. Por exemplo, um carro de massa 1000 kg trafegando a 20 m/s tem uma certa quantidade de energia armazenada em seu movimento.",
    questionText: `Com base nessa situação, observe as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia cinética de um corpo é diretamente proporcional à sua massa e ao quadrado de sua velocidade.
    <br>
    <strong>II.</strong> Se a velocidade do carro for dobrada, sua energia cinética também dobrará.
    <br>
    <strong>III.</strong> Se outro veículo de mesma massa estiver em repouso, sua energia cinética será zero.
    <br>
    <strong>IV.</strong> A energia cinética do carro a 20 m/s é menor do que a energia cinética do mesmo carro a 40 m/s.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e IV, apenas.", isCorrect: false },
      { letter: "B", text: "I e III, apenas.", isCorrect: false },
      { letter: "C", text: "I, III e IV, apenas.", isCorrect: true },
      { letter: "D", text: "I, apenas.", isCorrect: false },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a equação da energia cinética é dada por: K = &frac12; mv<sup>2</sup>. Essa equação mostra que a energia cinética (K) de um corpo é diretamente proporcional à sua massa (m) e ao quadrado de sua velocidade (v<sup>2</sup>). Isso significa que, ao aumentar a velocidade de um corpo, sua energia cinética crescerá de maneira quadrática. Da mesma forma, se a massa do corpo for aumentada, sua energia cinética também será proporcionalmente maior.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois se um veículo estiver em repouso, sua velocidade será zero (v = 0). Como a energia cinética é diretamente dependente do quadrado da velocidade, temos: K = &frac12; m(0)<sup>2</sup> = 0. Isso significa que um corpo sem movimento não possui energia cinética, pois essa forma de energia está relacionada à velocidade do objeto. Portanto, a afirmação está correta ao indicar que a energia cinética de um veículo em repouso é zero.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois, segundo a equação da energia cinética K = &frac12; mv<sup>2</sup>, quando a velocidade aumenta, a energia cinética também aumenta. Comparando a energia cinética de um carro a 20 m/s com a energia cinética do mesmo carro a 40 m/s, temos:</p>
      <p style="text-align: center;">K<sub>carro 20 m/s</sub> = &frac12; m(20)<sup>2</sup> = &frac12; m &sdot; 400 = 200m</p>
      <p style="text-align: center;">K<sub>carro 40 m/s</sub> = &frac12; m(40)<sup>2</sup> = &frac12; m &sdot; 1600 = 800m</p>
      <p>Como o carro possui a mesma massa, podemos confirmar que o carro a 40 m/s possui maior energia cinética do que o carro a 20 m/s.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> é incorreta, pois a energia cinética não dobra quando a velocidade é dobrada, mas sim quadruplica. Isso ocorre porque a velocidade está elevada ao quadrado na equação da energia cinética. Se a velocidade inicial for v e dobrarmos essa velocidade para 2v, a nova energia cinética será: K' = &frac12; m(2v)<sup>2</sup> = &frac12; m &sdot; 4v<sup>2</sup> = 4K. Ou seja, a energia cinética se torna quatro vezes maior e não apenas o dobro. Isso mostra que a variação da energia cinética com a velocidade não é linear, mas sim quadrática.</p>
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "Montanhas-russas são exemplos práticos da conservação da energia mecânica em sistemas físicos, onde a energia potencial gravitacional é convertida em energia cinética e vice-versa ao longo do percurso. Suponha que um carrinho de massa m = 500 kg seja liberado do repouso no topo de uma colina de altura h = 40 m em relação ao solo. Considerando que não há dissipação de energia por atrito ou resistência do ar, e que a aceleração da gravidade é g = 9,8 m/s<sup>2</sup>, o carrinho atinge uma segunda colina de altura h'.",
    questionText: `Com base nesses dados, analise as seguintes afirmativas:
    <br><br>
    <strong>I.</strong> A energia mecânica total do sistema se mantém constante ao longo do percurso, sendo a soma da energia cinética e da energia potencial gravitacional.
    <br>
    <strong>II.</strong> A velocidade do carrinho no ponto mais baixo da trajetória, ao nível do solo, será de aproximadamente 28 m/s.
    <br>
    <strong>III.</strong> Se a segunda colina tiver altura h' = 20 m, a velocidade do carrinho no topo dessa colina será de aproximadamente 19,8 m/s.
    <br>
    <strong>IV.</strong> Caso existisse resistência do ar, a energia mecânica total ainda se conservaria, pois a força de arrasto não realiza trabalho sobre o sistema.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I e II, apenas.", isCorrect: false },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I, II, III e IV.", isCorrect: false },
      { letter: "D", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "E", text: "II e IV, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia mecânica total de um sistema é a soma da energia cinética e da energia potencial, conforme a equação: E = K + U. Onde: E = energia mecânica total, K = energia cinética (K = &frac12; mv<sup>2</sup>) e U = energia potencial gravitacional (U = m &sdot; g &sdot; h). Caso um sistema seja conservativo (sem forças dissipativas, como atrito ou resistência do ar), a energia mecânica total se mantém constante.</p>
      <p>A afirmativa <strong>II</strong> está correta, pois a velocidade do carrinho no ponto mais baixo pode ser encontrada a partir da equação de conservação da energia mecânica: E<sub>i</sub> = E<sub>f</sub> &rarr; mgh = &frac12; mv<sup>2</sup>. Cancelando m e substituindo os valores: (9,8)(40) = &frac12; v<sup>2</sup>, isolando e resolvendo para v:</p>
      <p style="text-align: center;">v = &radic;(2 &times; 9,8 &times; 40) &approx; 28 m/s.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois ao subir para a segunda colina de altura h' = 20 m, a energia potencial é recuperada e parte da energia cinética do ponto mais baixo é convertida novamente em energia potencial. A velocidade do carrinho no topo da segunda colina é determinada pela conservação da energia mecânica: mgh = mgh' + &frac12; mv<sup>2</sup>. Cancelando m e substituindo os valores: (9,8)(40) = (9,8)(20) + &frac12; v<sup>2</sup> &rarr; 392 = 196 + &frac12; v<sup>2</sup>. Isolando e resolvendo para v: v = &radic;(2 &times; 196) &approx; 19,8 m/s.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois a presença de resistência do ar implicaria na dissipação de energia mecânica em forma de calor, reduzindo a energia total disponível para a conversão entre energia cinética e potencial. Assim, a energia mecânica não seria mais conservada.</p>
    `
  },
  {
    week: 4,
    subject: "Física do Movimento",
    context: "No dia a dia, a energia potencial gravitacional está presente em diversas situações, como na construção civil, em brinquedos de parques de diversões e até no armazenamento de energia em barragens hidrelétricas. Imagine um operário que trabalha em um canteiro de obras e precisa levantar sacos de cimento do solo até uma plataforma elevada. Esse processo envolve a conversão de trabalho mecânico em energia potencial gravitacional, que depende da altura atingida e da massa do objeto. Suponha que o operário esteja transportando sacos de cimento de 50 kg cada para uma plataforma de 5 metros de altura. A aceleração da gravidade no local pode ser considerada como g = 9,8 m/s<sup>2</sup>.",
    questionText: `Com base nessas informações, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A energia potencial gravitacional adquirida por um saco ao ser elevado até a plataforma é de 2450 J.
    <br>
    <strong>II.</strong> Se a altura da plataforma fosse dobrada para 10 metros, a energia potencial gravitacional do saco também dobraria.
    <br>
    <strong>III.</strong> Caso dois sacos fossem levantados simultaneamente até a plataforma de 5 metros, a energia potencial gravitacional total seria 4900 J.
    <br>
    <strong>IV.</strong> Se a altura inicial fosse considerada como 2 metros em vez de 0 metros, a variação de energia potencial gravitacional ao elevar o saco até a plataforma de 5 metros seria 950 J.
    <br><br>
    Está correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II e III, apenas.", isCorrect: true },
      { letter: "B", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "C", text: "I, II, III e IV.", isCorrect: false },
      { letter: "D", text: "I e II, apenas.", isCorrect: false },
      { letter: "E", text: "II e III, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia potencial gravitacional é calculada pela equação: U = m &sdot; g &sdot; &Delta;y. Substituindo os valores fornecidos no enunciado (m = 50 kg, g = 9,8 m/s<sup>2</sup>, &Delta;y = 5 m):</p>
      <p style="text-align: center;">U = (50 kg) &times; (9,8 m/s<sup>2</sup>) &times; (5 m) = 2450 J.</p>
      <p>Portanto, a energia potencial gravitacional adquirida por um saco ao ser elevado até a plataforma é de 2450 J.</p>
      
      <p>A afirmativa <strong>II</strong> está correta, pois a energia potencial gravitacional é diretamente proporcional à altura. Se a altura for dobrada para 10 metros teríamos: U = 50 &times; 9,8 &times; 10 = 4900 J. Ou seja, dobrar a altura resulta no dobro da energia potencial gravitacional, confirmando a veracidade da afirmativa.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois ao elevar dois sacos de cimento à plataforma de 5 metros, a energia potencial total será o dobro da energia de um único saco. Como já calculado anteriormente, a energia de um único saco é 2450 J, logo: U<sub>total</sub> = 2 &times; 2450 = 4900 J. Portanto, a afirmativa está correta, pois a soma da energia potencial de ambos os sacos resulta no valor apresentado.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois se a altura inicial for alterada para 2 metros, a variação de energia potencial gravitacional ao elevar o saco até 5 metros será dada por: &Delta;U = mg(h<sub>f</sub> - h<sub>i</sub>) = 50 &times; 9,8 &times; (5 - 2) = 1470 J. Portanto, a variação de energia potencial gravitacional ao elevar o saco até a plataforma de 5 metros seria de 1470 J, diferindo do valor apresentado pela afirmativa.</p>
    `
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context: "O conceito de energia potencial é fundamental para descrever sistemas conservativos, nos quais a força pode ser expressa como o gradiente negativo da energia potencial. Esse princípio é amplamente aplicado em diversos campos da física, como mecânica clássica, eletrostática e gravitação. O gradiente de uma função escalar representa a taxa de variação dessa função em cada direção do espaço, sendo crucial para a determinação das forças em sistemas conservativos.<br><br>Considere um sistema onde a energia potencial de uma partícula de massa m é descrita pela função:<br>U(x,y,z) = 5x<sup>3</sup>y - 6y<sup>2</sup>z + 4xz<sup>2</sup>",
    questionText: `Com base nessa equação e nos conceitos de gradiente e forças conservativas, analise as afirmativas abaixo:
    <br><br>
    <strong>I.</strong> A componente da força na direção x, calculada em P = (2, 1, -3) é 76 N.
    <br>
    <strong>II.</strong> A componente da força na direção y, calculada em P = (2, 1, -3) é -76 N.
    <br>
    <strong>III.</strong> A componente da força na direção z, calculada em P = (2, 1, -3) é 54 N.
    <br>
    <strong>IV.</strong> O módulo da força resultante na posição P = (2, 1, -3) é aproximadamente 133,8 N.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "II, III e IV, apenas.", isCorrect: true },
      { letter: "B", text: "I e III, apenas.", isCorrect: false },
      { letter: "C", text: "II e IV, apenas.", isCorrect: false },
      { letter: "D", text: "I, II, III e IV.", isCorrect: false },
      { letter: "E", text: "I, III e IV, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>II</strong> está correta, pois a força é dada pelo gradiente negativo da energia potencial: F = -&nabla;U. Derivamos U(x,y,z) em relação a y para descobrir a componente da força na direção y:</p>
      <p style="text-align: center;">F<sub>y</sub> = -&part;U / &part;y = -(5x<sup>3</sup> - 12yz)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>y</sub>. Substituindo x = 2, y = 1, z = -3:</p>
      <p style="text-align: center;">F<sub>y</sub> = -(5(8) + 36) = -(40 + 36) = -76 N</p>
      <p>Portanto, o valor da componente da força na direção y, calculada em P é -76 N.</p>

      <p>A afirmativa <strong>III</strong> está correta, pois derivamos U(x,y,z) em relação a z para descobrir a componente da força na direção z:</p>
      <p style="text-align: center;">F<sub>z</sub> = -&part;U / &part;z = -(-6y<sup>2</sup> + 8xz)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>z</sub>. Substituindo x = 2, y = 1, z = -3:</p>
      <p style="text-align: center;">F<sub>z</sub> = -(-6(1)<sup>2</sup> + 8(2)(-3)) = -(-6 - 48) = 54 N</p>
      <p>Portanto, o valor da componente da força na direção z, calculada em P é 54 N.</p>

      <p>A afirmativa <strong>IV</strong> está correta, pois fazemos a soma quadrática das componentes da força F para encontrar o módulo da força resultante no ponto P:</p>
      <p style="text-align: center;">|F| = &radic;((-96)<sup>2</sup> + (-76)<sup>2</sup> + (54)<sup>2</sup>) = &radic;(9216 + 5776 + 2916)</p>
      <p style="text-align: center;">Resultando em: |F| = &radic;17908 &approx; 133,8 N</p>
      <p class="final-answer">A resposta correta é: II, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>I</strong> está incorreta, pois derivamos U(x,y,z) em relação a x para descobrir a componente da força na direção x:</p>
      <p style="text-align: center;">F<sub>x</sub> = -&part;U / &part;x = -(15x<sup>2</sup>y + 4z<sup>2</sup>)</p>
      <p>Para calcular o valor da componente no ponto P, substituímos o valor de P nas coordenadas de F<sub>x</sub>. Substituindo x = 2, y = 1, z = -3:</p>
      <p style="text-align: center;">F<sub>x</sub> = -(15(2)<sup>2</sup>(1) + 4(-3)<sup>2</sup>) = -(15(4) + 4(9)) = -(60 + 36) = -96 N</p>
      <p>Portanto, o valor da componente da força na direção x, calculada em P, é de -96 N, e não 76 N.</p>
    `
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context: "Um vagão de carga de massa m<sub>1</sub> = 4000 kg se move sobre trilhos horizontais com velocidade de 5,0 m/s. À frente, um segundo vagão de massa m<sub>2</sub> = 6000 kg está parado. Os dois vagões colidem e se acoplam, movendo-se juntos após a colisão. Após a colisão, os vagões permanecem unidos e se movem com uma nova velocidade v<sub>f</sub>, que pode ser determinada pela conservação da quantidade de movimento.",
    questionText: "Com base nessas informações, assinale a alternativa que apresenta a velocidade final dos vagões acoplados após a colisão.",
    options: [
      { letter: "A", text: "2,5 m/s", isCorrect: false },
      { letter: "B", text: "3,0 m/s", isCorrect: false },
      { letter: "C", text: "2,0 m/s", isCorrect: true },
      { letter: "D", text: "1,5 m/s", isCorrect: false },
      { letter: "E", text: "3,5 m/s", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "2,0 m/s" está correta, pois como a colisão é perfeitamente inelástica, os dois vagões se movem juntos após a colisão. Conseguimos aplicar a fórmula da velocidade final de ambos os corpos para essa colisão:</p>
      <p style="text-align: center;">v<sub>f</sub> = (m<sub>1</sub> / (m<sub>1</sub> + m<sub>2</sub>)) &sdot; v<sub>1</sub></p>
      <p>Substituindo os valores de massa de cada vagão e a velocidade do vagão 1 na fórmula, obtemos:</p>
      <p style="text-align: center;">v<sub>f</sub> = (4000 / (4000 + 6000)) &sdot; 5 = 2,0 m/s</p>
      <p>Portanto, a velocidade final dos vagões acoplados após a colisão é 2,0 m/s.</p>
      <p class="final-answer">A resposta correta é: 2,0 m/s</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "1,5 m/s" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 kg, 6000 kg e 5,0 m/s, o resultado exato é 2,0 m/s.</p>
      <p>A alternativa "2,5 m/s" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 kg, 6000 kg e 5,0 m/s, o resultado exato é 2,0 m/s.</p>
      <p>A alternativa "3,0 m/s" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 kg, 6000 kg e 5,0 m/s, o resultado exato é 2,0 m/s.</p>
      <p>A alternativa "3,5 m/s" está incorreta, pois ao aplicar a conservação da quantidade de movimento (m<sub>1</sub>v<sub>1</sub> = (m<sub>1</sub> + m<sub>2</sub>)v<sub>f</sub>) com os valores de 4000 kg, 6000 kg e 5,0 m/s, o resultado exato é 2,0 m/s.</p>
    `
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context: "Os sistemas de partículas são amplamente estudados na mecânica para compreender o comportamento de corpos interagindo sob differentes forças. O oscilador harmônico simples é um exemplo clássico que descreve o movimento periódico de uma partícula presa a uma mola. Esse tipo de movimento ocorre quando uma força restauradora age sobre a partícula, direcionando-a sempre para a posição de equilíbrio. Durante a oscilação, a energia do sistema se alterna entre energia cinética e energia potencial, assumindo que o sistema seja ideal. Além disso, as grandezas envolvidas no movimento, como deslocamento, velocidade e aceleração, variam de maneira periódica ao longo do tempo.",
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
      { letter: "E", text: "I e II, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a energia mecânica total de um oscilador harmônico ideal é conservada ao longo do tempo, assumindo que não há forças dissipativas, como atrito ou resistência do ar. A energia mecânica total é dada por: E = &frac12; kA<sup>2</sup>. Onde k é a constante elástica da mola e A é a amplitude da oscilação. Como essa equação não depende da posição da partícula x, a energia total se mantém constante durante todo o movimento.</p>
      <p>A afirmativa <strong>III</strong> está correta, pois o período de oscilação de um oscilador harmônico simples depende apenas da massa m da partícula e da constante elástica k da mola, conforme a equação: T = 2&pi;&radic;(m / k). Essa equação mostra que o período não depende da amplitude A, confirmando que a afirmativa é verdadeira.</p>
      <p>A afirmativa <strong>IV</strong> está correta, pois no ponto de maior deslocamento x = &plusmn;A, a partícula está momentaneamente em repouso, ou seja, sua velocidade é zero e, consequentemente, sua energia cinética é nula. Nesse instante, toda a energia do sistema está armazenada como energia potencial, dada por: U = &frac12; kx<sup>2</sup>. Substituindo x = A, obtemos U = &frac12; kA<sup>2</sup>, que corresponde ao valor máximo da energia potencial no sistema.</p>
      <p class="final-answer">A resposta correta é: I, III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>II</strong> está incorreta, pois a aceleração no oscilador harmônico é proporcional ao deslocamento, mas tem sentido oposto a ele. Isso significa que, se a partícula está deslocada para a direita em relação à posição de equilíbrio, a aceleração aponta para a esquerda, e vice-versa. A equação que rege a aceleração é: a = -&omega;<sup>2</sup>x. Onde &omega; = &radic;(k / m) é a frequência angular da oscilação. O sinal negativo indica que a aceleração sempre aponta para a posição de equilíbrio.</p>
    `
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context: "O estudo da energia potencial é fundamental na análise de sistemas conservativos, como oscilações mecânicas, interações eletrostáticas e sistemas gravitacionais. A relação entre energia potencial e força permite determinar a dinâmica de uma partícula sem a necessidade de medições diretas de aceleração ou força externa. Considere uma partícula de massa 2,5 kg sujeita a um campo de energia potencial descrito pela função: U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x. Onde U(x) está em joules e x está em metros.",
    questionText: "Com base no apresentado e considerando que a partícula está na posição x = 4 m, assinale a alternativa que aplica o módulo da força atuante sobre ela nesse instante.",
    options: [
      { letter: "A", text: "86 N", isCorrect: false },
      { letter: "B", text: "150 N", isCorrect: false },
      { letter: "C", text: "106 N", isCorrect: true },
      { letter: "D", text: "62 N", isCorrect: false },
      { letter: "E", text: "274 N", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "106 N" está correta, pois a força conservativa que atua sobre a partícula pode ser determinada a partir da derivada da energia potencial em relação à posição: F(x) = -dU / dx. Derivando a função fornecida no enunciado:</p>
      <p style="text-align: center;">F(x) = - d/dx (3x<sup>3</sup> - 5x<sup>2</sup> + 2x) = -(9x<sup>2</sup> - 10x + 2)</p>
      <p>Agora, substituímos x = 4 m:</p>
      <p style="text-align: center;">F(4) = -(9(4)<sup>2</sup> - 10(4) + 2) = -(144 - 40 + 2) = -106</p>
      <p>O sinal negativo indica que a força age na direção oposta ao aumento de x, mas como o enunciado pede o módulo da força, temos: |F| = 106 N.</p>
      <p class="final-answer">A resposta correta é: 106 N</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa "150 N" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição x = 4 m, o valor modular correto é 106 N.</p>
      <p>A alternativa "62 N" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição x = 4 m, o valor modular correto é 106 N.</p>
      <p>A alternativa "274 N" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição x = 4 m, o valor modular correto é 106 N.</p>
      <p>A alternativa "86 N" está incorreta, pois a força conservativa deve ser calculada pela derivada negativa da função potencial. Com a função U(x) = 3x<sup>3</sup> - 5x<sup>2</sup> + 2x e a posição x = 4 m, o valor modular correto é 106 N.</p>
    `
  },
  {
    week: 5,
    subject: "Física do Movimento",
    context: "Leia o trecho a seguir:<br><br>O centro de massa é o ponto onde a massa total de um sistema de partículas pode ser considerada concentrada, fundamental para análise de movimento e equilíbrio. É um ponto que se move como se toda a <strong>[preencher 1]</strong> do sistema estivesse concentrada nele e todas as <strong>[preencher 2]</strong> atuassem sobre esse ponto. Sua posição é determinada pela média ponderada das posições das partículas que compõem o sistema, levando em consideração suas respectivas <strong>[preencher 3]</strong>.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1- massa; 2- forças externas; 3- massas", isCorrect: true },
      { letter: "B", text: "1- força resultante; 2- forças internas; 3- velocidades", isCorrect: false },
      { letter: "C", text: "1- velocidade; 2- acelerações; 3- cargas elétricas", isCorrect: false },
      { letter: "D", text: "1- quantidade de movimento; 2- pressões; 3- distribuições de volume", isCorrect: false },
      { letter: "E", text: "1- energia; 2- deslocamentos; 3- forças gravitacionais", isCorrect: false }
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
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Uma bancada de madeira possui três pernas de L = 1,20 m de comprimento e uma quarta perna com um comprimento adicional de d = 0,40 cm o que a torna instável inicialmente. Um bloco metálico de M = 320 kg é colocado sobre a bancada, comprimindo suas quatro pernas e tornando a estrutura nivelada. As pernas da bancada são cilindros ocos de aço com área de seção reta de A = 2,5 cm<sup>2</sup> e módulo de Young E = 2,0 &times; 10<sup>10</sup> N/m<sup>2</sup>.<br>Sabendo que a força gravitacional atuante no bloco é g = 9,8 m/s<sup>2</sup>, analise as afirmativas a seguir:",
    questionText: `<strong>I.</strong> A deformação elástica na perna mais longa é maior do que nas demais, pois ela inicialmente não está em contato com o solo.
    <br>
    <strong>II.</strong> A força exercida pelo solo sobre cada uma das três pernas de mesmo tamanho pode ser expressa por F<sub>3</sub> = Mg/4 - dAE/4L.
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
      { letter: "E", text: "I, II, III e IV.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a deformação elástica &Delta;L de um material está diretamente relacionada à força aplicada, ao comprimento inicial da estrutura, à área da seção reta e ao módulo de Young, conforme a equação: &Delta;L = FL/AE. A quarta perna da bancada tem um comprimento inicial maior do que as outras por um valor d = 0,40 cm. Isso significa que, antes da aplicação do peso do bloco metálico, ela não estava completamente em contato com o solo. À medida que o bloco é colocado sobre a bancada, a força sobre as pernas comprime todas elas, e a quarta perna precisa sofrer uma deformação adicional d para que a mesa fique nivelada. Como a deformação elástica é proporcional à força aplicada, isso comprova que: &Delta;L<sub>4</sub> = &Delta;L<sub>3</sub> + d. Ou seja, a quarta perna sofre uma deformação maior do que as outras três, validando a afirmativa.</p>
      
      <p>A afirmativa <strong>II</strong> está correta. Para encontrar a força exercida pelo solo sobre as três pernas de mesmo tamanho (F<sub>3</sub>), utilizamos a equação da equivalência de deformação para nivelar a mesa:</p>
      <p style="text-align: center;">F<sub>4</sub>L / AE = F<sub>3</sub>L / AE + d</p>
      <p>Cancelando os termos comuns e isolando F<sub>4</sub>, obtemos: F<sub>4</sub> = F<sub>3</sub> + dAE / L</p>
      <p>Sabemos que a soma das forças verticais deve ser igual ao peso total do bloco para garantir o equilíbrio da bancada: 3F<sub>3</sub> + F<sub>4</sub> = Mg. Substituindo F<sub>4</sub> na equação:</p>
      <p style="text-align: center;">3F<sub>3</sub> + (F<sub>3</sub> + dAE / L) = Mg &rarr; 4F<sub>3</sub> = Mg - dAE / L</p>
      <p>Isolando F<sub>3</sub>, F<sub>3</sub> = Mg / 4 - dAE / 4L. A equação coincide exatamente com a fornecida na afirmativa, provando sua correção.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois verificamos a força que a quarta perna exerce sobre o solo (F<sub>4</sub>), a partir da equação de equilíbrio F<sub>4</sub> = Mg - 3F<sub>3</sub>. Substituímos F<sub>3</sub> obtido anteriormente:</p>
      <p style="text-align: center;">F<sub>4</sub> = Mg - 3(Mg / 4 - dAE / 4L)</p>
      <p>Distribuindo os termos:</p>
      <p style="text-align: center;">F<sub>4</sub> = Mg - 3Mg / 4 + 3dAE / 4L = (4Mg - 3Mg) / 4 + 3dAE / 4L = Mg / 4 + 3dAE / 4L</p>
      <p>Como Mg é o peso total do bloco e a deformação da quarta perna exige um aumento da força para compensar d, concluímos que F<sub>4</sub> > F<sub>3</sub>, isso confirma que a quarta perna suporta uma força maior do que as outras três, validando a afirmativa.</p>
      <p class="final-answer">A resposta correta é: I, II e III, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>IV</strong> está incorreta, pois se o valor de d fosse maior, a deformação necessária da quarta perna seria ainda maior, e, para garantir que a mesa permanecesse nivelada, a força sobre essa perna também aumentaria. Da equação F<sub>4</sub> = Mg / 4 + 3dAE / 4L, percebe-se que um aumento em d aumentaria o termo adicional, resultando em uma força F<sub>4</sub> maior e não menor. Portanto, a afirmativa <strong>IV</strong> está errada.</p>
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Uma barra rígida e homogênea de comprimento L = 2,0 m e massa M = 3,0 kg está apoiada em dois pontos, um em cada extremidade, onde estão posicionadas balanças para medir as forças de reação. A barra permanece em equilíbrio horizontal. Sobre a barra, é colocado um bloco de massa m = 5,0 kg a uma distância de L / 4 do apoio da esquerda.<br><br>Considerando a aceleração da gravidade g = 9,8 m/s<sup>2</sup> e desprezando a massa das balanças e qualquer outra força externa, assinale a alternativa que aplica os valores de força indicados pela balança esquerda (F<sub>e</sub>) e direita (F<sub>d</sub>).",
    questionText: "Assinale a alternativa correta:",
    options: [
      { letter: "A", text: "F<sub>e</sub> = 20,5 N e F<sub>d</sub> = 43,1 N", isCorrect: false },
      { letter: "B", text: "F<sub>e</sub> = 40,2 N e F<sub>d</sub> = 21,5 N", isCorrect: false },
      { letter: "C", text: "F<sub>e</sub> = 25,6 N e F<sub>d</sub> = 37,2 N", isCorrect: false },
      { letter: "D", text: "F<sub>e</sub> = 30,3 N e F<sub>d</sub> = 32,5 N", isCorrect: false },
      { letter: "E", text: "F<sub>e</sub> = 35,8 N e F<sub>d</sub> = 27,0 N", isCorrect: true }
    ],
    correctExplanation: `
      <p>A alternativa "F<sub>e</sub> = 35,8 N e F<sub>d</sub> = 27,0 N" está correta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 N</p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero:</p>
      <p style="text-align: center;">F<sub>d</sub> &sdot; L = Mg &sdot; L/2 + mg &sdot; L/4</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9</p>
      <p>Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 N. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 N.</p>
      <p class="final-answer">A resposta correta é: F<sub>e</sub> = 35,8 N e F<sub>d</sub> = 27,0 N</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>- A alternativa “F<sub>e</sub> = 30,3 N e F<sub>d</sub> = 32,5 N” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 N</p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; L = Mg &sdot; L/2 + mg &sdot; L/4. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 N. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 N.</p>

      <p>- A alternativa “F<sub>e</sub> = 25,6 N e F<sub>d</sub> = 37,2 N” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 N</p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; L = Mg &sdot; L/2 + mg &sdot; L/4. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 N. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 N.</p>

      <p>- A alternativa “F<sub>e</sub> = 40,2 N e F<sub>d</sub> = 21,5 N” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 N</p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; L = Mg &sdot; L/2 + mg &sdot; L/4. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 N. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 N.</p>

      <p>- A alternativa “F<sub>e</sub> = 20,5 N e F<sub>d</sub> = 43,1 N” está incorreta, pois ao realizar as operações matemáticas seguindo as regras da estática e do equilíbrio de corpos rígidos, obtemos o seguinte processo de cálculo. Primeiro, aplicamos a condição de equilíbrio das forças na direção vertical:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (M + m)g</p>
      <p>Substituindo os valores:</p>
      <p style="text-align: center;">F<sub>e</sub> + F<sub>d</sub> = (3,0 + 5,0) &times; 9,8 = 8,0 &times; 9,8 = 78,4 N</p>
      <p>Agora, aplicamos a condição de equilíbrio de momentos em relação ao apoio esquerdo (F<sub>e</sub>), garantindo que a soma dos momentos em torno desse ponto seja zero: F<sub>d</sub> &sdot; L = Mg &sdot; L/2 + mg &sdot; L/4. Substituindo os valores: F<sub>d</sub> &times; 2,0 = (3,0 &times; 9,8) &times; 1,0 + (5,0 &times; 9,8) &times; 0,5 &rarr; F<sub>d</sub> &times; 2,0 = 53,9. Resolvendo para F<sub>d</sub>: F<sub>d</sub> &approx; 27,0 N. Finalmente, substituindo na primeira equação, calculamos F<sub>e</sub>: F<sub>e</sub> = 78,4 - 27,0 = 35,8 N.</p>
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Na engenharia estrutural, a análise das deformações e tensões é essencial para garantir a segurança de construções e componentes mecânicos. Quando um material é submetido a uma força externa, ele sofre uma deformação proporcional à tensão aplicada, de acordo com a lei de Hooke. Considere um fio de aço de comprimento inicial l<sub>0</sub> = 2,5 m e seção reta A = 3,0 mm<sup>2</sup>, submetido a uma força de tração F = 1800 N. O módulo de Young do aço é Y<sub>aço</sub> = 2,0 &times; 10<sup>11</sup> N/m<sup>2</sup>.",
    questionText: `Com base nesses dados e considerando que o módulo de Young do cobre é de Y = 1,1 &times; 10<sup>11</sup> N/m<sup>2</sup>, analise as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A tensão no fio é 1,0 &times; 10<sup>9</sup> N/m<sup>2</sup>.
    <br>
    <strong>II.</strong> A deformação do fio é 300 &times; 10<sup>-3</sup>.
    <br>
    <strong>III.</strong> A variação de comprimento do fio devido à força aplicada é 7,5 mm.
    <br>
    <strong>IV.</strong> Se a mesma força fosse aplicada a um fio de cobre de mesmo comprimento e área de seção reta, a deformação seria maior.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "I, II, III e IV.", isCorrect: false },
      { letter: "B", text: "I e II, apenas.", isCorrect: false },
      { letter: "C", text: "I, II e III, apenas.", isCorrect: false },
      { letter: "D", text: "I, III e IV, apenas.", isCorrect: false },
      { letter: "E", text: "III e IV, apenas.", isCorrect: true }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>III</strong> está correta, pois a variação de comprimento do fio pode ser determinada pela equação:</p>
      <p style="text-align: center;">&Delta;l = (F &sdot; l<sub>0</sub>) / (Y &sdot; A)</p>
      <p>Substituindo os valores do problema:</p>
      <p style="text-align: center;">&Delta;l = (1800 &sdot; 2,5) / ( (2,0 &times; 10<sup>11</sup>) &sdot; (3,0 &times; 10<sup>-6</sup>) ) = 4500 / (6,0 &times; 10<sup>5</sup>) = 7,5 &times; 10<sup>-3</sup> m</p>
      <p>Portanto, a variação de comprimento do fio devido à força aplicada é 7,5 mm, confirmando a afirmativa <strong>III</strong>.</p>
      
      <p>A afirmativa <strong>IV</strong> está correta, pois a deformação em um material depende do seu módulo de Young (Y). Se aplicarmos a mesma força em um fio de cobre com mesmas dimensões, mas com um módulo de Young menor (Y<sub>cobre</sub> = 1,1 &times; 10<sup>11</sup> N/m<sup>2</sup>), a deformação resultante será maior. Sabemos que a deformação é dada por: &epsilon; = &sigma; / Y. Como Y<sub>cobre</sub> < Y<sub>aço</sub>, então &epsilon;<sub>cobre</sub> > &epsilon;<sub>aço</sub>, indicando que o fio de cobre se deformaria mais sob a mesma força aplicada. Isso confirma que a afirmativa <strong>IV</strong> está correta.</p>
      <p class="final-answer">A resposta correta é: III e IV, apenas.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A afirmativa <strong>I</strong> está incorreta, pois a tensão no fio pode ser determinada pela equação da tensão mecânica: &sigma; = F / A. Substituindo os valores fornecidos no problema: &sigma; = 1800 / (3,0 &times; 10<sup>-6</sup>) = 6,0 &times; 10<sup>8</sup> N/m<sup>2</sup>. Esse resultado confirma que a tensão no fio é 6,0 &times; 10<sup>8</sup> N/m<sup>2</sup> diferindo do valor apresentado na afirmativa.</p>
      <p>A afirmativa <strong>II</strong> está incorreta, pois a deformação do fio pode ser determinada utilizando a relação entre tensão e o módulo de elasticidade: &epsilon; = &sigma; / Y. Substituindo os valores: &epsilon; = (6,0 &times; 10<sup>8</sup>) / (2,0 &times; 10<sup>11</sup>) = 3,0 &times; 10<sup>-3</sup>. Portanto, a deformação do fio é 3,0 &times; 10<sup>-3</sup>, valor que difere do apresentado na afirmativa.</p>
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Leia o trecho a seguir:<br><br>A posição do centro de gravidade de um corpo é um fator determinante para sua estabilidade e equilíbrio. Em corpos simétricos, como esferas, cubos e placas homogêneas, o centro de gravidade coincide com <strong>[preencher 1]</strong>, facilitando sua determinação. Para corpos mais complexos, pode-se estimar sua posição aproximando a estrutura por pequenas partes <strong>[preencher 2]</strong>, aplicando métodos matemáticos adequados para sua localização. Além disso, a estabilidade de um corpo depende diretamente da posição do seu centro de gravidade: quando ele está <strong>[preencher 3]</strong>, há uma menor probabilidade de tombamento, pois o torque gerado por forças externas é reduzido. Essa relação é observada em veículos, edifícios e até mesmo em animais, onde um centro de gravidade mais próximo do solo favorece o equilíbrio e a mobilidade segura.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      { letter: "A", text: "1 - sua borda externa; 2 - homogêneas; 3 - instável", isCorrect: false },
      { letter: "B", text: "1 - seu eixo de rotação; 2 - elásticas; 3 - elevado", isCorrect: false },
      { letter: "C", text: "1 - seu centro geométrico; 2 - simétricas; 3 - baixo", isCorrect: true },
      { letter: "D", text: "1 - sua superfície de contato; 2 - aleatórias; 3 - alto", isCorrect: false },
      { letter: "E", text: "1 - seu ponto de suspensão; 2 - irregulares; 3 - disperso", isCorrect: false }
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
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "No estudo da biomecânica do corpo humano, considera-se que o equilíbrio estático é fundamental para entender o funcionamento das articulações e dos músculos. No caso do levantamento de um objeto, forças são distribuídas entre os músculos e articulações para manter a estabilidade do movimento.<br><br>Suponha que um atleta segure um halter de peso igual a 60 N em sua mão, mantendo o antebraço na posição horizontal. O músculo bíceps exerce uma força F<sub>b</sub> para cima a uma distância de 4,00 cm da articulação do cotovelo, enquanto o peso do halter atua a 40,0 cm da articulação. Despreze o peso do antebraço e considere que o sistema está em equilíbrio.",
    questionText: `Com base nesses dados, observe as afirmativas a seguir:
    <br><br>
    <strong>I.</strong> A força exercida pelo bíceps é de aproximadamente 600 N.
    <br>
    <strong>II.</strong> O torque gerado pelo bíceps é igual ao torque gerado pelo peso segurado.
    <br>
    <strong>III.</strong> A força que a articulação do cotovelo exerce para baixo é de aproximadamente 660 N.
    <br><br>
    É correto o que se afirma em:`,
    options: [
      { letter: "A", text: "III, apenas.", isCorrect: false },
      { letter: "B", text: "I, apenas.", isCorrect: false },
      { letter: "C", text: "I e II, apenas.", isCorrect: false },
      { letter: "D", text: "I, II e III.", isCorrect: true },
      { letter: "E", text: "II e III, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> está correta, pois a força exercida pelo bíceps pode ser determinada aplicando a equação do torque no equilíbrio estático: &tau;<sub>b</sub> = &tau;<sub>p</sub>. Sabemos que o torque é dado por: F<sub>b</sub> &sdot; d = P &sdot; l. Substituindo os valores fornecidos no problema: F<sub>b</sub> &sdot; 0,04 = 60 &sdot; 0,40. Isolando F<sub>b</sub>, temos: F<sub>b</sub> = (60 &times; 0,40) / 0,04 = 600 N. Esse resultado confirma que a força exercida pelo bíceps é de 600 N.</p>
      
      <p>A afirmativa <strong>II</strong> está correta, pois, no equilíbrio estático, o torque gerado pelo bíceps deve ser igual ao torque gerado pelo peso segurado, garantindo que o antebraço permaneça na posição horizontal. Isso pode ser demonstrado matematicamente substituindo os valores: F<sub>b</sub> &sdot; d = P &sdot; l &rarr; 600 &times; 0,04 = 60 &times; 0,40. Onde temos como resultado: 24 = 24. Portanto, os torques exercidos pelo bíceps e pelo peso segurado são iguais, validando a afirmativa.</p>
      
      <p>A afirmativa <strong>III</strong> está correta, pois a força exercida pela articulação do cotovelo pode ser determinada considerando o equilíbrio das forças verticais no sistema. Como o antebraço não se move, a soma das forças para cima deve ser igual à soma das forças para baixo: F<sub>a</sub> = F<sub>b</sub> + P. Substituindo os valores: F<sub>a</sub> = 600 + 60 = 660 N. Esse resultado confirma que a força exercida pela articulação do cotovelo é de 660 N.</p>
      <p class="final-answer">A resposta correta é: I, II e III.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>Nesta questão, as afirmativas <strong>I</strong>, <strong>II</strong> e <strong>III</strong> estão todas corretas conforme as leis do equilíbrio estático e torque aplicadas à biomecânica, tornando a alternativa D a única escolha válida.</p>
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Os materiais respondem de maneiras distintas às forças aplicadas, gerando differentes tipos de deformação. A elasticidade descreve a capacidade de um material recuperar sua forma original após a remoção da força deformadora. O comportamento elástico dos materiais pode ser caracterizado por grandezas como a tensão, a deformação e o módulo de Young, sendo que cada uma delas está associada a differentes tipos de esforços mecânicos.<br><br>Com base na teoria da elasticidade e nos conceitos de tensão e deformação apresentados, associe os tipos de tensão às suas características correspondentes. Considere que nem todos os itens das colunas possuem associação ou podem possuir mais de uma correlação.",
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
      { letter: "A", text: "I-C; II-D; III-A; IV-B.", isCorrect: true },
      { letter: "B", text: "I-C; II-B; III-D; IV-A.", isCorrect: false },
      { letter: "C", text: "I-A; II-B; III-C; IV-D.", isCorrect: false },
      { letter: "D", text: "I-B; II-A; III-D; IV-C.", isCorrect: false },
      { letter: "E", text: "I-D; II-C; III-B; IV-A.", isCorrect: false }
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
    `
  },
  {
    week: 6,
    subject: "Física do Movimento",
    context: "Em uma indústria de construção metálica, uma barra de alumínio de 2,5 m de comprimento e seção transversal de 5 cm<sup>2</sup> é utilizada como suporte estrutural em uma máquina. Durante a operação, essa barra é submetida a uma força axial de 10.000 N, aplicada ao longo de seu eixo. O material da barra, o alumínio, possui propriedades mecânicas bem definidas, incluindo um módulo de elasticidade de 70 &times; 10<sup>9</sup> N/m<sup>2</sup>, conforme tabelas técnicas. Como a estrutura exige precisão nos deslocamentos das peças, os engenheiros responsáveis pelo projeto precisam calcular com exatidão a deformação sofrida pela barra devido à aplicação da força. <br><br>Considerando que o material permanece dentro da região de comportamento elástico, assinale a alternativa que recorda o assunto sobre o alongamento sofrido pela barra.",
    questionText: "Assinale a alternativa correta:",
    options: [
      { letter: "A", text: "0,36 mm", isCorrect: false },
      { letter: "B", text: "0,50 mm", isCorrect: false },
      { letter: "C", text: "0,71 mm", isCorrect: true },
      { letter: "D", text: "0,64 mm", isCorrect: false },
      { letter: "E", text: "0,18 mm", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa "0,71 mm" está correta, pois representa o alongamento real da barra de alumínio ao ser submetida à força especificada, considerando suas propriedades mecânicas. O cálculo do alongamento &Delta;L pode ser obtido a partir da equação do módulo de Young, que relaciona tensão e deformação em materiais na região elástica. Utilizando os valores fornecidos no enunciado na equação:</p>
      <p style="text-align: center;">&Delta;L = (F &sdot; L) / (A &sdot; E)</p>
      <p>Substituindo os dados:</p>
      <p style="text-align: center;">&Delta;L = (10.000) &sdot; (2,5) / ( (5 &times; 10<sup>-4</sup>) &sdot; (70 &times; 10<sup>9</sup>) ) = 25.000 / (3,5 &times; 10<sup>7</sup>) = 0,00071 m = 0,71 mm</p>
      <p>Portanto, o alongamento correto da barra é 0,71 mm.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>- As demais alternativas estão incorretas, pois representam valores que divergem do alongamento real da barra de alumínio ao ser submetida à força especificada. O cálculo do alongamento &Delta;L, conforme demonstrado, resulta exatamente em 0,71 mm:</p>
      <p style="text-align: center;">&Delta;L = (F &sdot; L) / (A &sdot; E) = (10.000) &sdot; (2,5) / ( (5 &times; 10<sup>-4</sup>) &sdot; (70 &times; 10<sup>9</sup>) ) = 25.000 / (3,5 &times; 10<sup>7</sup>) = 0,00071 m = 0,71 mm</p>
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Para o devido tratamento em sistemas digitais, as informações podem ser codificadas em bits. Por exemplo, ao transmitir os dados de um computador para uma impressora ou ao ler os dados de um teclado, estas informações são tratadas como um conjunto de bits. Quando tratado em circuitos eletrônicos, os bits podem ser representados, por exemplo, por níveis de tensão que conforme faixa de valores representam o bit 0, o bit 1 ou um valor inválido.<br><br>Observe a seguinte situação hipotética: Um determinado sistema precisou representar a seguinte sequência de bits <strong>01011100</strong> usando níveis de tensão.",
    questionText: "Seguindo os padrões estudados, assinale a alternativa que reconhece os níveis de tensão (em volts) que equivalem a este conjunto de bits.",
    options: [
      { letter: "A", text: "0,4 - 1,8 - 0,3 - 4,7 - 1,8 - 4,2 - 0,3 - 0,9", isCorrect: false },
      { letter: "B", text: "0,4 - 1,5 - 0,3 - 1,7 - 1,5 - 1,6 - 0,3 - 0,4", isCorrect: false },
      { letter: "C", text: "0,4 - 4,5 - 4,7 - 0,3 - 3,8 - 4,2 - 0,3 - 0,7", isCorrect: false },
      { letter: "D", text: "0,2 - 1,5 - 0,2 - 1,5 - 1,5 - 1,5 - 0,2 - 0,2", isCorrect: false },
      { letter: "E", text: "0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7", isCorrect: true }
    ],
    correctExplanation: `
      <p>A alternativa <strong>"0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7"</strong> está correta pois para os bits 0 da sequência os valores de tensão estão conforme o padrão estudado, entre 0 e 0,8V. Para os bits 1, os valores estão entre 2,0 e 5,0V que são os padrões para cada um dos bits. Observe que para o primeiro, terceiro, sétimo e oitavo bits da sequência 01011100, todos bits 0, os valores de tensão foram respectivamente 0,4 - 0,3 - 0,3 e 0,7, abaixo de 0,8V. Já para o segundo, quarto, quinto e sexto bits os valores de tensão foram respectivamente 4,5 - 4,7 - 3,8 e 4,2, dentro da faixa entre 2 e 5V equivalente ao padrão de bit 1.</p>
      <p class="final-answer">A resposta correta é: 0,4 - 4,5 - 0,3 - 4,7 - 3,8 - 4,2 - 0,3 - 0,7</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"0,4 - 4,5 - 4,7 - 0,3 - 3,8 - 4,2 - 0,3 - 0,7"</strong> está incorreta pois observando a sequência do enunciado 01011100 o terceiro e quarto valores de tensão estão trocados com valores equivalentes a 1 e 0 respectivamente e não a 0 e 1. Essa sequência seria 01101100 em vez da sequência do enunciado 01011100. Desconsiderando esta inversão do terceiro e quarto bits, levando em consideração apenas os níveis de tensão para bits 1 e 0, todos os valores de tensão estão dentro das faixas que representam os bits 0 e 1, não existem valores de tensão inválidos para representar os bits.</p>
      <p>A alternativa <strong>"0,2 - 1,5 - 0,2 - 1,5 - 1,5 - 1,5 - 0,2 - 0,2"</strong> está incorreta pois os valores de tensão 1,5, a princípio equivalente aos bits 1 da sequência, não estão na faixa válida entre 2,0 e 5,0V. Quando fora das faixas válidas dos bits 0 e 1, a informação é considerada inválida e desta forma não refletiria a sequência do enunciado 01011100.</p>
      <p>A alternativa <strong>"0,4 - 1,5 - 0,3 - 1,7 - 1,5 - 1,6 - 0,3 - 0,4"</strong> está incorreta pois os bits, a princípio equivalentes aos bits 1, estão em faixa de valores de tensão inválida. Por exemplo, o segundo e quarto valores de tensão, 1,5 e 1,7V não estão na faixa válida do bit 1, entre 2,0 e 5,0V.</p>
      <p>A alternativa <strong>"0,4 - 1,8 - 0,3 - 4,7 - 1,8 - 4,2 - 0,3 - 0,9"</strong> está incorreta pois o valor de 1,8V no segundo e quinto bits estão fora da faixa de valores para o bit 1, entre 2,0 e 5,0V. Além disso, o último bit, com valor 0,9V está com valor superior ao válido para o bit 0 que deveria ser entre 0 e 0,8V.</p>
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Algumas formas de implementar informação binária em circuitos é com resistores e chaves ou, no lugar das chaves, com transistores. Os transistores são formados por junções de semicondutores <strong>P</strong> ou <strong>N</strong>. Conforme configuração NMOS ou PMOS eles funcionam diferente para nível de tensão na porta. Por vezes é comum usar a nomenclatura <i>pull-down</i> e <i>pull-up</i> conforme a conexão de componentes, no caso os transistores, com a tensão baixa ou alta.<br><br>Em relação a estas formas de implementar <strong>bits 0 e 1</strong> usando circuitos com chaves ou transistores, análise as sentenças a seguir.",
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
      { letter: "A", text: "<strong>II</strong> e <strong>III</strong>, apenas.", isCorrect: false },
      { letter: "B", text: "<strong>I</strong> e <strong>II</strong>, apenas.", isCorrect: false },
      { letter: "C", text: "<strong>III</strong> e <strong>IV</strong>, apenas.", isCorrect: false },
      { letter: "D", text: "<strong>IV</strong>, apenas.", isCorrect: false },
      { letter: "E", text: "<strong>I</strong>, <strong>III</strong> e <strong>IV</strong>, apenas.", isCorrect: true }
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
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Leia o trecho a seguir:<br><br>O <strong>[preencher 1]</strong> é uma unidade de informação comum em sistemas digitais, por exemplo, como em computadores e sistemas embarcados. Ela serve, por exemplo, para quantificar a capacidade de memória destes dispositivos. Esta unidade de informação é composta por <strong>[preencher 2]</strong> portanto pode assumir os valores entre <strong>[preencher 3]</strong>.",
    questionText: "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídas por:",
    options: [
      { letter: "A", text: "1 - nibble; 2 - 4 bits; 3 - 1 e 16.", isCorrect: false },
      { letter: "B", text: "1 - nibble; 2 - 8 bits; 3 - 0 e 32.", isCorrect: false },
      { letter: "C", text: "1 - byte; 2 - 8 bits; 3 - 0 e 255.", isCorrect: true },
      { letter: "D", text: "1 - nibble; 2 - 4 bits; 3 - 1 e 32.", isCorrect: false },
      { letter: "E", text: "1 - byte; 2 - 8 bits; 3 - 1 e 256.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa <strong>"1 - byte; 2 - 8 bits; 3 - 0 e 255."</strong> está correta pois de fato <i>byte</i> é uma unidade de informação muito empregada em computação, por exemplo, dizemos que um computador possui a capacidade de memória de 8 MB (<i>Megabytes</i>) ou 8 milhões de <i>bytes</i>. Cada <i>byte</i> é um conjunto de 8 bits portanto pode assumir 2<sup>8</sup> números que resulta em 256 números. Como o primeiro número é o 0, para se obter 256 números, o último deve ser o 255. Ou de outra forma, o último número da faixa é igual a <strong>2<sup>n</sup> - 1</strong>. Com n igual a 8, tem-se <strong>256 - 1</strong> que resulta em 255.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais respostas estão incorretas:</h4>
      <p>A alternativa <strong>"1 - byte; 2 - 8 bits; 3 - 1 e 256."</strong> está incorreta pois, apesar da unidade de informação comum sem sistemas de computação ser o <i>byte</i>, com 8 bits e com 256 possibilidades de números, há um erro na faixa de valores. A faixa não é entre 1 e 256, o correto seria entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 4 bits; 3 - 1 e 16."</strong> está incorreta pois a unidade de informação mais comum em sistemas de computação deveria ser <i>byte</i> e não <i>nibble</i>. Outro erro é que apesar do <i>nibble</i> possuir 4 bits que permite 16 valores válidos, eles são entre 0 e 15 e não entre 1 e 16. Como a resposta correta é <i>byte</i>, as outras lacunas deveriam ser 8 bits com números válidos entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 4 bits; 3 - 1 e 32."</strong> está incorreta pois a unidade de informação comumente usada em computação deveria ser <i>byte</i> e não <i>nibble</i>. Outro erro é que apesar do <i>nibble</i> possuir 4 bits, isso equivale a 16 valores válidos entre 0 e 15 e não a 32 valores válidos entre 1 e 32, ainda contendo o erro da faiza começar com 1. Como a resposta correta é <i>byte</i>, as outras lacunas deveriam ser 8 bits com números válidos entre 0 e 255.</p>
      <p>A alternativa <strong>"1 - nibble; 2 - 8 bits; 3 - 0 e 32."</strong> está incorreta pois a unidade de informação comumente usada em computação é o <i>byte</i> e não o <i>nibble</i>. Além disso, outro erro é que um <i>nibble</i> possui 4 bits e não 8 bits, que seria para um <i>byte</i>. Há ainda o erro de que 32 números possíveis seria para algo com 5 bits. Considerando o <i>byte</i> como a unidade de informação certa para a resposta, as outras lacunas deveriam ser 8 bits com números válidos entre 0 e 255.</p>
      <p class="final-answer">A resposta correta é: 1 - byte; 2 - 8 bits; 3 - 0 e 255.</p>
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Além de sistemas de numeração, o tratamento de informações em sistemas digitais envolve diversos outros padrões e tipos de códigos. Por exemplo, o padrão IEEE-754 especifica como devem ser codificados números grandes chamados de ponto flutuante. Outros códigos como o BCD e o Gray adotam uma lógica própria para realizar a codificação e conversão de informações numéricas.",
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
      { letter: "A", text: "<strong>I</strong>, apenas.", isCorrect: false },
      { letter: "B", text: "<strong>I</strong>, <strong>III</strong> e <strong>IV</strong>, apenas.", isCorrect: true },
      { letter: "C", text: "<strong>III</strong> e <strong>IV</strong>, apenas.", isCorrect: false },
      { letter: "D", text: "<strong>II</strong> e <strong>IV</strong>, apenas.", isCorrect: false },
      { letter: "E", text: "<strong>II</strong>, apenas.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A afirmativa <strong>I</strong> é correta, pois de fato os números em ponto flutuante em precisão simples possuem <strong>8 bits</strong> reservados para o expoente. Esses números podem ter precisão simples, dupla e estendida com <strong>32</strong>, <strong>64</strong> e <strong>80 bits</strong> respectivamente. Quando com precisão simples, <strong>1 bit</strong> é usado para o sinal, <strong>8</strong> para o expoente e <strong>23</strong> para a mantissa.</p>
      
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
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Em nosso cotidiano lidamos com diversas informações, o peso de uma mercadoria em uma balança, a hora em um relógio digital e cálculos financeiros. Elas são tratadas por sistemas digitais (balança, relógio e calculadora) e podem ser representadas em diversas bases conforme algum sistema de numeração. Em seu tratamento podem ser necessárias conversões por exemplo de um sistema binário para um sistema decimal e vice-versa.<br><br>Imagine por exemplo que o número <strong>10101.011</strong> em binário precise ser convertido para base decimal para expressar o peso de uma mercadoria.",
    questionText: "Assinale a alternativa que calcula a conversão deste número <strong>10101.011</strong> em binário para o equivalente em sistema decimal.",
    options: [
      { letter: "A", text: "21.375.", isCorrect: true },
      { letter: "B", text: "11.375.", isCorrect: false },
      { letter: "C", text: "11.625.", isCorrect: false },
      { letter: "D", text: "21.500.", isCorrect: false },
      { letter: "E", text: "31.500.", isCorrect: false }
    ],
    correctExplanation: `
      <p>A alternativa <strong>"21.375"</strong> é correta pois ao obedecer o princípio de valor-posição e ao fazer a conversão de número binário para decimal incluindo as partes decimais, pode-se fazer da seguinte forma:</p>
      <p>O número 10101.011 é igual a:</p>
      <p style="text-align: center;"><strong>(1 &times; 2<sup>4</sup>) + (0 &times; 2<sup>3</sup>) + (1 &times; 2<sup>2</sup>) + (0 &times; 2<sup>1</sup>) + (1 &times; 2<sup>0</sup>) + (0 &times; 2<sup>-1</sup>) + (1 &times; 2<sup>-2</sup>) + (1 &times; 2<sup>-3</sup>)</strong></p>
      <p style="text-align: center;"><strong>= 16 + 0 + 4 + 0 + 1 + 0 + 0.25 + 0.125 = 21.375</strong></p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"21.500"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição. Apesar da parte inteira ser equivalente ao 21, a parte decimal .100 equivale a 1 &times; 2<sup>-1</sup> que é igual a 0.50. O número binário completo seria 10101.100 para 21.500 e não o que foi apresentado no enunciado 10101.011.</p>
      <p>A alternativa <strong>"11.625"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição e ambas partes estão erradas. A parte inteira 1011 equivale a 11 e a parte decimal equivale a .101. O número binário completo seria 1011.101 e não o que foi exposto no enunciado 10101.011.</p>
      <p>A alternativa <strong>"31.500"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição e ambas partes estão erradas. A parte inteira 11111 equivale a 31 e a parte decimal equivale a .100. O número binário completo seria 11111.100 e não o que foi exposto no enunciado 10101.011.</p>
      <p>A alternativa <strong>"11.375"</strong> é incorreta, pois para fazer a conversão deve-se considerar a posição dos dígitos e suas potências de 2 equivalentes à posição. Apesar da parte decimal estar correta a parte inteira está errada. O número 1011 equivale a 11. O número binário completo seria 1011.011 e não o que foi exposto no enunciado 10101.011.</p>
      <p class="final-answer">A resposta correta é: 21.375.</p>
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Um sistema de numeração usa símbolos para representar informação numérica. Egípcios usavam, por exemplo, desenhos de bastão, corda e flor de lis. Já os símbolos <strong>I, V, X, L, C, D e M</strong> são exemplos em números romanos. Alguns sistemas usam o princípio valor-posição em que uma posição indica um valor ligado a potência da base. Por exemplo, em <strong>324</strong>, o <strong>3</strong> na terceira casa da direita para a esquerda, é quantificado para <strong>3 centenas</strong> (<strong>3</strong> multiplicado por <strong>10<sup>2</sup></strong>).",
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
      { letter: "A", text: "<strong>I </strong> e <strong>II </strong>, apenas.", isCorrect: false },
      { letter: "B", text: "<strong>II </strong> e <strong>IV </strong>, apenas.", isCorrect: false },
      { letter: "C", text: "<strong>I </strong>, <strong>II </strong> e <strong>III </strong>, apenas.", isCorrect: true },
      { letter: "D", text: "<strong>III </strong> e <strong>IV </strong>, apenas.", isCorrect: false },
      { letter: "E", text: "<strong>I </strong>, <strong>III </strong> e <strong>IV </strong>, apenas.", isCorrect: false }
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
    `
  },
  {
    week: 1,
    subject: "Circuitos Digitais",
    context: "Informações numéricas em sistemas podem ser tratadas em diversos formatos e com seus respectivos sistemas de numeração. Por exemplo, ao digitar a quantidade de peças produzidas em uma fábrica, o usuário pode inserir o número 78 em decimal mas internamente este número será um número binário. Para compreender a conversão de um sistema decimal para binário, alguns métodos usados são o das divisões sucessivas ou o da inspeção.",
    questionText: "Neste contexto, assinale a alternativa que calcula a sentença com o cálculo correto da conversão do número <strong>78<sub>10</sub></strong> para sua representação em número binário.",
    options: [
      { letter: "A", text: "1001110<sub>2</sub>", isCorrect: true },
      { letter: "B", text: "10011000<sub>2</sub>", isCorrect: false },
      { letter: "C", text: "1001000<sub>2</sub>", isCorrect: false },
      { letter: "D", text: "11001110<sub>2</sub>", isCorrect: false },
      { letter: "E", text: "1101110<sub>2</sub>", isCorrect: false }
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
    `
  }
];
