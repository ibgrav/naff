import type { RenderableValue, RenderContext } from "./types";
import { render } from "./render";

export let IS_CSS = Symbol("css");

export interface CSSInstance {
  t: typeof IS_CSS;
  r: (ctx: RenderContext) => string;
}

export let css = (strings: TemplateStringsArray, ...args: Array<RenderableValue>): CSSInstance => {
  return {
    t: IS_CSS,
    r: (ctx) => strings.map((str, i) => str + render(args[i], ctx)).join(""),
  };
};
