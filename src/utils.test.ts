import { test, expect } from "vitest";
import { isArray, isNumber, isString } from "./utils";

test("isString", () => {
  const valid = isString("test");
  expect(valid).toEqual(true);

  const invalid = isString({ test: true });
  expect(invalid).toEqual(false);
});

test("isNumber", () => {
  const valid = isNumber(0);
  expect(valid).toEqual(true);

  const invalid = isNumber(0 / 0);
  expect(invalid).toEqual(false);
});

test("isArray", () => {
  const valid = isArray([]);
  expect(valid).toEqual(true);

  const invalid = isArray({});
  expect(invalid).toEqual(false);
});
