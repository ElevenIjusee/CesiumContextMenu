const path = require("path");
module.exports = {
  mode: "production",
  // mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    // sourcePrefix: "",
    filename: "cesiumContextMenu.js",
    library: {
      name: 'cesium3test',
      type: 'umd',
      export: 'default',
    },
    // clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  externals: {
    "cesium/Cesium": "cesium",
    "html2canvas": "html2canvas",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node-modules/,
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  // plugins: ['@babel/plugin-transform-modules-umd'], 
};
