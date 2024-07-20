import { Link } from "react-router-dom";

function Root() {
  return (
    <>
      <header>
        <hgroup>
          <h1>Planechase</h1>
          <p>Manage planechase games in the browser!</p>
        </hgroup>
      </header>
      <main>
        <section>
          <h2>Game modes</h2>
          <div className="grid">
            <Link to="/games/planechase">
              <article>
                <hgroup>
                  <h2>Planechase</h2>
                  <p>The classic game.</p>
                </hgroup>
              </article>
            </Link>
            <Link to="/games/blind-eternities-map">
              <article>
                <hgroup>
                  <h2>Blind Eternities Map</h2>
                  <p>Explore the Multiverse.</p>
                </hgroup>
              </article>
            </Link>
          </div>
        </section>
        <section>
          <h2>Resources</h2>
          <div className="grid">
            <Link to="/planes">
              <article>
                <hgroup>
                  <h2>Planes</h2>
                  <p>Explore the planes</p>
                </hgroup>
              </article>
            </Link>
            <Link to="/phenomenons">
              <article>
                <hgroup>
                  <h2>Phenomenons</h2>
                  <p>At least the ones we know so far...</p>
                </hgroup>
              </article>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Root;
