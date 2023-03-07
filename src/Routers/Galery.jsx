import { Link } from "react-router-dom";
import { galery } from "../components/Data";
const Galery = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Imagenes</h2>
        {galery.map((e) => (
          <p key={e.id}>
            <Link to={`${e.id}`}>{e.name}</Link>
          </p>
        ))}
      </div>
    </>
  );
};
export default Galery;