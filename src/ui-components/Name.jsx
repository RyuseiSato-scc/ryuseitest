/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Name(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="418px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Name")}
      {...rest}
    >
      <View
        width="306px"
        height="68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="26.79%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 190")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="83px"
        height="17px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="38.24%"
        bottom="36.76%"
        left="0%"
        right="80.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="氏名(＊)"
        {...getOverrideProps(overrides, "\u6C0F\u540D(\uFF0A)")}
      ></Text>
    </View>
  );
}
