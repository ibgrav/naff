import { test, expect } from "vitest";
import { render } from "./render";
import { template } from "./template";
import { html } from "./html";
import { css } from "./css";

interface MainProps {
  message: string;
}

const main = template<MainProps>(({ html, props }) => {
  return html`
    <main>
      <h1>${props.message}</h1>
    </main>
  `;
});

interface DocProps {
  message: string;
}

const doc = template<DocProps>(({ html, props }) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello World!</title>
      </head>
      <body>
        ${main({ message: props.message })}
      </body>
    </html>`;
});

test("doc render", () => {
  const result = render(doc({ message: "Hello World!" }), { html, css });

  expect(result).toEqual(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello World!</title>
      </head>
      <body>
        
    <main>
      <h1>Hello World!</h1>
    </main>
  
      </body>
    </html>`);
});
