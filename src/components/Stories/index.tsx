import { Box, FlatList } from "native-base"
import { useEffect, useState } from "react"
import Story from "../Story"

export interface Story {
    id: number,
    fullName: string,
    timeStamp: string,
    recentText: string,
    avatarUrl: string
}

export default function Stories() {
    const [users, setUsers] = useState<Story[]>([])


    useEffect(() => {
        async function findUsers() {
            try {
                const response = await fetch('http://192.168.1.2:3000/stories')
                const json = await response.json()
                setUsers(json)
            } catch (error) {
                setUsers([])
            }
        }
        findUsers()
    }, [])
    return (
        <Box padding={4} marginBottom={4} borderRadius={4}>
            <FlatList horizontal={true} data={users} renderItem={({ item }) => <Story story={item} key={item.id}/>} showsHorizontalScrollIndicator={false} />
        </Box>
    )
}