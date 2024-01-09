import { defineConfig } from "lyr";

export default defineConfig({
  title: "中后台项目模版",
  favicon:
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico",
  link: [
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-design.min.css",
  ],
  devScript: [
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-design.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/socket.io.min.js"
  ],
  buildScript: [
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/aliyun-oss-sdk.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/lyr-design.min.js",
    "https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/socket.io.min.js"
  ],
  ignoreRouter: ['schema-', 'component/', 'components/'],
});
