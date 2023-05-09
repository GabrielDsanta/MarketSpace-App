import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { NativeBaseProvider } from 'native-base';
import { THEME } from './src/theme';
import { StatusBar } from 'react-native'
import { Login } from './src/screens/Login';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoadead] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoadead ? <Login /> : <Loading />}
    </NativeBaseProvider>
  );
}

