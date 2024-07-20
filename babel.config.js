module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components/index.ts",
            "@screens": "./src/screens/index.ts",
            "@storage": "./src/storage/index.ts",
            "@theme": "./src/theme/index.ts",
            "@utils": "./src/utils/index.ts",
            "@constants": ["./src/constants/index.ts"],
          },
        },
      ],
    ],
  };
};
