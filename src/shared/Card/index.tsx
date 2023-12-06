import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { CardType } from "../../Home/CardList/types";
import { DeleteModal } from "../../Home/DeleteModal";
import { UpdateModal } from "../../Home/UpdateModal";
import { getPriority } from "../utils/priority";

import { Props } from "./types";
import { styles } from "./styles";

const LINE_COLORS = {
  high: "#EB9B9B",
  medium: "#ffc074",
  low: "#749A90",
};

const BACKGROUND_COLORS = {
  high: "#D0A097",
  medium: "#C3A980",
  low: "#82bfb1",
};

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
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [inputsValue, setInputsValue] = useState<CardType>(item);

  const handleSave = () => {
    setIsEditClicked(false);
    onEdit(inputsValue, true);
  };

  const handleDelete = () => {
    setOpenModal(true);
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };

  const handleUpdate = () => {
    setIsUpdateModalOpen(true);
  };
  const handleCancelUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };
  const handleAcceptlUpdateModal = () => {
    onUpdate(item);
    setIsUpdateModalOpen(false);
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor:
          BACKGROUND_COLORS[getPriority({ passedDays, frequency })],
      }}
    >
      <View style={styles.titleContainer}>
        {isEditClicked ? (
          <TextInput
            style={styles.editInput}
            onChangeText={(v) => setInputsValue((p) => ({ ...p, title: v }))}
            value={inputsValue.title}
            keyboardType="default"
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
        <View style={styles.iconContainer}>
          <MaterialIcons
            onPress={handleUpdate}
            name="update"
            size={20}
            color="#56487C"
          />
          {isEditClicked ? (
            <MaterialIcons
              onPress={handleSave}
              name="done"
              size={18}
              color="#56487C"
            />
          ) : (
            <MaterialIcons
              onPress={() => setIsEditClicked((p) => !p)}
              name="edit"
              size={18}
              color="#56487C"
            />
          )}
          {!isEditClicked && (
            <MaterialIcons
              onPress={handleDelete}
              name="close"
              size={18}
              color="#56487C"
            />
          )}
        </View>
      </View>
      <View
        style={{
          borderBottomColor:
            LINE_COLORS[getPriority({ passedDays, frequency })],
          borderBottomWidth: 1.5,
        }}
      />
      {isEditClicked ? (
        <TextInput
          style={styles.editInput}
          onChangeText={(v) => setInputsValue((p) => ({ ...p, desc: v }))}
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

      <DeleteModal
        openModal={openModal}
        onCancel={handleCancelModal}
        onDelete={onDelete}
        item={item}
      />
      <UpdateModal
        openModal={isUpdateModalOpen}
        onCancel={handleCancelUpdateModal}
        onUpdate={handleAcceptlUpdateModal}
        item={item}
      />
    </View>
  );
};
