import { test, expect } from "vitest";
import { html } from "./html";

test("html simple", () => {
  const str = html`test`;
  expect(str).toEqual("test");
});

test("html variable string", () => {
  const str = html`test ${"string"} test`;
  expect(str).toEqual("test string test");
});

test("html variable number", () => {
  const str = html`test ${100} test`;
  expect(str).toEqual("test 100 test");
});

test("html variable array", () => {
  const str = html`test ${[1, "2", [3, [4, [5]]]]} test`;
  expect(str).toEqual("test 12345 test");
});

test("html variable object", () => {
  //@ts-ignore
  const str = html`test ${{ test: [] }} test`;
  expect(str).toEqual("test  test");
});
