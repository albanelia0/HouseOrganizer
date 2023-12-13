import { Text, Button } from "react-native";
import { Modal } from "../../shared/Modal"
import { styles } from "./styles";
import { Props } from "./types";

export const UpdateModal = ({openModal, onCancel, onUpdate, item}: Props) => {
  return (
    <Modal isVisible={openModal}>
      <Modal.Container>
        <Modal.Header title="Update date to current date?" />
        <Modal.Body>
          <Text style={styles.modalText}>
            The date would be updated to {new Date().toLocaleDateString()}
          </Text>
          </Modal.Body>
        <Modal.Buttons onPress={onUpdate} onCancel={onCancel} />
      </Modal.Container>
    </Modal>
  )
}