import type { QuesoFieldBase, QuesoFieldProps } from "@components/QuesoField";

export type QuesoTextFieldType = "text" | "url" | "tel" | "email";
export type QuesoTextFieldModel = string;

export interface QuesoTextFieldProps extends QuesoFieldProps, QuesoFieldBase {
    type?: QuesoTextFieldType;
    placeholder?: string;
}
