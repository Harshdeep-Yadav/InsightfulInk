import "./header.css";
import Pulse from "react-reveal/Pulse";
import Zoom from "react-reveal/Zoom";
export default function Header() {
  return (
    <Pulse top>
      <div className="header">
        <div className="headerTitles">
          <Zoom left cascade>
            <span className="headerTitleLg">InsightFulInk</span>
          </Zoom>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1631651738795-b89313eb68d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </Pulse>
  );
}
