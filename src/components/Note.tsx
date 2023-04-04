import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface NoteProps {
  note: {
    title: string;
    content: string;
  };
  onLongPress: () => void;
}

const Note: React.FC<NoteProps> = ({ note, onLongPress }) => {
  const handleDelete = () => {
    Alert.alert(
      'Delete Note',
      'Are you sure you want to delete this note?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: onLongPress,
          style: 'destructive'
        }
      ]
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={handleDelete}
      activeOpacity={0.7}
    >
      <View style={styles.btnNote}>
        <Text>{note.title}</Text>
        <Text numberOfLines={4} ellipsizeMode="tail">{note.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnNote: {
    backgroundColor: 'grey',
    padding: 10,
    height: 100,
    width: '40%',
    margin: 5,
    borderRadius: 20,
    overflow: 'hidden'
  }
});

export default Note;
