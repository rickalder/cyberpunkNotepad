import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface NoteFormProps {
  onSave: (note: {
    title: string;
    content: string;
  }) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default NoteForm;
