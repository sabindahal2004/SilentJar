import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post } from '../types/Post';

interface PostStore {
  postsList: Post[];
  addPost: (title: string, description: string) => void;
  updatePost: (id: string, newTitle: string, newDescription: string) => void;
  deletePost: (id: string) => void;
  clearAllPosts: () => void;
}

const usePostStore = create<PostStore>()(
  persist(
    (set, _get) => ({
      postsList: [],
      addPost: (title, description) => {
        set(state => ({
          postsList: [
            ...state.postsList,
            {
              id: Date.now().toString(),
              title,
              description,
              createdAt: Date.now(),
            },
          ],
        }));
      },
      updatePost: (id, newTitle, newDescription) => {
        set(state => ({
          postsList: state.postsList.map(post =>
            post.id === id
              ? {...post, title: newTitle, description: newDescription}
              : post,
          ),
        }));
      },
      deletePost: id => {
        set(state => ({
          postsList: state.postsList.filter(post => post.id !== id),
        }));
      },
      clearAllPosts: () => {
        set({postsList: []});
      },
    }),
    {
      name: 'post-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({posts: state.postsList}),
    },
  ),
);

export default usePostStore;
