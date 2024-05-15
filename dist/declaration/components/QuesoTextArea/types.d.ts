import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';

export type QuesoTextAreaModel = string;
export interface QuesoTextAreaProps extends QuesoFieldProps, QuesoFieldBase {
    placeholder?: string;
}
