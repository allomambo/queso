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
import mutateState from "./mutateState";
import resizeEnd from "./resizeEnd";
import toKebab from "./toKebab";
import mailTo from "./mailTo";
import tel from "./tel";
import typeCheck from "./typeCheck";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = "ontouchstart" in document.documentElement;

export {
    typeCheck,
    arrayToGraphQL,
    checkStatus,
    mutateState,
    resizeEnd,
    mailTo,
    tel,
    toKebab,
    capitalize,
    isTouch,
    reducedMotion,
};
