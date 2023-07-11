import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, RefreshControl, View, FlatList, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import { Post } from './components/Post';

const AppView = styled.View`
  padding: 0 10px;
`

const Loading = styled.View`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export default function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = () => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          setPosts([...res.data])
        })
        .catch (err => console.log(err))
        .finally( () => setIsLoading(false));
  }
  useEffect(getPosts, []);

  return (
    <AppView>
      <StatusBar theme="auto"/>
      {isLoading
        ? <Loading >
          <ActivityIndicator size="large" />
          <Text>Loading ....</Text>
        </Loading>
        : <FlatList data={posts} renderItem={({item}) => 
          <TouchableOpacity>
            <Post {...item} />
          </TouchableOpacity>} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getPosts}/>}/>
      }

    </AppView> 
  );
}
