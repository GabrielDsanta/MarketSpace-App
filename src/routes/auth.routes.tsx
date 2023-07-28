import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Login } from '@screens/Login';
import { SignUp } from '@screens/SignUp'

type AuthRoutesType = {
    login: undefined;
    signUp: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutesType>

const { Screen, Navigator } = createNativeStackNavigator<AuthRoutesType>()


export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name='login'
                component={Login}
            />

            <Screen
                name='signUp'
                component={SignUp}
            />
        </Navigator>
    )
}