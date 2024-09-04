/*
 * Utilities
 *
 * Usage:
 * import { aFunction } from "@/utils";
 * aFunction()
 *
 */

import arrayToGraphQL from "./arrayToGraphQL";
import capitalize from "./capitalize";
import checkStatus from "./checkStatus";
import firstObjectOfArray from "./firstObjectOfArray";
import mutateState from "./mutateState";
import resizeEnd from "./resizeEnd";
import toCamelCase from "./toCamelCase";
import toKebabCase from "./toKebabCase";
import toPascalCase from "./toPascalCase";
import toSnakeCase from "./toSnakeCase";
import mailTo from "./mailTo";
import tel from "./tel";
import typeCheck from "./typeCheck";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = "ontouchstart" in document.documentElement;

export {
    checkStatus,
    arrayToGraphQL,
    firstObjectOfArray,
    typeCheck,
    mutateState,
    resizeEnd,
    mailTo,
    tel,
    toCamelCase,
    toKebabCase,
    toPascalCase,
    toSnakeCase,
    capitalize,
    isTouch,
    reducedMotion,
};
