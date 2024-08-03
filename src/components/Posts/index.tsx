import { Box, FlatList } from "native-base"
import { useEffect, useState } from "react"
import Story from "../Story"
import Post from "../Post"

export interface Story {
    id: number,
    fullName: string,
    timeStamp: string,
    recentText: string,
    avatarUrl: string
}

export default function Posts() {
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
        <Box paddingX={4}>
            <FlatList data={users} renderItem={({ item }) => <Post post={item} key={item.id}/>} showsVerticalScrollIndicator={false} />
        </Box>
    )
}