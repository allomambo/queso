import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoCheckboxProps, QuesoCheckboxModel } from "@components/QuesoCheckbox";

// Choices
export interface QuesoCheckboxMultipleChoice {
    label: QuesoCheckboxProps["boxLabel"];
    value: string;
    isChecked?: QuesoCheckboxModel;
    data?: object;
}

export type QuesoCheckboxMultipleChoices = QuesoCheckboxMultipleChoice[];

// Model
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];

// Props
export interface QuesoCheckboxMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoCheckboxMultipleChoices;
    validationMessage?: string;
}
