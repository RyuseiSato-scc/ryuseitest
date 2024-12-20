/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectedcandidatesOverridesProps = {
    Selectedcandidates?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 15"?: PrimitiveOverrideProps<ViewProps>;
    "\u5185\u5B9A\u8005"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SelectedcandidatesProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SelectedcandidatesOverridesProps | undefined | null;
}>;
export default function Selectedcandidates(props: SelectedcandidatesProps): React.ReactElement;
