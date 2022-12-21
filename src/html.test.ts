import { test, expect } from "vitest";
import { html } from "./html";
import { css } from "./css";

test("html simple", () => {
  const res = html`test`;
  expect(res.r({ html, css })).toEqual("test");
});

test("html variable string", () => {
  const res = html`test ${"string"} test`;
  expect(res.r({ html, css })).toEqual("test string test");
});

test("html variable number", () => {
  const res = html`test ${100} test`;
  expect(res.r({ html, css })).toEqual("test 100 test");
});

test("html variable array", () => {
  const res = html`test ${[1, "2", [3, [4, [5]]]]} test`;
  expect(res.r({ html, css })).toEqual("test 12345 test");
});

test("html variable object", () => {
  //@ts-ignore
  const res = html`test ${{ test: [] }} test`;
  expect(res.r({ html, css })).toEqual("test  test");
});
