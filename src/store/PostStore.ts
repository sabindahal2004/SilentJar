import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PostStore {
  postTitleList: string[];
  addPostTitle: (title: string) => void;
  postSubTitleList: string[];
  addSubPostTitle: (subTitle: string) => void;
}

const usePostStore = create<PostStore>()(
  persist(
    set => ({
      postTitleList: [],
      addPostTitle: title =>
        set(state => ({
          postTitleList: [...state.postTitleList, title],
        })),
      postSubTitleList: [],
      addSubPostTitle: subTitle =>
        set(state => ({
          postTitleList: [...state.postSubTitleList, subTitle],
        })),
    }),
    {
      name: 'post-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default usePostStore;
