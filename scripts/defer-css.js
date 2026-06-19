const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'build', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const linkPattern = /<link href="(\/static\/css\/main\.[^"]+\.css)" rel="stylesheet">/;
const match = html.match(linkPattern);

if (!match) {
  throw new Error('Could not find main CSS link in build/index.html to defer');
}

const href = match[1];
const deferred = `<link rel="preload" as="style" href="${href}"/><link href="${href}" rel="stylesheet" media="print" onload="this.media='all'"/><noscript><link href="${href}" rel="stylesheet"/></noscript>`;

html = html.replace(linkPattern, deferred);
fs.writeFileSync(indexPath, html);
console.log('Deferred render-blocking CSS in build/index.html');
