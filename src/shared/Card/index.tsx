import { View, Text, TextInput, Button } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Props } from "./types";
import { styles } from "./styles";
import { useState } from "react";
import { CardType } from "../../Home/CardList/types";
import { Modal } from "../Modal";

export const Card = ({
  title,
  desc,
  frequency,
  passedDays,
  item,
  onEdit,
  onDelete,
  onUpdate,
}: Props): JSX.Element => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [inputsValue, setInputsValue] = useState<CardType>(item);

  const renderColorLine = () => {
    if (passedDays >= frequency) return "#EB9B9B";

    if (passedDays && passedDays + 3 >= frequency) return "#ffc074";

    return "#749A90";
  };

  const renderBackgroundColor = () => {
    if (passedDays >= frequency) return "#D0A097";

    if (passedDays && passedDays + 3 >= frequency) return "#C3A980";

    return "#D1E6ED";
  };

  const handleSave = () => {
    setIsEditClicked(false)
    onEdit(inputsValue, true)
  }

  const handleUpdate = () => {
    onUpdate(item)
  }

  const handleDelete = () => {
    setOpenModal(true)
  }

  const handleCancelModal = () => {
    setOpenModal(false)
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
          <MaterialIcons onPress={handleUpdate} name="update" size={20} color="#56487C" />
          {isEditClicked ? (
            <MaterialIcons onPress={handleSave} name="done" size={18} color="#56487C" />
          ) : (
            <MaterialIcons onPress={() => setIsEditClicked(p => !p)} name="edit" size={18} color="#56487C" />
          )}
          <MaterialIcons onPress={handleDelete} name="close" size={18} color="#56487C" />

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

      <Modal isVisible={openModal}>
        <Modal.Container>
          <Modal.Header title="Are you sure you want to delete it?" />
          <Modal.Body>
            <Text style={styles.modalText}>Accept to continue with this action</Text>
            </Modal.Body>
          <Modal.Footer>
            <Button title="Cancel" onPress={handleCancelModal} />
            <Button title="Accept" onPress={() => onDelete(item)} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
    </View>
  );
};
