import { Link } from "react-router-dom";
function AirlineCard({airline, onDeleteAirline }) {
  const { id, name, image_url, slug } = airline;

  

  return (
    <li className="card">
      <img src={image_url} alt={name} />
      <h4>{name}</h4>
      <p>slug: {slug}</p>
     <Link to={`/review-details/${airline.id}`}><button >view review</button></Link>
      
    </li>
  );
}

export default AirlineCard;
