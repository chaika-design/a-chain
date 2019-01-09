const presets =  [
  ["@babel/preset-env", {
    "modules": false,
    "targets": [">0.25%", "not ie >= 10", "not op_mini all"],
    "useBuiltIns": "usage",
  }]
];

module.exports = { presets }
