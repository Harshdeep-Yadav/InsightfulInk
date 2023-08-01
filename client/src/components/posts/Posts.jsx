import Post from "../post/Post";
import "./posts.css";
import Fade from "react-reveal/Fade";
export default function Posts({ posts }) {
  return (
      <Fade left>
    <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
    </div>
      </Fade>
  );
}
