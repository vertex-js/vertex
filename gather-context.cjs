const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "combined-code-context.txt";
const CONFIG_FILES = [
  "package.json",
  "tsconfig.json",
  "nest-cli.json",
  ".eslintrc.js",
  "tsconfig.build.json",
  "rollup.config.js",
  "react-router.config.ts",
  "vite.config.ts",
  "tailwind.config.ts",
  "Dockerfile",
  "docker-compose.yml",
  ".cursorrules",
  ".cursorignore",
];
const SRC_DIR = "app";
const TS_EXTENSION = ".ts";

async function main() {
  // Remove existing output file if it exists
  if (fs.existsSync(OUTPUT_FILE)) {
    fs.unlinkSync(OUTPUT_FILE);
  }

  // Append config files
  for (const fileName of CONFIG_FILES) {
    const filePath = path.join(process.cwd(), fileName);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8");
      fs.appendFileSync(
        OUTPUT_FILE,
        `--- Start of ${fileName} ---\n` +
          content +
          `\n--- End of ${fileName} ---\n\n`
      );
    } else {
      console.warn(`Warning: ${fileName} not found.`);
    }
  }

  // Recursively gather all TypeScript files under src
  const tsFiles = await getFilesRecursive(SRC_DIR, TS_EXTENSION);

  // Append TypeScript files
  for (const filePath of tsFiles) {
    const content = fs.readFileSync(filePath, "utf8");
    fs.appendFileSync(
      OUTPUT_FILE,
      `--- Start of ${filePath} ---\n` +
        content +
        `\n--- End of ${filePath} ---\n\n`
    );
  }

  console.log(`Context file "${OUTPUT_FILE}" created successfully.`);
}

async function getFilesRecursive(dir, extension) {
  let results = [];
  const dirEntries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of dirEntries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getFilesRecursive(fullPath, extension);
      results = results.concat(subFiles);
    } else if (
      entry.isFile() &&
      [".ts", ".tsx"].includes(path.extname(entry.name))
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

main().catch((err) => {
  console.error("Error while generating context file:", err);
  process.exit(1);
});
