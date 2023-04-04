import React from 'react';
import { View, FlatList } from 'react-native';
import Note from './Note';

interface NoteListProps {
  notes: Array<{
    title: string;
    content: string;
  }>;
  onLongPress: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onLongPress }) => {
  const renderItem = ({ item, index }: { item: typeof notes[0]; index: number }) => {
    return <Note note={item} onLongPress={() => onLongPress(index)} />;
  };

  return (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NoteList;
