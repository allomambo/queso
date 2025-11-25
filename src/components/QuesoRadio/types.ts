import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

// Choices
export interface QuesoRadioChoice<TChoiceData = Record<string, any>> {
    label: string;
    value: string;
    data?: TChoiceData;
}

export type QuesoRadioChoices<TChoiceData = Record<string, any>> = QuesoRadioChoice<TChoiceData>[];

// Model
export type QuesoRadioModel = QuesoRadioChoice["value"];

// Props
export interface QuesoRadioProps<TChoiceData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoRadioChoices<TChoiceData>;
}
