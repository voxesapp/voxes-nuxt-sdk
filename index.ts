import { Module } from "@nuxt/types";
import { MetaInfo } from "vue-meta/types";

const module: Module = function () {
  if (!this.options.voxes) {
    console.error("Voxes: Missing Voxes appKey in nuxt config");
    return;
  }

  const head = this.options.head as MetaInfo;
  const SDK_URL =
    this.nuxt.options.publicRuntimeConfig.sdkUrl || "https://voxes.io/sdk.js";

  const script = {
    id: "voxessdk",
    hid: "voxessdk",
    src: `${SDK_URL}?appKey=${this.options.voxes.appKey}`,
    async: true,
  };

  if (head.script) {
    head.script.push(script);
    return;
  }

  head.script = [script];
};

export default module;
