/*
 * Utilities
 *
 * Usage:
 * import { aFunction } from "@allomambo/queso/utils";
 * aFunction()
 *
 */

import capitalize from "./capitalize";
import firstObjectOfArray from "./firstObjectOfArray";
import resizeEnd from "./resizeEnd";
import toCamelCase from "./toCamelCase";
import toKebabCase from "./toKebabCase";
import toMailTo, { mailTo } from "./toMailTo";
import toPascalCase from "./toPascalCase";
import toSnakeCase from "./toSnakeCase";
import toTel, { tel } from "./toTel";

/**
 * Exports
 */
export {
    capitalize,
    firstObjectOfArray,
    resizeEnd,
    toCamelCase,
    toKebabCase,
    toMailTo,
    mailTo, // Legacy
    toPascalCase,
    toSnakeCase,
    toTel,
    tel, // Legacy
};
