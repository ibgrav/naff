import type { RenderableValue, RenderContext } from "./types";
import { render } from "./render";

export let IS_HTML = Symbol("html");

export interface HTMLInstance {
  t: typeof IS_HTML;
  r: (ctx: RenderContext) => string;
}

export let html = (strings: TemplateStringsArray, ...args: Array<RenderableValue>): HTMLInstance => {
  return {
    t: IS_HTML,
    r: (ctx) => strings.map((str, i) => str + render(args[i], ctx)).join(""),
  };
};
