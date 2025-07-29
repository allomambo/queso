import type { QuesoFieldBase, QuesoFieldProps } from "@components/QuesoField";

export type QuesoPasswordModel = string;

export interface QuesoPasswordProps extends QuesoFieldProps, QuesoFieldBase {
    placeholder?: string;
}
