/*
 * Utilities
 *
 * Usage:
 * import { aFunction } from "@allomambo/queso/utils";
 * aFunction()
 *
 */

import capitalize from "./capitalize";
import getFirstObjectOfArray, { firstObjectOfArray } from "./getFirstObjectOfArray";
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
    getFirstObjectOfArray,
    firstObjectOfArray, // Legacy
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
