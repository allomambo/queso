import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';
import { QuesoDropdownOptions, QuesoDropdownModel } from '../QuesoDropdown';

export type QuesoSelectMultipleOptions = QuesoDropdownOptions;
export type QuesoSelectMultipleModel = QuesoDropdownModel;
export interface QuesoSelectMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectMultipleOptions;
    placeholder?: string;
}
