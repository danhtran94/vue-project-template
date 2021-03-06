var path = require("path");

module.exports = {
  scripts: {
    "mount:public": "mount public --to /",
    "mount:lib": "mount lib --to /_dist_/lib",
    "mount:utils": "mount utils --to /_dist_/utils",
    "mount:src": "mount src --to /_dist_",
    "build:tsx":
      "esbuild --jsx-factory=jsx --jsx-fragment=Fragment --loader=tsx",
    "build:css": "postcss",
  },
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          config.resolve.alias = {
            ...config.resolve.alias,
            "/_dist_": path.resolve(__dirname, ".build", "_dist_"),
          };
          return config;
        },
      },
    ],
  ],
  devOptions: {
    open: "false",
    port: 3000,
  },
};
