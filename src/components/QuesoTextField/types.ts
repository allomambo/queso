import type { QuesoFieldProps } from "@components/QuesoField";

export type QuesoTextFieldType = "text" | "url" | "tel" | "email" | "password";

export interface QuesoTextFieldProps extends QuesoFieldProps {
    type?: QuesoTextFieldType;
    placeholder?: string;
}
