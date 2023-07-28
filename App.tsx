import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { StatusBar } from 'react-native'
import { Loading } from './src/components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoadead] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#EDECEE'
        translucent
      />
      {fontsLoadead ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

