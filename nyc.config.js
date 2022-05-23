module.exports = {
  /* include all TypeScript sources from folder "src", excluding type definitions and test files */
  cwd: ".",
  include: ["src/**"],
  extension: [".ts", ".tsx"],
  exclude: ["**/*.d.ts", "**/*.spec.ts", "**/playwright.config.ts"],

  /* instrument all files, not just the ones touched by the test cases */
  all: true,

  reporter: ["html", "lcov"],
};
