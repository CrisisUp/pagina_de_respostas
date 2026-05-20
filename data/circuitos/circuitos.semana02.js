export const circuitosSemana02 = [
  {
    week: 2,
    subject: "Circuitos Digitais",
    context: `Durante o projeto de circuitos digitais, diferentes atividades e técnicas são envolvidas; o foco é encontrar um circuito digital que aplique a funcionalidade estabelecida por uma tabela verdade. No processo, é comum representar o circuito por meio de expressões em álgebra booleana, aplicar teoremas e realizar simplificações para encontrar um circuito adequado para a funcionalidade desejada. Observe a figura a seguir que apresenta um circuito digital baseado nas entradas <strong>A</strong>, <strong>B</strong> e <strong>C</strong> e envolvendo portas lógicas <strong>NOT</strong>, <strong>AND</strong> e <strong>OR</strong>.<br><br>
    <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0; text-align: center; border: 1px solid #e2e8f0;">
      <svg width="400" height="220" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
        <!-- Vertical Input Lines -->
        <g stroke="#64748b" stroke-width="2">
          <line x1="40" y1="20" x2="40" y2="200" />
          <line x1="60" y1="20" x2="60" y2="200" />
          <line x1="80" y1="20" x2="80" y2="200" />
        </g>
        <text x="35" y="15" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">A</text>
        <text x="55" y="15" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">B</text>
        <text x="75" y="15" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">C</text>

        <!-- Top Part (A.(B'+C')) -->
        <circle cx="60" cy="40" r="3" fill="#64748b" />
        <circle cx="80" cy="80" r="3" fill="#64748b" />
        <line x1="60" y1="40" x2="100" y2="40" stroke="#64748b" stroke-width="2" />
        <line x1="80" y1="80" x2="100" y2="80" stroke="#64748b" stroke-width="2" />

        <!-- NOT Gates -->
        <g transform="translate(100, 30)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 L 20,10 L 0,20 Z" />
          <circle cx="24" cy="10" r="3" fill="#f8fafc" />
        </g>
        <g transform="translate(100, 70)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 L 20,10 L 0,20 Z" />
          <circle cx="24" cy="10" r="3" fill="#f8fafc" />
        </g>

        <!-- OR Gate (B'+C') -->
        <g transform="translate(160, 50)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 Q 8,10 0,20 Q 18,20 28,10 Q 18,0 0,0 Z" />
        </g>
        <line x1="127" y1="40" x2="160" y2="55" stroke="#64748b" stroke-width="2" />
        <line x1="127" y1="80" x2="160" y2="65" stroke="#64748b" stroke-width="2" />

        <!-- AND Gate (A.(B'+C')) -->
        <g transform="translate(240, 35)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 L 15,0 A 15,15 0 0 1 15,30 L 0,30 Z" />
        </g>
        <circle cx="40" cy="45" r="3" fill="#64748b" />
        <line x1="40" y1="45" x2="240" y2="45" stroke="#64748b" stroke-width="2" />
        <line x1="188" y1="60" x2="240" y2="60" stroke="#64748b" stroke-width="2" />

        <!-- Bottom Part ((B.C)') -->
        <circle cx="60" cy="140" r="3" fill="#64748b" />
        <circle cx="80" cy="160" r="3" fill="#64748b" />
        <line x1="60" y1="140" x2="110" y2="140" stroke="#64748b" stroke-width="2" />
        <line x1="80" y1="160" x2="110" y2="160" stroke="#64748b" stroke-width="2" />

        <!-- AND Gate (B.C) -->
        <g transform="translate(110, 135)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 L 15,0 A 15,15 0 0 1 15,30 L 0,30 Z" />
        </g>
        
        <!-- NOT Gate ((B.C)') -->
        <g transform="translate(170, 140)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 L 20,10 L 0,20 Z" />
          <circle cx="24" cy="10" r="3" fill="#f8fafc" />
        </g>
        <line x1="140" y1="150" x2="170" y2="150" stroke="#64748b" stroke-width="2" />

        <!-- Final OR Gate (S) -->
        <g transform="translate(310, 85)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
          <path d="M 0,0 Q 8,15 0,30 Q 25,30 35,15 Q 25,0 0,0 Z" />
        </g>
        
        <line x1="270" y1="50" x2="290" y2="50" stroke="#64748b" stroke-width="2" />
        <line x1="290" y1="50" x2="290" y2="92" stroke="#64748b" stroke-width="2" />
        <line x1="290" y1="92" x2="310" y2="92" stroke="#64748b" stroke-width="2" />

        <line x1="197" y1="150" x2="290" y2="150" stroke="#64748b" stroke-width="2" />
        <line x1="290" y1="150" x2="290" y2="108" stroke="#64748b" stroke-width="2" />
        <line x1="290" y1="108" x2="310" y2="108" stroke="#64748b" stroke-width="2" />

        <!-- Output -->
        <line x1="345" y1="100" x2="370" y2="100" stroke="#64748b" stroke-width="2" />
        <text x="375" y="105" font-family="Arial" font-size="14" font-weight="bold" fill="#475569">S</text>
      </svg>
      <p style="font-size: 0.85rem; margin-top: 10px; color: #64748b;"><strong>Figura 1: Circuito lógico com três variáveis e uma saída</strong><br>Fonte: Elaborado pelo autor</p>
    </div>`,
    questionText: `Com relação a este contexto e sobre o circuito digital em questão, analise as asserções a seguir e a relação proposta entre elas.
    <br><br>
    <strong>I.</strong> O circuito digital projetado poderia ser simplificado envolvendo apenas uma porta <strong>NAND</strong> com apenas duas entradas (<strong>B</strong> e <strong>C</strong>).
    <br>
    <strong>PORQUE</strong>
    <br>
    <strong>II.</strong> A expressão algébrica do circuito pode ser simplificada por meio de propriedades e teoremas, como o teorema de <strong>De Morgan</strong>, originando uma expressão equivalente à porta <strong>NAND</strong> das entradas <strong>B</strong> e <strong>C</strong>.
    <br><br>
    A respeito dessas asserções, assinale a alternativa correta:`,
    options: [
      {
        letter: "A",
        text: "As asserções I e II são falsas.",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa.",
        isCorrect: false,
      },
      {
        letter: "C",
        text: "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira.",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I.",
        isCorrect: true,
      },
      {
        letter: "E",
        text: "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I.",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A asserção <strong>I</strong> é uma proposição verdadeira, pois o circuito equivale à seguinte expressão em álgebra booleana: <strong>S = A &sdot; (B&apos; + C&apos;) + (B &sdot; C)&apos;</strong>. Ao analisar esta expressão e aplicar os teoremas adequados, ela se torna significativamente mais simples, resultando em <strong>(B &sdot; C)&apos;</strong>.</p>
      
      <p>A asserção <strong>II</strong> também é uma proposição verdadeira e justifica a <strong>I</strong>. A simplificação pode ser demonstrada da seguinte forma:</p>
      <p style="text-align: center;"><strong>S = A &sdot; (B&apos; + C&apos;) + (B &sdot; C)&apos;</strong></p>
      <p>Utilizando o 2&ordm; teorema de <strong>De Morgan</strong>, sabemos que <strong>(B&apos; + C&apos;) = (B &sdot; C)&apos;</strong>. Substituindo na expressão:</p>
      <p style="text-align: center;"><strong>S = A &sdot; (B &sdot; C)&apos; + (B &sdot; C)&apos;</strong></p>
      <p>Pela propriedade distributiva (fatoração), temos:</p>
      <p style="text-align: center;"><strong>S = (B &sdot; C)&apos; &sdot; (A + 1)</strong></p>
      <p>Como qualquer variável em uma operação <strong>OR</strong> com <strong>1</strong> resulta em <strong>1</strong> (<strong>A + 1 = 1</strong>), a expressão final é:</p>
      <p style="text-align: center;"><strong>S = (B &sdot; C)&apos;</strong></p>
      
      <p>Abaixo, a representação do circuito simplificado equivalente (porta <strong>NAND</strong>):</p>
      
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 15px 0; text-align: center; border: 1px solid #e2e8f0;">
        <svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto;">
          <text x="20" y="45" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">B</text>
          <text x="20" y="85" font-family="Arial" font-size="12" font-weight="bold" fill="#475569">C</text>
          <line x1="35" y1="40" x2="70" y2="40" stroke="#64748b" stroke-width="2" />
          <line x1="35" y1="80" x2="70" y2="80" stroke="#64748b" stroke-width="2" />
          <g transform="translate(70, 35)" fill="#cbd5e1" stroke="#64748b" stroke-width="2">
            <path d="M 0,0 L 25,0 A 25,25 0 0 1 25,50 L 0,50 Z" />
            <circle cx="29" cy="25" r="4" fill="#f8fafc" />
          </g>
          <line x1="103" y1="60" x2="140" y2="60" stroke="#64748b" stroke-width="2" />
          <text x="145" y="65" font-family="Arial" font-size="14" font-weight="bold" fill="#475569">S</text>
        </svg>
      </div>

      <p class="final-answer">A resposta correta é: As asserções <strong>I</strong> e <strong>II</strong> são proposições verdadeiras, e a <strong>II</strong> é uma justificativa da <strong>I</strong>.</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>Ambas as asserções são verdadeiras e possuem uma relação direta de causa e consequência. A asserção <strong>I</strong> propõe a simplificação do circuito para uma porta <strong>NAND</strong> de duas entradas (<strong>B</strong> e <strong>C</strong>), o que é matematicamente validado pela demonstração algébrica apresentada na asserção <strong>II</strong> utilizando o Teorema de <strong>De Morgan</strong> e as propriedades da álgebra booleana (como a identidade <strong>A + 1 = 1</strong>). Portanto, qualquer alternativa que negue a veracidade das asserções ou a relação de justificativa entre elas está incorreta.</p>
    `,
  },
  {
    week: 2,
    subject: "Circuitos Digitais",
    context: `A análise, projeto e implementação de circuitos digitais podem envolver diversas técnicas e ferramentas, por exemplo, linguagens de programação, linguagens de descrição de hardware e simuladores. O <strong>VHDL</strong> é uma linguagem de descrição de hardware usada para descrever dispositivos de uma forma bem estruturada com blocos de comandos e que podem servir de base para simulação.<br><br>Observe o seguinte código em <strong>VHDL</strong> sobre a descrição de um hardware.
    
    <div style="margin: 20px 0; border: 1px solid #334155; border-radius: 4px; overflow: hidden; background: #fff; max-width: 600px;">
      <table style="width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Tahoma, sans-serif; font-size: 0.95rem; color: #334155;">
        <thead>
          <tr style="border-bottom: 1px solid #334155;">
            <th style="padding: 8px; border-right: 1px solid #334155; text-align: center; width: 60px; font-weight: normal;">Linha</th>
            <th style="padding: 8px; text-align: left; font-weight: normal;">Código</th>
          </tr>
        </thead>
        <tbody style="font-family: Arial, sans-serif;">
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">1</td><td style="padding: 4px 15px;">library IEEE;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">2</td><td style="padding: 4px 15px;">use IEEE.std_logic_1164.all;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">3</td><td style="padding: 4px 15px;">&nbsp;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">4</td><td style="padding: 4px 15px;"><span style="color: #991b1b; font-weight: bold;">[Preencher 1]</span> and_gate is</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">5</td><td style="padding: 4px 15px;">&nbsp;&nbsp;port (A, B, C: <span style="color: #991b1b; font-weight: bold;">[Preencher 2]</span> std_logic;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">6</td><td style="padding: 4px 15px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S: out std_logic);</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">7</td><td style="padding: 4px 15px;">end entity;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">8</td><td style="padding: 4px 15px;">&nbsp;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">9</td><td style="padding: 4px 15px;"><span style="color: #991b1b; font-weight: bold;">[Preencher 3]</span> arch of and_gate is</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">10</td><td style="padding: 4px 15px;">begin</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">11</td><td style="padding: 4px 15px;">&nbsp;&nbsp;S &lt;= A and B and C;</td></tr>
          <tr><td style="padding: 4px 8px; border-right: 1px solid #334155; text-align: center;">12</td><td style="padding: 4px 15px;">end arch;</td></tr>
        </tbody>
      </table>
    </div>
    <p style="font-size: 0.85rem; color: #64748b;"><strong>Figura 2: Exemplo de descrição de hardware usando VHDL.</strong><br>Fonte: Elaborado pelo autor</p>`,
    questionText:
      "Os termos <strong>[preencher 1]</strong>, <strong>[preencher 2]</strong> e <strong>[preencher 3]</strong> são corretamente substituídos por:",
    options: [
      {
        letter: "A",
        text: "1 - architecture; 2 - in; 3 - entity",
        isCorrect: false,
      },
      {
        letter: "B",
        text: "1 - entity; 2 - in; 3 - architecture",
        isCorrect: true,
      },
      {
        letter: "C",
        text: "1 - entity; 2 - out; 3 - architecture",
        isCorrect: false,
      },
      {
        letter: "D",
        text: "1 - entity; 2 - out; 3 - and_gate",
        isCorrect: false,
      },
      {
        letter: "E",
        text: "1 - architecture; 2 - out; 3 - entity",
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"1 - entity; 2 - in; 3 - <strong>architecture</strong>."</strong> está correta, pois o primeiro bloco de comandos do arquivo <strong>VHDL</strong> diz respeito a <strong>"entidade"</strong>, preenchido com <strong>"<strong>entity</strong>"</strong> e que especifica por exemplo os sinais de entrada e saída. As entradas neste bloco, no caso os sinais <strong>A</strong>, <strong>B</strong> e <strong>C</strong> são de entradas por isso a segunda lacuna deve ser preenchida com <strong>"in"</strong>. O segundo bloco do arquivo <strong>VHDL</strong> diz respeito à arquitetura do dispositivo com o seu funcionamento e por isso ele começa com o <strong>"<strong>architecture</strong>"</strong> preenchido na lacuna 3. As outras alternativas usam estes termos mas em outras partes do arquivo que não correspondem a cada uma destas especificações.</p>
      <p class="final-answer">A resposta correta é: 1 - entity; 2 - in; 3 - architecture</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"1 - entity; 2 - out; 3 - <strong>architecture</strong>."</strong> está incorreta pois a lacuna 2 está com <strong>"out"</strong> especificando as entradas <strong>A</strong>, <strong>B</strong> e <strong>C</strong> com a palavra <strong>"out"</strong> sendo que deveria ser <strong>"in"</strong> de entradas. O restante dos preenchimentos estão corretos, <strong>"<strong>entity</strong>"</strong> na lacuna 1 para o bloco de entidade e <strong>"<strong>architecture</strong>"</strong> na lacuna 2 para o bloco de arquitetura.</p>
      <p>A alternativa <strong>"1 - architecture; 2 - in; 3 - <strong>entity</strong>."</strong> está incorreta pois os preenchimentos da lacuna 1 com <strong>"<strong>architecture</strong>"</strong> e da lacuna 3 <strong>"<strong>entity</strong>"</strong> estão invertidos. A lacuna 1 com <strong>"<strong>architecture</strong>"</strong> inicia um bloco que trata na verdade da entidade, portanto deveria estar preenchida com <strong>"<strong>entity</strong>"</strong>. Por outro lado, a lacuna 3 com <strong>"<strong>entity</strong>"</strong> inicia um bloco de arquitetura portanto deveria estar preenchida com <strong>"<strong>architecture</strong>"</strong>. O outro preenchimento está correto, <strong>"in"</strong> para indicar os sinais de entrada <strong>A</strong>, <strong>B</strong> e <strong>C</strong>.</p>
      <p>A alternativa <strong>"1 - entity; 2 - out; 3 - and_gate"</strong> está incorreta pois na lacuna 2 os sinais de entrada deveriam ser especificados com <strong>"in"</strong> em vez de <strong>"out"</strong>. Além disso, o termo da lacuna 3 com <strong>"and_gate"</strong> está errado, como trata-se do início do bloco de arquitetura, deveria ser preenchido com <strong>"<strong>architecture</strong>"</strong>. Vale notar que o nome <strong>"and_gate"</strong> do bloco arquitetura já aparece no arquivo. O outro preenchimento está correto, <strong>"<strong>entity</strong>"</strong> de fato inicia um bloco para especificar a entidade.</p>
      <p>A alternativa <strong>"1 - architecture; 2 - out; 3 - <strong>entity</strong>."</strong> está incorreta, pois todos os preenchimentos estão errados. A lacuna 1 que inicia um bloco entidade deveria ser <strong>"<strong>entity</strong>"</strong> e não <strong>"<strong>architecture</strong>"</strong>. Na lacuna 2, os sinais de entrada deveriam ser preenchidos com <strong>"in"</strong> em vez de <strong>"out"</strong>. Na lacuna 3, o bloco de arquitetura deveria ser iniciado com <strong>"<strong>architecture</strong>"</strong> e não com <strong>"<strong>entity</strong>"</strong>.</p>
    `,
  },
  {
    week: 2,
    subject: "Circuitos Digitais",
    context:
      "O funcionamento das portas lógicas pode ser compreendido por meio do uso de circuitos com chaves e cada porta pode ter uma representação via um símbolo algébrico. Por exemplo, quando chaves são colocadas em <strong>série</strong> ou em <strong>paralelo</strong> elas possuem um comportamento de determinada porta e a depender da porta, ela pode ser representada, por exemplo, por um símbolo aritmético ou algébrico.<br><br>Com base no apresentado, assinale a alternativa que reconhece a correlação entre circuito com chaves, portas e seus respectivos símbolos algébricos.",
    questionText: "Assinale a alternativa correta:",
    options: [
      {
        letter: "A",
        text: 'um circuito com duas chaves ligadas em paralelo é equivalente a uma porta AND representada pelo símbolo de "."',
        isCorrect: false,
      },
      {
        letter: "B",
        text: 'um circuito com duas chaves ligadas em paralelo é equivalente a uma porta OR representada pelo símbolo de "+"',
        isCorrect: true,
      },
      {
        letter: "C",
        text: 'um circuito com duas chaves ligadas em série é equivalente a uma porta AND representada pelo símbolo "."',
        isCorrect: false,
      },
      {
        letter: "D",
        text: 'um circuito com duas chaves ligadas em série é equivalente a uma porta NOT representada pelo símbolo "&oplus;"',
        isCorrect: false,
      },
      {
        letter: "E",
        text: 'um circuito com duas chaves ligadas em paralelo é equivalente a uma porta AND representada pelo símbolo de "+"',
        isCorrect: false,
      },
    ],
    correctExplanation: `
      <p>A alternativa <strong>"um circuito com duas chaves ligadas em paralelo é equivalente a uma porta OR representada pelo símbolo de \"+\""</strong> está correta pois o circuito ativará uma saída quando uma ou outra chave estiver ligada que é justamente o funcionamento da porta <strong>OR</strong>. Além disso, de fato o símbolo desta porta é o <strong>"+"</strong>.</p>
      <p class="final-answer">A resposta correta é: um circuito com duas chaves ligadas em paralelo é equivalente a uma porta OR representada pelo símbolo de "+".</p>
    `,
    incorrectExplanations: `
      <h4 class="incorrect-title">As demais alternativas estão incorretas:</h4>
      <p>A alternativa <strong>"um circuito com duas chaves ligadas em série é equivalente a uma porta OR representada pelo símbolo \"&oplus;\""</strong> está incorreta pois duas chaves ligadas em <strong>série</strong> funcionam como uma porta <strong>AND</strong> em que uma saída é ativada quando ambas as chaves estão ligadas. Além disso o símbolo em questão refere-se à porta <strong>XOR</strong> (ou exclusivo).</p>
      <p>A alternativa <strong>"um circuito com duas chaves ligadas em série é equivalente a uma porta NOT representada pelo símbolo \"&oplus;\""</strong> está incorreta pois duas chaves ligadas em <strong>série</strong> equivalem a porta <strong>AND</strong>, pois o circuito completo só é ativado quando as duas chaves simultaneamente estiverem ligadas. Além disso, a porta <strong>NOT</strong> tratada na alternativa é uma porta que faz a inversão ou complemento de uma entrada, por exemplo, ao receber um sinal 1 a porta gera sinal 0 e vice-versa. Portanto, a porta <strong>NOT</strong> atua somente a uma entrada e isso seria equivalente a um circuito com apenas uma chave. O símbolo da porta <strong>NOT</strong> é uma barra acima da variável.</p>
      <p>A alternativa <strong>"um circuito com duas chaves ligadas em paralelo é equivalente a uma porta AND representada pelo símbolo de \"+\""</strong> está incorreta pois duas chaves ligadas em <strong>paralelo</strong> funcionam como uma porta <strong>OR</strong>. Isso porque com duas chaves em <strong>paralelo</strong>, o circuito será ativado, energizará a saída quando uma chave ou outra estiver ligada que é justamente o funcionamento da porta <strong>OR</strong>. Além disso, outro erro na afirmativa é que o símbolo da porta <strong>AND</strong> é <strong>"."</strong>.</p>
      <p>A alternativa <strong>"um circuito com duas chaves ligadas em paralelo é equivalente a uma porta AND representada pelo símbolo de \".\""</strong> está incorreta pois, apesar da porta <strong>AND</strong> ter um símbolo de <strong>"."</strong>, duas chaves em <strong>paralelo</strong> funcionam como uma porta <strong>OR</strong> e não como uma porta <strong>AND</strong>. Isso porque com duas chaves em <strong>paralelo</strong>, o circuito será ativado, isto é, energizará a saída quando uma chave ou outra estiver ligada que é justamente o funcionamento da porta <strong>OR</strong>.</p>
    `,
  },
];
