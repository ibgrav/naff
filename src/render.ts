import { RenderContext } from "./types";
import { isArray, isHTMLInstance, isNumber, isString, isTemplateInstance } from "./utils";

export let render = (value: unknown, ctx: RenderContext): string => {
  if (value !== null && value !== undefined) {
    if (isString(value)) return value;
    if (isNumber(value)) return value + "";

    if (isArray(value)) {
      return value.map((value) => render(value, ctx)).join("");
    }

    if (isTemplateInstance(value)) {
      const html = value.r(ctx);

      if (isHTMLInstance(html)) {
        return html.r(ctx);
      }
    }
  }

  return "";
};
