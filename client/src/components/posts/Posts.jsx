import Post from "../post/Post";
import "./posts.css";
import Zoom from "react-reveal/Zoom";
export default function Posts({ posts }) {
  return (
    <>
      <div className="posts">
        <Zoom left cascade>
          {posts.map((p) => (
            <Post post={p} />
          ))}
        </Zoom>
      </div>
    </>
  );
}
