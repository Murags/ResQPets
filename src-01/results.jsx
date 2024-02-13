import Pet from "./pet";


const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h1> No pets found</h1>
            ) : (
                pets.map((pet) => {
                    return <Pet
                        name={pet.name}
                        breed={pet.breed}
                        id={pet.id}
                        description={pet.description}
                        animal={pet.animal}
                        images ={pet.images}
                        location ={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                    />
                })
            )}
        </div>
    )
}

export default Results;
