import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/home/home";
import { CommentsScreen } from "../screens/comments/comments";
import { StackParamList } from "../types/navigation";
import { usePrepareApp } from "../hooks/usePrepareApp";
import { OnboardingScreen } from "../screens/onboarding";
import { makeUseStyles } from "../helpers/makeUseStyles";

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const { palette, isDarkMode } = useStyles();
  const { appIsReady, onAppIsReady } = usePrepareApp();

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer
      onReady={onAppIsReady}
      theme={isDarkMode ? DarkTheme : DefaultTheme}
    >
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: "",
            headerShown: true,
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerTintColor: palette.primary,
            headerTitleStyle: { color: palette.text },
            headerStyle: {
              backgroundColor: palette.background,
            },
          }}
        />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const useStyles = makeUseStyles(() => ({}));
