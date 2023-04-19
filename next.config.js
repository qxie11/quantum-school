/** @type {import('next').NextConfig} */
const withAntdLess = require("next-plugin-antd-less");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack(config) {
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: {
          "@primary-color": "#120a8f",
          "@error-color": "#b91600",
          "@layout-body-background": "#F9F9F9",
          "@font-family": "inherit",
          "@font-size-base": "16px",
          "@text-color": "#1e1f1d",
        },
      },
    ],
  ],
  nextConfig
);
