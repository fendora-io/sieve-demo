const { exec } = require('child_process');

const steps = [
  'npm run build',
  'npm test',
  'docker build -t sieve-demo .',
];

async function deploy() {
  for (const step of steps) {
    await new Promise((resolve, reject) => {
      exec(step, (err, stdout) => {
        if (err) reject(err);
        else resolve(stdout);
      });
    });
    console.log(`Completed: ${step}`);
  }
}

deploy().catch(console.error);
