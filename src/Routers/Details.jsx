import { useParams, useNavigate } from "react-router-dom";
import { galery } from "../components/Data";
import "./img.css"

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const oneImg = galery.find((e) => e.id === Number(id));
    return (
        <>
          <div className="div-img">
            <h1>{`Nombre: ${oneImg.name}`}</h1>
            <img src={oneImg.image} alt={oneImg.name} width={300} />
          </div>
          <button onClick={() => navigate(-1)}>← Back</button>
        </>
      );
}

export default Details;