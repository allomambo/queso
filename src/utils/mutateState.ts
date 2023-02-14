import typeCheck from "./typeCheck.js";

function mutateState(state, payload) {
    if (typeCheck(state) === "[object Object]" && typeCheck(payload) === "[object Object]") {
        for (const key in payload) {
            state[key] = payload[key];
        }
    } else {
        console.error("expected plain Object");
    }
}

export default mutateState;
