import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

export type QuesoCheckboxModel = boolean;

export interface QuesoCheckboxProps extends QuesoFieldProps, QuesoFieldBase {
    boxLabel: string;
}
