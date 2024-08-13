
  module.exports = {
    transform: {
      "^.+.jsx?$": "babel-jest",
    },
    moduleFileExtensions: ["js", "jsx","json","node"],
    extensionsToTreatAsEsm: [".ts", ".tsx",".js"],
    transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  };