const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        let p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            walkDir(p);
        } else if (p.endsWith('.tsx')) {
            let content = fs.readFileSync(p, 'utf8');
            if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) {
                fs.writeFileSync(p, '"use client";\n' + content, 'utf8');
                console.log('Added use client to', p);
            }
        }
    });
}
walkDir('src/components');
