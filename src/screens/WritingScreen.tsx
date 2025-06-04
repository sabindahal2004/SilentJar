import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';
import usePostStore from '../store/PostStore';
import {CommonActions, useNavigation} from '@react-navigation/native';

const WritingScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubTitle] = useState<string>('');

  const postList = usePostStore();

  const handleSave = () => {
    if (title.trim() && subtitle.trim()) {
      postList.addPost(title, subtitle);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'BottomTab',
              params: {
                screen: 'Home',
              },
            },
          ],
        }),
      );
    }
  };
  return (
    <SafeAreaView style={styles.writingContainer}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerBar}>
          <TouchableOpacity onPress={handleSave}>
            <Text
              style={{
                fontFamily: FONTFAMILY.poppins_medium,
                fontSize: FONTSIZE.size_12,
                color: COLORS.SecondaryBlackText,
              }}>
              Save
            </Text>
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <Icon name="moon-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="clipboard-outline" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Section With Emoji */}
        <View style={styles.dateWithEmoji}>
          <View style={styles.date}>
            <Text style={styles.day}>24</Text>
            <Text style={styles.month}>August</Text>
          </View>
          <Text style={styles.emoji}>😍</Text>
        </View>
        {/* Writing Area */}
        <TextInput
          onChangeText={setTitle}
          value={title}
          multiline
          selectionColor="orange"
          style={styles.titleField}
          placeholder="Title"
        />

        <TextInput
          onChangeText={setSubTitle}
          value={subtitle}
          multiline
          selectionColor="orange"
          style={styles.subtitleField}
          placeholder="Write more here about your day..."
        />
      </View>
    </SafeAreaView>
  );
};

export default WritingScreen;

const styles = StyleSheet.create({
  writingContainer: {
    flex: 1,
    backgroundColor: COLORS.SecondarySkinBackground,
    paddingHorizontal: SPACING.space_20,
    paddingVertical: SPACING.space_10,
  },
  container: {
    justifyContent: 'center',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: SPACING.space_16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateWithEmoji: {
    marginTop: SPACING.space_20,
    backgroundColor: COLORS.PrimaryWiteBackground,
    height: 60,
    borderRadius: BORDERRADIUS.radius_15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: SPACING.space_20,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_10,
    height: '100%',
    paddingTop: SPACING.space_4,
  },
  day: {
    fontFamily: FONTFAMILY.juana_bold,
    fontSize: FONTSIZE.size_36,
  },
  month: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
  },
  emoji: {
    fontSize: FONTSIZE.size_24,
  },
  titleField: {
    fontFamily: FONTFAMILY.poppins_semibold,
    marginTop: SPACING.space_20,
    fontSize: FONTSIZE.size_20,
  },
  subtitleField: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    marginTop: -SPACING.space_12,
  },
});
