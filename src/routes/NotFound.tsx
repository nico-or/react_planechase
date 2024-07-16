import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>
        <Link to="/">Return Home</Link>
      </p>
    </>
  );
}

export default NotFound;
