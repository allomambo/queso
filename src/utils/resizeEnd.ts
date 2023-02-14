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
