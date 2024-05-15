import { QuesoFieldBase, QuesoFieldProps } from '../QuesoField';

export type QuesoTextFieldType = "text" | "url" | "tel" | "email" | "password";
export type QuesoTextFieldModel = string;
export interface QuesoTextFieldProps extends QuesoFieldProps, QuesoFieldBase {
    type?: QuesoTextFieldType;
    placeholder?: string;
}
