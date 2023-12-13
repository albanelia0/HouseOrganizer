import React from "react";
import { View, Text, Button } from "react-native";
import RNModal from "react-native-modal";

import { ModalProps } from "./types";
import { styles } from "./styles";


export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
    <View style={styles.line}/>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const ModalButtons = ({ onPress, onCancel }: {onPress: () => void, onCancel: () => void}) => {
  return (
    <>
      <View style={styles.line}/>
      <View style={styles.buttons}>
        <Button color="#b577a7" title="Cancel" onPress={onCancel} />
        <View style={styles.verticalLine}/>
        <Button color="#b577a7" title="Accept" onPress={onPress} />
      </View>
    </>
)};


Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Buttons = ModalButtons;