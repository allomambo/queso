import { QuesoFieldProps, QuesoFieldBase } from '../QuesoField';

export interface QuesoRadioChoice<TChoiceData = Record<string, any>> {
    label: string;
    value: string;
    data?: TChoiceData;
}
export type QuesoRadioChoices<TChoiceData = Record<string, any>> = QuesoRadioChoice<TChoiceData>[];
export type QuesoRadioModel = QuesoRadioChoice["value"];
export interface QuesoRadioProps<TChoiceData = Record<string, any>> extends QuesoFieldProps, QuesoFieldBase {
    choices: QuesoRadioChoices<TChoiceData>;
}
