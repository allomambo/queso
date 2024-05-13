export type QuesoClickableMarkup = "button" | "a" | "router-link" | "div" | "span";

export interface QuesoClickableProps {
    markup?: QuesoClickableMarkup;
    url?: string | object;
    isDisabled?: boolean;
    isExternal?: boolean;
    isDownload?: boolean;
}
