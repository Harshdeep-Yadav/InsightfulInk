import Post from "../post/Post";
import "./posts.css";
import Zoom from "react-reveal/Zoom";
export default function Posts({ posts }) {
  return (
    <Zoom left cascade>
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </Zoom>
  );
}
