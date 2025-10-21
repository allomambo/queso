import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';
import { QuesoDropdownOptions, QuesoDropdownOptionValue } from '../QuesoDropdown';

export type QuesoSelectModel = QuesoDropdownOptionValue;
export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoDropdownOptions;
    placeholder?: string;
}
