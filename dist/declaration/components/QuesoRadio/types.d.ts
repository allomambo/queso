import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';

export interface QuesoRadioChoice {
    label: string;
    value: string;
}
export type QuesoRadioChoices = QuesoRadioChoice[];
export type QuesoRadioModel = QuesoRadioChoice["value"];
export interface QuesoRadioProps extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoRadioChoices;
}
