const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // 1. Remove Redundant Tags
    let prev;
    do {
        prev = content;
        content = content.replace(/<\/strong><\/strong>/g, '</strong>');
    } while (content !== prev);
    
    do {
        prev = content;
        content = content.replace(/<strong><strong>/g, '<strong>');
    } while (content !== prev);

    // 2. Fix Unbalanced Trailing Tags
    // We will process the text block by block. 
    // We reset the counter at certain boundaries to be safe.
    let result = '';
    let depth = 0;
    
    const regex = /(<strong>|<\/strong>|<p[^>]*>|<\/p>|<li>|<\/li>|<h\d>|<\/h\d>|<br\s*\/?>|\n|`,|",|' ,|`\)|"\)|'\))/gi;
    let lastIndex = 0;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        result += content.substring(lastIndex, match.index);
        let token = match[0].toLowerCase();
        
        if (token === '<strong>') {
            depth++;
            result += match[0];
        } else if (token === '</strong>') {
            if (depth > 0) {
                depth--;
                result += match[0];
            } else {
                // Unbalanced! Skip it.
                console.log(`Skipping unbalanced </strong> in ${filePath} near: ...${content.substring(match.index - 20, match.index)}...`);
            }
        } else {
            // Block boundary or string end
            depth = 0;
            result += match[0];
        }
        lastIndex = regex.lastIndex;
    }
    result += content.substring(lastIndex);

    if (result !== originalContent) {
        fs.writeFileSync(filePath, result, 'utf8');
        console.log(`Fixed: ${filePath}`);
    } else {
        console.log(`No changes for: ${filePath}`);
    }
}

const files = [
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/circuitos.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana01.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana02.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana03.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana04.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana05.js',
    '/Users/cristiano/Desktop/ESTUDOS_2026/pagina_de_respostas/data/fisica/fisica.semana06.js'
];

files.forEach(processFile);
