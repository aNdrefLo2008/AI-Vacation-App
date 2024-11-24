module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Add the react-native-reanimated plugin here
      "react-native-reanimated/plugin",
    ],
  };
};
