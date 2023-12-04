import { Text, Button } from "react-native";
import { Modal } from "../../shared/Modal"
import { styles } from "./styles";
import { Props } from "./types";

export const DeleteModal = ({openModal, onCancel, onDelete, item}: Props) => {
  return (
    <Modal isVisible={openModal}>
      <Modal.Container>
        <Modal.Header title="Are you sure you want to delete it?" />
        <Modal.Body>
          <Text style={styles.modalText}>Accept to continue with this action</Text>
          </Modal.Body>
        <Modal.Footer>
          <Button title="Cancel" onPress={onCancel} />
          <Button title="Accept" onPress={() => onDelete(item)} />
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  )
}