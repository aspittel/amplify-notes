/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Note } from "../models";
import { schema } from "../models/schema";
import { Flex, Icon, Text, TextField, View } from "@aws-amplify/ui-react";
export default function CreateNote(props) {
  const { overrides, ...rest } = props;
  const [titleValue, setTitleValue] = useStateMutationAction("");
  const [noteValue, setNoteValue] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: { title: titleValue, text: noteValue },
    model: Note,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateNote")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "MyIcon")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </Flex>
        <Flex
          gap="16px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="558px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Title"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={titleValue}
            onChange={(event) => {
              setTitleValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "Title")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            direction="column"
            width="558px"
            justifyContent="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Note"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={noteValue}
            onChange={(event) => {
              setNoteValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "Note")}
          ></TextField>
        </Flex>
        <View
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Divider")}
        >
          <View
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(239,240,240,1)"
            {...getOverrideProps(overrides, "Rectangle 1143")}
          ></View>
        </View>
        <Flex
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Save"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
