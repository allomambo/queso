import type { QuesoFieldProps } from "@components/QuesoField";

export interface QuesoCheckboxChoice {
    key: string | number;
    label: string;
}

export type QuesoCheckboxChoices = QuesoCheckboxChoice[];

export interface QuesoCheckboxProps extends QuesoFieldProps {
    choices?: QuesoCheckboxChoices;
}
