import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import usePostStore from '../store/PostStore';
import PostCard from './PostCard';
import {SPACING} from '../theme/theme';

const PostList = () => {
  const postListData = usePostStore(state => state.postsList);
  return (
    <FlatList
      data={postListData}
      renderItem={({item}) => <PostCard item={item} />}
      keyExtractor={item => item.id?.toString()}
      contentContainerStyle={styles.listContainer}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PostList;

const styles = StyleSheet.create({
  listContainer: {
    gap: SPACING.space_12,
  },
  container: {
    marginTop: SPACING.space_36,
    paddingHorizontal: SPACING.space_24,
  },
});
