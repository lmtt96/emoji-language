const fs = require('fs')

const throwAndExit = require('./utils/throwAndExit')
const validateStep = require('./steps/validate')

const args = require('minimist')(process.argv.slice(2));

const fileArg = args.f
if (!fileArg) {
  throwAndExit('Missing file argument (-f)')
}

let file
try {
  file = fs.readFileSync(fileArg, 'utf8');
} catch(e) {
  throwAndExit(`File ${fileArg} dont exist`)
}

validateStep(file)
