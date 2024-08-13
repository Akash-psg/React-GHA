// module.exports = {
//     transform: {
//       "^.+\\.[jt]sx?$": "babel-jest" // Ensure this regex handles both .js and .jsx files
//     },
//     moduleFileExtensions: ["js", "jsx", "json", "node"],
//     transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
//     // Remove extensionsToTreatAsEsm if not using ES modules
//   };
module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    // Optional: If using TypeScript, you might also need to add this:
    // transform: {
    //   "^.+\\.(ts|tsx)$": "ts-jest"
    // },
    // Optional: For React Testing Library
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
  