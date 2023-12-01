import React, { Fragment, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import { Props } from "./types";

export const DatePicker = ({ onConfirm}: Props) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (event.type === "set") {
      selectedDate && setDate(selectedDate);
    } else {
      setOpen(false);
    }
  };

  const handleConfirm = () => {
    onConfirm(`${date.getTime()}`)
    setOpen(false)
  }

  const handleCancel = () => {
    setOpen(false)
    setDate(new Date())
  }

  return (
    <Fragment>
      <View style={styles.inputContainer}>
        <Text>Made on:</Text>
        <TextInput
          style={styles.input}
          placeholder="Choose date"
          value={date.toDateString()}
          onPressIn={() => setOpen(p => !p)}
        />
      </View>
      {open && (
        <Fragment>
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={onChange}
          />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" color="#56487C" onPress={handleCancel} />
            <Button title="Confirm" color="#56487C" onPress={handleConfirm} />
          </View>
        </Fragment>
      )}
    </Fragment>
  );
};
