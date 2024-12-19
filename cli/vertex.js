#!/usr/bin/env node
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs-extra";

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2 || args[0] !== "new") {
    console.log("Usage: npx vertex new my-vertex-app");
    process.exit(1);
  }

  const projectName = args[1];
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const templateDir = resolve(__dirname, "../template");
  const targetDir = resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.error(`Error: Directory ${projectName} already exists.`);
    process.exit(1);
  }

  await fs.copy(templateDir, targetDir);
  console.log(`\nSuccess! Created ${projectName} at ${targetDir}`);
  console.log(`\nNext steps:`);
  console.log(`  1. cd ${projectName}`);
  console.log(`  2. npm install`);
  console.log(`  3. npm run dev`);
  console.log(
    `\nThen open the URL shown in the terminal and follow the instructions in welcome.tsx\n`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
