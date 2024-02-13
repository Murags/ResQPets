import { Link } from "react-router-dom";

const Pet = ({ name, breed, animal, images, location, id, description}) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length)
  {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1><b>Name: </b> {name}</h1>
        <h1><b>Animal: </b> {animal}</h1>
        <h1><b>Breed: </b> {breed}</h1>
        <h1><b>Location: </b> {location}</h1>
      </div>
      <p><b>Description: </b> <br></br>{description}</p>
    </Link>
  )
};

export default Pet
