import { writeFile } from 'fs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object

const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  forecastKey: "${process.env.FORECAST_KEY}",
  forecastRoot: "${process.env.FORECAST_ROOT}",
  googleKey: "${process.env.GOOGLE_KEY}",
  googleRoot: "${process.env.GOOGLE_ROOT}" 
};
`
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
