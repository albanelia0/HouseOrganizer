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
        <Modal.Footer>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Accept" onPress={onUpdate} />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  )
}