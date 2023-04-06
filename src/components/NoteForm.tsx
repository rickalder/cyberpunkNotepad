import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

interface NoteFormProps {
  onSave: (note: {
    title: string;
    content: string;
  }) => void;
  onClose: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave({ title, content });
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <Modal animationType="slide" visible={true}>
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          style={styles.input}
          multiline={true}
          numberOfLines={4}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Cancel" onPress={onClose} />
          <Button title="Save" onPress={handleSave} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default NoteForm;
