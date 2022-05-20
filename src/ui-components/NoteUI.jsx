/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { Note } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function NoteUI(props) {
  const { note, overrides, ...rest } = props;
  const myIconOnClick = useDataStoreDeleteAction({
    id: note?.id,
    model: Note,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="321px"
      position="relative"
      border="0.5px SOLID rgba(0,0,0,0.25)"
      borderRadius="5px"
      padding="15.5px 15.5px 15.5px 15.5px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NoteUI")}
    >
      <Flex
        gap="0"
        direction="column"
        width="287px"
        height="336px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "content")}
      >
        <Flex
          gap="0"
          direction="row"
          height="24px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "header")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={note?.title}
            {...getOverrideProps(overrides, "T-Shirt")}
          ></Text>
          <Flex
            gap="5px"
            direction="row"
            width="132px"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 28")}
          >
            <Icon
              width="22px"
              height="20px"
              viewBox={{ minX: 0, minY: 0, width: 22, height: 20 }}
              paths={[
                {
                  d: "M15.3771 3.24673L18.8222 6.77085C18.9674 6.91932 18.9674 7.16155 18.8222 7.31002L10.4806 15.8429L6.93611 16.2454C6.4625 16.3001 6.06146 15.8898 6.11493 15.4054L6.50833 11.7796L14.85 3.24673C14.9951 3.09826 15.2319 3.09826 15.3771 3.24673ZM21.5646 2.35202L19.7007 0.445399C19.1201 -0.148467 18.1767 -0.148467 17.5924 0.445399L16.2403 1.82848C16.0951 1.97695 16.0951 2.21918 16.2403 2.36765L19.6854 5.89178C19.8306 6.04024 20.0674 6.04024 20.2125 5.89178L21.5646 4.50869C22.1451 3.91092 22.1451 2.94589 21.5646 2.35202L21.5646 2.35202ZM14.6667 13.5222L14.6667 17.4995L2.44444 17.4995L2.44444 4.99707L11.2215 4.99707C11.3437 4.99707 11.4583 4.94628 11.5462 4.86032L13.074 3.29752C13.3642 3.00059 13.158 2.49658 12.7493 2.49658L1.83333 2.49658C0.821181 2.49658 0 3.33659 0 4.37195L0 18.1246C0 19.16 0.821181 20 1.83333 20L15.2778 20C16.2899 20 17.1111 19.16 17.1111 18.1246L17.1111 11.9594C17.1111 11.5413 16.6184 11.3342 16.3281 11.6273L14.8003 13.1901C14.7163 13.2799 14.6667 13.3971 14.6667 13.5222Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector31472745")}
            ></Icon>
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              onClick={() => {
                myIconOnClick();
              }}
              {...getOverrideProps(overrides, "MyIcon")}
            >
              <Icon
                width="14px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 14, height: 18 }}
                paths={[
                  {
                    d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="12.5%"
                bottom="12.5%"
                left="20.83%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector31472747")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          width="287px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={note?.text}
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
