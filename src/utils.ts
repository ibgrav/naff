import { HTMLInstance, IS_HTML } from "./html";
import { IS_TEMPLATE, TemplateInstance } from "./template";

export let isNull = (value?: unknown): value is null => {
  return value === null;
};

export let isUndefined = (value?: unknown): value is undefined => {
  return value === undefined;
};

export let isBoolean = (value?: unknown): value is boolean => {
  return typeof value === "boolean";
};

export let isString = (value?: unknown): value is string => {
  return typeof value === "string";
};

export let isNumber = (value?: unknown): value is string => {
  return typeof value === "number" && !Number.isNaN(value);
};

export let isArray = (value?: unknown): value is Array<unknown> => {
  return Array.isArray(value);
};

export let isObject = (value?: unknown): value is Record<string, unknown> => {
  return !isNull(value) && typeof value === "object";
};

export let isFunction = (value?: unknown): value is (...args: Array<unknown>) => unknown => {
  return typeof value === "function";
};

export let isTemplateInstance = (value?: unknown): value is TemplateInstance => {
  return isObject(value) && value.t === IS_TEMPLATE;
};

export let isHTMLInstance = (value?: unknown): value is HTMLInstance => {
  return isObject(value) && value.t === IS_HTML;
};
