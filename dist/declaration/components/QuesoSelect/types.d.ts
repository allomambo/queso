import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';
import { QuesoDropdownOption, QuesoDropdownOptions, QuesoDropdownOptionValue } from '../QuesoDropdown';

export type QuesoSelectOption = QuesoDropdownOption;
export type QuesoSelectOptions = QuesoDropdownOptions;
export type QuesoSelectModel = QuesoDropdownOptionValue;
export interface QuesoSelectProps extends QuesoFieldProps, QuesoFieldBase {
    options: QuesoSelectOptions;
    placeholder?: string;
}
