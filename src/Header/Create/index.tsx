import { useState } from "react";
import { TextInput, View, Button, Text } from "react-native";

import { Card } from "../../Home/CardList/types";
import { Props } from "./types";
import { styles } from "./styles";

export const Create = ({ onSaveButton, onClick }: Props) => {
  const [inputsValue, setInputsValue] = useState<Card>({
    title: "",
    desc: "",
    frequency: "",
    passedDays: 0,
    date: "",
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
    onSaveButton({
      ...inputsValue,
      date: `${new Date().getTime()}`,
      passedDays: 0,
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
