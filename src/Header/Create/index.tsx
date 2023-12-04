import { useState } from "react";
import { TextInput, View, Button, Text, TouchableOpacity } from "react-native";

import uuid from 'react-native-uuid';

import { CardType } from "../../Home/CardList/types";
import { Props } from "./types";
import { styles } from "./styles";
import { getDataDayDifference } from "../../hooks/useDifferenceInDays/utils/getDifference";
import { DatePicker } from "./DatePicker";

export const Create = ({ onSaveButton, onClick }: Props) => {
  const [datePicker, setDatePicker] = useState(`${new Date().getTime()}`);
  const [inputsValue, setInputsValue] = useState<CardType>({
    title: "",
    desc: "",
    frequency: 0,
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
        setInputsValue((prev) => ({ ...prev, frequency: +value }));
        break;
    }
  };

  const handleSave = () => {
    const newItem = {
      ...inputsValue,
      date: datePicker,
      id: `${uuid.v4()}`
    }
    const passedDays = getDataDayDifference(newItem)

    onSaveButton({
      ...inputsValue,
      date: datePicker,
      passedDays,
      id: `${uuid.v4()}`
    });
    onClick();
  };
  const handleToConfirmDate = (date: string) => {
    setDatePicker(date)
  }

  const isDisabled = !inputsValue.title || !inputsValue.frequency
  console.log("isDisabled", isDisabled)

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleChange("title", value)}
        value={inputsValue.title}
        placeholder="Add task name"
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
      <View style={styles.dateContainer}>
        <DatePicker onConfirm={handleToConfirmDate}/>
        <TouchableOpacity disabled={isDisabled} style={{...styles.button, ...(isDisabled && styles.disabledButton)}} onPress={handleSave}>
          <Text style={{...(isDisabled && styles.disabledButtonText)}} disabled={isDisabled}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
