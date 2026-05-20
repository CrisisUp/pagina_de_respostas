const fs = require('fs');
const path = require('path');

const files = [
  'data/circuitos/circuitos.semana01.js',
  'data/circuitos/circuitos.semana02.js',
  'data/fisica/fisica.semana01.js',
  'data/fisica/fisica.semana02.js',
  'data/fisica/fisica.semana03.js',
  'data/fisica/fisica.semana04.js',
  'data/fisica/fisica.semana05.js',
  'data/fisica/fisica.semana06.js'
];

function standardizeString(str) {
    if (!str) return str;
    let res = str;

    const symbolMap = {
        'θ': '&theta;', 'Δ': '&Delta;', '≈': '&approx;', '⊕': '&oplus;',
        '⋅': '&sdot;', '×': '&times;', '∂': '&part;', '∇': '&nabla;',
        '√': '&radic;', 'π': '&pi;', 'ω': '&omega;', 'α': '&alpha;',
        'τ': '&tau;', '→': '&rarr;', 'º': '&ordm;', '°': '&deg;'
    };
    for (const [char, entity] of Object.entries(symbolMap)) {
        res = res.split(char).join(entity);
    }

    const units = ['m/s', 'rad/s', 'km', 'mm', 'kg', 'bits', 'bytes', 'MB', 'GB', 'Hz', 'N', 'V', 'J', 'W', 'A', 'm', 's'];
    const sortedUnits = [...units].sort((a, b) => b.length - a.length);
    const escapedUnits = sortedUnits.map(u => u.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    
    const unitsRegex = new RegExp(`(\\d+(?:[.,]\\d+)?)\\s*(?:<\\/?strong>\\s*)*\\b(${escapedUnits.join('|')})\\b(?![a-zA-Zà-üÀ-Ü])(?:\\s*<\\/strong>)*`, 'g');
    
    res = res.replace(unitsRegex, (match, num, unit) => {
        return `${num} <strong>${unit}</strong>`;
    });

    res = res.replace(/(?:<strong>)*\|([A-Z])\|(?:<\/strong>)*/g, '<strong>|$1|</strong>');

    const vhdlKeywords = ['entity', 'architecture'];
    vhdlKeywords.forEach(kw => {
        const regex = new RegExp(`(?<=["'\\s])(?:<strong>)*(${kw})(?:<\\/strong>)*(?=["'\\s\\.])`, 'g');
        res = res.replace(regex, '<strong>$1</strong>');
    });

    res = res.replace(/<strong>(m|rad)<\/strong>\/s(?:<\/strong>)*/g, '<strong>$1/s</strong>');
    res = res.replace(/<strong>(m|rad)<\/strong>\/<strong>s<\/strong>/g, '<strong>$1/s</strong>');
    res = res.replace(/<strong>\s*<\/strong>/g, '');
    res = res.replace(/<\/strong>\s*<strong>/g, ' ');
    res = res.replace(/<strong>\s*<strong>/g, '<strong>');
    res = res.replace(/<\/strong>\s*<\/strong>/g, '</strong>');
    res = res.replace(/(\d+(?:[.,]\d+)?)(<strong>)/g, '$1 $2');
    res = res.replace(/(\d+(?:[.,]\d+)?)\s+<strong>/g, '$1 <strong>');
    res = res.replace(/(\d+)\s*<strong>s<\/strong>ão/g, '$1 são');
    res = res.replace(/(\d+)\s+são/g, '$1 são');

    return res;
}

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    const stringPropertyRegex = /((?:subject|context|questionText|text|correctExplanation|incorrectExplanations):\s*)(`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")/g;
    content = content.replace(stringPropertyRegex, (match, propPart, value) => {
        const quote = value[0];
        const inner = value.substring(1, value.length - 1);
        const standardized = standardizeString(inner);
        return `${propPart}${quote}${standardized}${quote}`;
    });
    fs.writeFileSync(file, content);
});
