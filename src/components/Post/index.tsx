import { Box, Image, Heading, Text, Icon } from "native-base"
import { Story as IPost } from "../Stories"
import { Feather } from "@expo/vector-icons"
interface IStories {
    post: IPost
}

export default function Post({ post }: IStories) {
    return (
        <Box flex={1} flexDirection={'column'} marginBottom={4} background={"#fff"} padding={2} borderRadius={4}>
            <Box >
                <Image source={{ uri: post.avatarUrl }} w={"100%"} alt="post-name" h={120} />
            </Box>
            <Box marginY={4}>
                <Heading size={'sm'}>{post.recentText}</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut dolorum dignissimos voluptate deleniti dolore eos eligendi, sapiente cumque laboriosam illo beatae nesciunt maiores molestias assumenda harum, ipsam officiis id!</Text>
            </Box>
            <Box marginY={1} flexDir={'row'} backgroundColor="rgba(226, 232, 240, 0.4)" alignSelf={'flex-start'} padding={2} borderRadius={6} paddingX={3} paddingY={1}>
                <Icon as={Feather} name="user" size={5} color={"#000"}/>
                <Text>{post.fullName}</Text>
            </Box>
        </Box>
    )
}