import { useEffect, useState } from "react";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostData = () => {
  const [postData, setPostData] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/2"
        );
        const result = await response.json();
        setPostData(result);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section>
      {postData ? (
        <>
          <p>userId: {postData?.userId}</p>
          <p>Id: {postData?.id}</p>
          <p>Title: {postData?.title}</p>
          <p>Body: {postData?.body}</p>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </section>
  );
};

export default PostData;
