import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Post} from '../types/Post';
import {SPACING} from '../theme/theme';

const PostCard = ({item}: {item: Post}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'yellow',
  },
  card: {
    height: 100,
    width: '100%',
  },
});
