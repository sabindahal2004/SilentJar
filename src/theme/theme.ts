interface Spacing {
  space_2: number;
  space_4: number;
  space_8: number;
  space_10: number;
  space_12: number;
  space_15: number;
  space_16: number;
  space_18: number;
  space_20: number;
  space_24: number;
  space_28: number;
  space_30: number;
  space_32: number;
  space_36: number;
}

export const SPACING: Spacing = {
  space_2: 2,
  space_4: 4,
  space_8: 8,
  space_10: 10,
  space_12: 12,
  space_15: 15,
  space_16: 16,
  space_18: 18,
  space_20: 20,
  space_24: 24,
  space_28: 28,
  space_30: 30,
  space_32: 32,
  space_36: 36,
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: 'Poppins-Black',
  poppins_bold: 'Poppins-Bold',
  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extralight: 'Poppins-ExtraLight',
  poppins_light: 'Poppins-Light',
  poppins_medium: 'Poppins-Medium',
  poppins_regular: 'Poppins-Regular',
  poppins_semibold: 'Poppins-SemiBold',
  poppins_thin: 'Poppins-Thin',
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_28: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_28: 28,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_10: number;
  radius_15: number;
  radius_20: number;
  radius_25: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_10: 10,
  radius_15: 15,
  radius_20: 20,
  radius_25: 25,
};

interface Colors {
  PrimaryWiteBackground: string;
  PrimaryBlackText: string;
  SecondaryBlackText: string;
  SecondaryGrayColor: string;
  SecondaryLightGreen: string;
  SecondaryLightOrange: string;
  SecondaryLightPink: string;
  SecondarySkinBackground: string;
  DarkButton: string;
  SecondarySkinColor: string;
  MoodColor: {};
  OnboardingPurple:string;
}

export const COLORS: Colors = {
  PrimaryWiteBackground: '#ffffff', // white background color
  SecondarySkinBackground: '#f5ece2', // screen backgtound color
  DarkButton: '#202120',
  PrimaryBlackText: '#000000', // title text color
  SecondaryBlackText: '#5f5f5e', // description text color
  SecondaryGrayColor: '#e4e4e5', // like memories btn background
  SecondaryLightGreen: '#d5f7e8', // used for post background
  SecondaryLightOrange: '#feecd4', // used for post background
  SecondaryLightPink: '#fed6d6', // used for post background
  SecondarySkinColor: '#f2ece2', // used for calender circle background
  MoodColor: {  // used for mood category
    LightSkin: '#faf4e9',
    LightPink: '#fae4e5',
    LightBlue: '#edf2f8',
    LightPurple: '#f7ebfa',
  },
  OnboardingPurple:'#BA68C8',
};
