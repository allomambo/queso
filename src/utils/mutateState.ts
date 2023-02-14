import typeCheck from "./typeCheck";

const mutateState = (state: any, payload: any) => {
    if (typeCheck(state) === "[object Object]" && typeCheck(payload) === "[object Object]") {
        for (const key in payload) {
            state[key] = payload[key];
        }
    } else {
        console.error("expected plain Object");
    }
};

export default mutateState;
