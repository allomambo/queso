import type { QuesoFieldBase, QuesoFieldProps } from "@components/QuesoField";

export type QuesoPasswordFieldModel = string;

export interface QuesoPasswordFieldProps extends QuesoFieldProps, QuesoFieldBase {
    placeholder?: string;
}
