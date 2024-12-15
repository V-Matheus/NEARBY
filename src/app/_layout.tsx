import { Stack } from 'expo-router';
import { colors } from '@/styles/theme';
import {
  useFonts,
  Rubik_700Bold,
  Rubik_600SemiBold,
  Rubik_500Medium,
  Rubik_400Regular,
} from '@expo-google-fonts/rubik';
import { Loading } from '@/components/loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_700Bold,
    Rubik_600SemiBold,
    Rubik_500Medium,
    Rubik_400Regular,
  });

  if (!fontsLoaded) return <Loading />;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] },
        }}
      />
    </GestureHandlerRootView>
  );
}
