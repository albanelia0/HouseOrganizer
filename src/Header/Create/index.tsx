import { useState } from "react";
import { TextInput, View, Button, Text } from "react-native";
import uuid from 'react-native-uuid';

import { CardType } from "../../Home/CardList/types";
import { Props } from "./types";
import { styles } from "./styles";
import { getDataDayDifference } from "../../hooks/useDifferenceInDays/utils/getDifference";

export const Create = ({ onSaveButton, onClick }: Props) => {
  const [inputsValue, setInputsValue] = useState<CardType>({
    title: "",
    desc: "",
    frequency: "",
    passedDays: 0,
    date: "",
    id: ""
  });

  const handleChange = (name: string, value: string) => {
    switch (name) {
      case "title":
        setInputsValue((prev) => ({ ...prev, title: value }));
        break;

      case "desc":
        setInputsValue((prev) => ({ ...prev, desc: value }));
        break;

      case "frequency":
        setInputsValue((prev) => ({ ...prev, frequency: value }));
        break;
    }
  };

  const handleSave = () => {
    const newItem = {
      ...inputsValue,
      date: `1701126000000`,
      id: `${uuid.v4()}`
    }
    const passedDays = getDataDayDifference(newItem)

    onSaveButton({
      ...inputsValue,
      date: `1701126000000`,
      passedDays,
      id: `${uuid.v4()}`
    });
    onClick();
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange("title", value)}
        value={inputsValue.title}
        placeholder="Add category name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange("desc", value)}
        value={inputsValue.desc}
        placeholder="Description"
        keyboardType="default"
      />
      <View style={styles.daysContainer}>
        <Text>Every</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => handleChange("frequency", value)}
          value={`${inputsValue?.frequency}`}
          placeholder="days"
          keyboardType="numeric"
        />
        <Text>days</Text>
      </View>
      <Button title="Save" color="#56487C" onPress={handleSave} />
    </View>
  );
};
