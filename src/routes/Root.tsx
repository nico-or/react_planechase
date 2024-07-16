import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <h1>Planeshift</h1>
      <h2>Games</h2>
      <ul>
        <li>
          <Link to="planechase">Planechase</Link>
        </li>
        <li>
          <Link to="blind-eternities">Blind Eternities Map</Link>
        </li>
      </ul>
      <h2>Planes</h2>
      <Link to="/planes">Planes</Link>
    </>
  );
}

export default Root;
