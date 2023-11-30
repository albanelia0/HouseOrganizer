import { View, Text, TextInput, Button } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Props } from "./types";
import { styles } from "./styles";
import { useState } from "react";
import { CardType } from "../../Home/CardList/types";

export const Card = ({
  title,
  desc,
  frequency,
  passedDays,
  item,
  onEdit,
  onDelete
}: Props): JSX.Element => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [inputsValue, setInputsValue] = useState<CardType>(item);

  const renderColorLine = () => {
    if (passedDays >= frequency) return "#EB9B9B";

    if (passedDays + 3 >= frequency) return "#ffc074";

    return "#749A90";
  };

  const renderBackgroundColor = () => {
    if (passedDays >= frequency) return "#D0A097";

    if (passedDays + 3 >= frequency) return "#C3A980";

    return "#D1E6ED";
  };

  const handleSave = () => {
    setIsEditClicked(false)
    onEdit(inputsValue, true)
  }

  return (
    <View
      style={{ ...styles.wrapper, backgroundColor: renderBackgroundColor() }}
    >
      <View style={styles.titleContainer}>
        {isEditClicked ? (
          <TextInput
            style={styles.editInput}
            onChangeText={(v) => setInputsValue(p => ({...p, title: v}))}
            value={inputsValue.title}
            keyboardType="default"
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        <View style={styles.iconContainer}>
          {isEditClicked ? (
            <Icon onPress={handleSave} name="done" size={18} color="#56487C" />
          ) : (
            <Icon onPress={() => setIsEditClicked(p => !p)} name="edit" size={18} color="#56487C" />
          )}
          <Icon onPress={() => onDelete(item)} name="close" size={18} color="#56487C" />

        </View>
      </View>
      <View
        style={{
          borderBottomColor: renderColorLine(),
          borderBottomWidth: 1.5,
        }}
      />
      {isEditClicked ? (
        <TextInput
          style={styles.editInput}
          onChangeText={(v) => setInputsValue(p => ({...p, desc: v}))}
          value={inputsValue.desc}
          keyboardType="default"
        />
      ) : (
        <Text style={styles.desc}>{desc}</Text>
      )}

      <View style={styles.daysContainer}>
        <Text style={styles.days}>{passedDays} days ago</Text>
        <Text style={styles.days}>Every {frequency}</Text>
      </View>
    </View>
  );
};
