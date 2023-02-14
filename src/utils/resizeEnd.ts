/*
 * Custom resizeEnd event
 *
 * Usage:
 * 1. Initialize at global load
 * import { resizeEnd } from "@/utils";
 * resizeEnd();
 *
 * 2. Then you can use the event listener
 * window.addEventListener("resizeEnd", ...);
 *
 */

import { useDebounceFn } from "@vueuse/core";

const resizeEnd = () => {
    const resizeEnd = new Event("resizeEnd");

    window.addEventListener(
        "resize",
        useDebounceFn(() => {
            window.dispatchEvent(resizeEnd);
        }, 200)
    );
};

export default resizeEnd;
