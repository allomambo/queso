import { useDebounceFn } from "@vueuse/core";

function resizeEnd() {
    const resizeEnd = new Event("resizeEnd");

    // window.addEventListener(
    //     "resize",
    //     debounce(() => {
    //         window.dispatchEvent(resizeEnd);
    //         // console.log("::resizeEnd");
    //     }, 200)
    // );

    window.addEventListener(
        "resize",
        useDebounceFn(() => {
            window.dispatchEvent(resizeEnd);
        }, 200)
    );
}

export default resizeEnd;
