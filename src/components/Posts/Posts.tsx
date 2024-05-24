"use client";
import {
  useAddNewPostMutation,
  useGetAllPostsQuery,
} from "@/redux/api/postsApi";
import { Post } from "@/models/interfaces";

export const Posts = () => {
  const { data: posts, isLoading } = useGetAllPostsQuery();
  const [addPost] = useAddNewPostMutation();
  const handleClick = () => {
    addPost({
      title: "Test Title",
      body: "Test body",
      userId: 5,
    });
  };
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <button onClick={handleClick}>Add new Post</button>
      <ul>
        {posts?.posts?.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
