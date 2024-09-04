import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

// Choices
export interface QuesoCheckboxMultipleChoice {
    label: string;
    value: string;
    isChecked?: boolean;
}

export type QuesoCheckboxMultipleChoices = QuesoCheckboxMultipleChoice[];

// Model
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];

// Props
export interface QuesoCheckboxMultipleProps extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoCheckboxMultipleChoice;
}
