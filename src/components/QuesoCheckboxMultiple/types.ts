import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";
import type { QuesoCheckboxProps, QuesoCheckboxModel } from "@components/QuesoCheckbox";

// Choices
export interface QuesoCheckboxMultipleChoice<TChoiceData = Record<string, any>> {
    label: QuesoCheckboxProps["boxLabel"];
    value: string;
    isChecked?: QuesoCheckboxModel;
    data?: TChoiceData;
}

export type QuesoCheckboxMultipleChoices<TChoiceData = Record<string, any>> =
    QuesoCheckboxMultipleChoice<TChoiceData>[];

// Model
export type QuesoCheckboxMultipleModel = QuesoCheckboxMultipleChoice["value"][];

// Props
export interface QuesoCheckboxMultipleProps<TChoiceData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoCheckboxMultipleChoices<TChoiceData>;
    validationMessage?: string;
}
