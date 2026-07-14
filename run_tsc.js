const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npx tsc --noEmit', { cwd: 'd:\\\\zeenox', encoding: 'utf8' });
  fs.writeFileSync('d:\\\\zeenox\\\\tsc_output.txt', output);
  console.log('Success, wrote to tsc_output.txt');
} catch (error) {
  fs.writeFileSync('d:\\\\zeenox\\\\tsc_output.txt', error.stdout || error.message);
  console.log('Error, wrote to tsc_output.txt');
}
