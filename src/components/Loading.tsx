import { Spinner, Center } from 'native-base'

export function Loading(){
    return(
        <Center style={{flex: 1}} bg='gray.100'>
            <Spinner color='blue.500' />
        </Center>
    )
}