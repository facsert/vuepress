// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2022-01-01"),
      {
        // "/": "Running time: :day days :hour hours :minute minutes :second seconds",
        "/": "已运行: :day 天 :hour 小时",
        // "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
      },
      true,
    );
  },
});
