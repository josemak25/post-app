import { NavigationProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PostInterface } from "./types";

export type StackParamList = {
  Home: undefined;
  Onboarding: undefined;
  Comments: { post?: PostInterface } | undefined;
};

export type RootTabScreenProps<Screen extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, Screen>;

export type StackNavigationProps = NavigationProp<StackParamList>;
