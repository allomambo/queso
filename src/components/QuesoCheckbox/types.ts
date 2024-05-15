import type { QuesoFieldProps, QuesoFieldBase } from "@components/QuesoField";

export type QuesoCheckboxModel = boolean;

export interface QuesoCheckboxProps extends QuesoFieldProps, QuesoFieldBase {
    boxLabel: string;
}

// Keep for future reference (QuesoCheckboxGroup component)

// export interface QuesoCheckboxChoice {
//     value: string;
//     label: string;
// }

// export type QuesoCheckboxChoices = QuesoCheckboxChoice[];
