import { test, expect } from "vitest";
import { render } from "./render";
import { template } from "./template";
import { RenderContext } from "./types";
import { html } from "./html";
import { css } from "./css";

const ctx: RenderContext = {
  html,
  css,
};

test("render string", () => {
  const result = render("test", ctx);
  expect(result).toEqual("test");
});

test("render template", () => {
  const test = template(({ html }) => {
    return html`<div>test</div>`;
  });

  const result = render(test(), ctx);

  expect(result).toEqual("<div>test</div>");
});
