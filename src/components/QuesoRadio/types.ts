import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

// Choices
export interface QuesoRadioChoice {
    label: string;
    value: string;
}

export type QuesoRadioChoices = QuesoRadioChoice[];

// Model
export type QuesoRadioModel = QuesoRadioChoice["value"];

// Props
export interface QuesoRadioProps extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoRadioChoices;
}
