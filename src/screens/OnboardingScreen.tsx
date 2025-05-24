import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Animated,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import OnboardingData from '../data/OnboardingData';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import {COLORS, FONTSIZE, FONTFAMILY} from '../theme/theme';
import {ViewToken} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onboardingRef = useRef<FlatList>(null);
  const navigation = useNavigation<any>();

  const viewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    },
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasOnboarded', 'true');
      navigation.replace('BottomTab');
    } catch (err) {
      console.error('Error saving onboarding state:', err);
    }
  };
  const handleNext = () => {
    if (currentIndex < OnboardingData.length - 1) {
      onboardingRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  return (
    <LinearGradient
      colors={['#BA68C8', '#E1BEE7', '#F3E5F5']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 3}}>
          <Animated.FlatList
            data={OnboardingData}
            renderItem={({item}) => <OnboardingItem item={item} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            removeClippedSubviews
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
            viewabilityConfig={viewConfig}
            onViewableItemsChanged={viewableItemsChanged}
            scrollEventThrottle={32}
            ref={onboardingRef}
          />
        </View>

        <View style={styles.footer}>
          <Paginator data={OnboardingData} scrollX={scrollX} />

          <View style={styles.buttonRow}>
            {currentIndex < OnboardingData.length - 1 && (
              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
                <Icon
                  name={'play-skip-back-outline'}
                  size={17}
                  color={COLORS.OnboardingPurple}
                />
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
              <Text style={styles.nextText}>
                {currentIndex === OnboardingData.length - 1 ? 'Start' : 'Next'}
              </Text>
              <Icon
                name={
                  currentIndex === OnboardingData.length - 1
                    ? 'play'
                    : 'chevron-forward-outline'
                }
                size={17}
                color={'#fff'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  buttonText: {
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.OnboardingPurple,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  skipButton: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  nextButton: {
    backgroundColor: COLORS.OnboardingPurple,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    elevation: 0.5,
  },
  skipText: {
    color: COLORS.OnboardingPurple,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  nextText: {
    color: 'white',
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  gradient: {
    flex: 1,
  },
});
