/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component42 from "./Component42";
import Flag2 from "./Flag2";
import { View } from "@aws-amplify/ui-react";
export default function Component54(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="152px"
      height="108px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component54")}
      {...rest}
    >
      <Component42
        width="152px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43.52%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 53")}
      ></Component42>
      <Flag2
        width="15px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="56.48%"
        left="43.42%"
        right="46.71%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "flag2")}
      ></Flag2>
    </View>
  );
}
