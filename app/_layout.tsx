// app/_layout.tsx (RootLayout)
import { Stack } from "expo-router";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Lexend: require('../assets/fonts/Lexend.ttf'),
    Zain: require('../assets/fonts/Zain.ttf')
  });
  return <Stack screenOptions={{ headerShown: false }} />;
}