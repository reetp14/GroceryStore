import Link from "next/link";

var buttonStyle = {
  margin: "10px 10px 10px 0"
};

// handleClick = () => {
//   <Link href="/about">
//     <a style={linkStyle}></a>
//   </Link>;
// };
const button = props => (
  <div>
    <button
      className="btn btn-default"
      style={buttonStyle}
      onClick={() => this.handleClick()}
    >
      {"Add New"}
    </button>
  </div>
);

export default button;
