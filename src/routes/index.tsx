import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Box } from 'native-base'
import { AuthRoutes } from './auth.routes'

export function Routes() {
    const theme = DefaultTheme
    
    return (
        <Box flex={1} bg="#FFF">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}