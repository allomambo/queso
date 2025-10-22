export type QuesoFieldBaseExtraAttributes = Record<string, string>;
export interface QuesoFieldBase {
    extraAttributes?: QuesoFieldBaseExtraAttributes;
}
export interface QuesoFieldProps {
    id?: string;
    name: string;
    label?: string;
    isError?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}
export interface QuesoFieldPrivateProps extends QuesoFieldProps {
    hasStaticLabel?: boolean;
}
export declare function isQuesoFieldProps(prop: any): prop is keyof QuesoFieldProps;
