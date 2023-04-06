import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteList from './src/components/NoteList';
import NoteForm from './src/components/NoteForm';

interface Note {
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [showNoteForm, setShowNoteForm] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('notes').then((data) => {
      if (data) {
        setNotes(JSON.parse(data));
      }
    });
  }, []);

  const handleSaveNote = (note: Note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    setShowNoteForm(false);
  };

  const handleDeleteNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    AsyncStorage.setItem('notes', JSON.stringify(newNotes));
  };

  return (
    <View style={{ flex: 1 }}>
      <NoteList notes={notes} onLongPress={handleDeleteNote} />
      {showNoteForm ? (
       <NoteForm onSave={handleSaveNote} onClose={() => setShowNoteForm(false)} />
      ) : (
        <TouchableOpacity style={styles.addBtn} onPress={() => setShowNoteForm(true)}>
          <Text style={{ color: '#FFFFFF' }}>Add Note</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: '#1E90FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    margin: 20,
    borderRadius: 10,
  },
});

export default App;
