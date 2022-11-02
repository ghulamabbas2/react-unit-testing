import React, { useState, useEffect } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function getComments() {
      const comments = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(comments.data);
    }
    getComments();
  }, []);

  return (
    <ul>
      {comments?.map((comment, index) => (
        <li key={index} data-testid="comment">
          {comment.name}
        </li>
      ))}
    </ul>
  );
};

export default Comments;
