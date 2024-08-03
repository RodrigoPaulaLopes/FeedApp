import { Feather } from "@expo/vector-icons";
import { Avatar, Box, HStack, Icon, Pressable } from "native-base";


export default function Header() {
    return (
        <HStack w={'100%'} justifyContent={'space-between'} padding={4} alignItems={'center'} safeArea>
            <Box>
                <Pressable>
                    <Icon as={Feather} name="menu" size={7} color={'black'} />
                </Pressable>
            </Box>
            <Box flexDir={'row'} alignItems={'center'}>
                <Pressable marginRight={4}>
                    <Icon as={Feather} name="bell" size={7} color={'black'} />
                </Pressable>
                <Pressable>
                    <Avatar source={{ uri: 'https://www.rollingstone.com/wp-content/uploads/2023/09/stephen-king-intvw.jpg?w=1581&h=1054&crop=1' }} />
                </Pressable>
            </Box>

        </HStack>
    )
}