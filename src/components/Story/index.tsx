import { Box, Image } from "native-base"
import { Story as IStory } from "../Stories"

interface IStories {
    story: IStory
}

export default function Story({ story }: IStories) {
    return (
        <Box flex={1}>
            <Box
            padding={0.5}
            borderRadius={36}
            bg={{
                linearGradient: {
                    colors: ["lightblue.300", "violet.800"]
                }
            }}>
                <Image source={{ uri: story.avatarUrl }} width={16} height={16} borderRadius={36} />
            </Box>
        </Box>
    )
}