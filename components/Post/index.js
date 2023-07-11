import styled from 'styled-components/native';

export const PostView = styled.View`
	padding: 10px;
  /* background-color: aqua; */
  width: 100%;
  /* height: 100px; */
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.3);
`;

export const PostTitle = styled.Text`
  font-size: 24px;
`;

export const PostText = styled.Text`
  font-size: 18px;
	color: #bbbbbb;
`;



export const Post = ( { title, body }) => {
	return <PostView>
		<PostTitle>{title}</PostTitle>
		<PostText>{body}</PostText>
	</PostView>
}