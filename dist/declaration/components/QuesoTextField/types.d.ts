import { QuesoFieldBase, QuesoFieldProps } from '../QuesoField';

export type QuesoTextFieldType = "text" | "url" | "tel" | "email" | "number" | "date";
export type QuesoTextFieldModel = string;
export interface QuesoTextFieldProps extends QuesoFieldProps, QuesoFieldBase {
    type?: QuesoTextFieldType;
    placeholder?: string;
}
