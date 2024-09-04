import { QuesoFieldBase, QuesoFieldProps } from '../QuesoField';

export type QuesoPasswordModel = string;
export interface QuesoPasswordProps extends QuesoFieldProps, QuesoFieldBase {
    placeholder?: string;
}
