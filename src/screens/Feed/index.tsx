import React from "react";
import { Box, HStack, Pressable, Icon, Avatar, FlatList } from 'native-base'
import { Feather } from '@expo/vector-icons'
import Header from "@/src/components/Header";

import Stories from "@/src/components/Stories";
import Posts from "@/src/components/Posts";

export default function Feed() {



    return (
        <Box flex={1} backgroundColor={"gray.50"} flexDirection={'column'}>
            <Header />
            <Stories />
            <Posts />
       
        </Box>
    );
}