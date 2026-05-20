const fs = require('fs');
const path = require('path');

const files = [
    'data/circuitos.js',
    'data/fisica/fisica.semana01.js',
    'data/fisica/fisica.semana02.js',
    'data/fisica/fisica.semana03.js',
    'data/fisica/fisica.semana04.js',
    'data/fisica/fisica.semana05.js',
    'data/fisica/fisica.semana06.js'
];

function fixCorruption(content) {
    let newContent = content;
    // Fix <strong>&<strong>theta;
    newContent = newContent.replace(/<strong>&<strong>/g, '&');
    // Fix class="final-answer"</strong>
    newContent = newContent.replace(/(class="[^"]+")<\/strong>/g, '$1');
    // Fix id="abc"</strong>
    newContent = newContent.replace(/(id="[^"]+")<\/strong>/g, '$1');
    // Fix double strong
    newContent = newContent.replace(/<strong><strong>/g, '<strong>').replace(/<\/strong><\/strong>/g, '</strong>');
    // Fix double bold
    newContent = newContent.replace(/\*\*\s?\*\*/g, '**');
    newContent = newContent.replace(/\*\*\*\*/g, '**');
    // Fix **m**/s**
    newContent = newContent.replace(/\*\*m\*\*\/s\*\*/g, 'm/s');
    
    // Also, symbols might have been double converted if they were already entities
    // &amp;theta; -> &theta;
    newContent = newContent.replace(/&amp;(\w+);/g, '&$1;');

    return newContent;
}

files.forEach(file => {
    const filePath = path.join('/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas', file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixCorruption(content);
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed ${file}`);
    }
});
