import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Box, useTheme } from 'native-base'
import { AuthRoutes } from './auth.routes'

export function Routes() {
    const { colors } = useTheme()

    const theme = DefaultTheme
    
    return (
        <Box flex={1} bg="#FFF">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        // </Box>
    )
}