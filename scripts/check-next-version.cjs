const assert = require("node:assert/strict");
const lock = require("../package-lock.json");

const minimum = [15, 5, 28];
const resolved = Object.entries(lock.packages).filter(([path]) =>
  /(^|\/)node_modules\/next$/.test(path)
);

assert(resolved.length > 0, "package-lock.json must resolve Next.js");
for (const [path, { version }] of resolved) {
  assert.match(version, /^\d+\.\d+\.\d+$/, `${path} must use a stable release`);
  const parts = version.split(".").map(Number);
  const difference = parts
    .map((part, index) => part - minimum[index])
    .find((part) => part !== 0);
  assert(
    difference === undefined || difference > 0,
    `${path} resolves ${version}; Next.js >= 15.5.28 is required`
  );
  console.log(`${path}: ${version} meets the Next.js security floor`);
}
