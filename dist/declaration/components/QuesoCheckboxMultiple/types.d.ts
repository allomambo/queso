import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';
import { QuesoCheckboxProps, QuesoCheckboxModel } from '../QuesoCheckbox';

export interface QuesoCheckboxMultipleChoice {
    label: QuesoCheckboxProps["boxLabel"];
    value: string;
    isChecked?: QuesoCheckboxModel;
    data?: object;
}
export type QuesoCheckboxMultipleChoices = QuesoCheckboxMultipleChoice[];
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];
export interface QuesoCheckboxMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoCheckboxMultipleChoices;
    validationMessage?: string;
}
