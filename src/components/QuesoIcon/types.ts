export type QuesoIconSizeUnit =
    | "px"
    | "cm"
    | "mm"
    | "in"
    | "pt"
    | "pc"
    | "em"
    | "rem"
    | "ex"
    | "ch"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "%"
    | "fr";

export interface QuesoIconProps {
    svg?: SVGElement | string;
    name?: string;
    prefix?: string;
    size?: number;
    sizeUnit?: QuesoIconSizeUnit;
    rotation?: number;
}
