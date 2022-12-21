import type { css } from "./css";
import type { html } from "./html";
import type { TemplateInstance } from "./template";

export type Primitive = null | undefined | boolean | string | number;

export type RenderableValue = Primitive | TemplateInstance | Array<RenderableValue>;

export interface RenderContext {
  html: typeof html;
  css: typeof css;
}

export interface TemplateContext<P> extends RenderContext {
  props: P;
}
