import { extendTheme } from 'native-base'

export const THEME = extendTheme({
    colors: {
        blue: {
            700: '#364D9D',
            500: '#647AC7',
        },
        red: {
            100: '#EE7979'
        },
        gray: {
            700: '#1A181B',
            600: '#3E3A40',
            500: '#5F5B62',
            400: '#9F9BA1',
            300: '#D9D8DA',
            200: '#EDECEE',
            100: '#F7F7F8'
        },
    },
    fonts: {
        heading: 'Karla_700Bold',
        body: 'Karla_400Regular',
    },
    fontSizes: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
    },
})