import { GlobalContext } from "./types";
import { html } from "./html";
import { css } from "./css";
import { isArray, isHTMLInstance, isNumber, isString, isTemplateInstance } from "./utils";

export let render = (value: unknown, ctx: GlobalContext): string => {
  if (value !== null && value !== undefined) {
    if (isString(value)) return value;
    if (isNumber(value)) return value + "";

    if (isArray(value)) {
      return value.map((value) => render(value, ctx)).join("");
    }

    if (isTemplateInstance(value)) {
      const instance = value.r({ ctx, html, css });

      if (isHTMLInstance(instance)) {
        return instance.r(ctx);
      }
    }
  }

  return "";
};
