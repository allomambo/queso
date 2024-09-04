/*
 * Utilities
 *
 * Usage:
 * import { aFunction } from "@/utils";
 * aFunction()
 *
 */

import capitalize from "./capitalize";
import firstObjectOfArray from "./firstObjectOfArray";
import mailTo from "./mailTo";
import resizeEnd from "./resizeEnd";
import tel from "./tel";
import toCamelCase from "./toCamelCase";
import toKebabCase from "./toKebabCase";
import toPascalCase from "./toPascalCase";
import toSnakeCase from "./toSnakeCase";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = "ontouchstart" in document.documentElement;

/**
 * Exports
 */
export {
    capitalize,
    firstObjectOfArray,
    mailTo,
    resizeEnd,
    tel,
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
    isTouch,
    reducedMotion,
};
