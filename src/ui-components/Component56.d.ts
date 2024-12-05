/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component42Props } from "./Component42";
import { Flag3Props } from "./Flag3";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type Component56OverridesProps = {
    Component56?: PrimitiveOverrideProps<ViewProps>;
    "Component 55"?: Component42Props;
    flag3?: Flag3Props;
} & EscapeHatchProps;
export declare type Component56Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component56OverridesProps | undefined | null;
}>;
export default function Component56(props: Component56Props): React.ReactElement;
