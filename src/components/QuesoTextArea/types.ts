import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

export type QuesoTextAreaModel = string;

export interface QuesoTextAreaProps extends QuesoFieldProps, QuesoFieldBase {
    placeholder?: string;
}
