const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log("Running vercel inspect...");
  const output = execSync('npx vercel inspect dpl_Ak4oAykZVBa4rLoosk8XhMuPFKSZ --logs', { cwd: 'd:\\\\zeenox', encoding: 'utf8' });
  fs.writeFileSync('d:\\\\zeenox\\\\vercel_logs.txt', output);
  console.log('Success, wrote to vercel_logs.txt');
} catch (error) {
  fs.writeFileSync('d:\\\\zeenox\\\\vercel_logs.txt', error.stdout + '\n\n' + error.stderr + '\n\n' + error.message);
  console.log('Error occurred, output written to vercel_logs.txt');
}
