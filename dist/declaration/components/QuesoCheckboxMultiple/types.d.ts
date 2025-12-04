import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';
import { QuesoCheckboxProps, QuesoCheckboxModel } from '../QuesoCheckbox';

export interface QuesoCheckboxMultipleChoice<TChoiceData = Record<string, any>> {
    label: QuesoCheckboxProps["boxLabel"];
    value: string;
    isChecked?: QuesoCheckboxModel;
    data?: TChoiceData;
}
export type QuesoCheckboxMultipleChoices<TChoiceData = Record<string, any>> = QuesoCheckboxMultipleChoice<TChoiceData>[];
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];
export interface QuesoCheckboxMultipleProps<TChoiceData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoCheckboxMultipleChoices<TChoiceData>;
    validationMessage?: string;
}
