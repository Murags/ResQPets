import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import { useQuery } from "@tanstack/react-query"
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import { useContext, useState } from "react";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPetContext";
import { useNavigate } from "react-router-dom";


const Details = () => {
    const { id } = useParams()
    const petResults = useQuery(["Details", id], fetchPet);

    const [showModal, setModal] = useState(false);

    const navigate = useNavigate();
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);

    if (petResults.isLoading){
        return (
            <div className="loading-pane">
                <h2 className="loader">◌</h2>
            </div>
        )
    }
    // console.log(petResults);

    const pet = petResults.data.pets[0];

    return (
        <div className="details">
            <Carousel images={pet.images}></Carousel>
            <div>
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
                <button onClick={()=> setModal(true)}>Adopt {pet.name}</button>
                <p>{pet.description}</p>
                {
                    showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}</h1>
                                <div className="buttons">
                                    <button onClick={()=>{
                                        setAdoptedPet(pet);
                                        navigate("/");
                                    }}>Yes</button>
                                    <button onClick={()=>setModal(false)}>No</button>
                                </div>
                            </div>
                        </Modal>
                    ):null
                }
            </div>
        </div>
    )
}

function ErrorBoundaryDetails(){
    return (
    <ErrorBoundary>
        <Details></Details>
    </ErrorBoundary>
    )
}

export default ErrorBoundaryDetails;
