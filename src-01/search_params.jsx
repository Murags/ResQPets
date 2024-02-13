import { useContext, useState } from "react";
import useBreedList from "./useBreedlist";
import Results from "./results";
import { useQuery } from "@tanstack/react-query"
import fetchSearch from "./fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";


const ANIMALS = ["bird", "cat", "dog", "rabbit","reptile"];

const Search_params = () => {
    const [currentPage, setPage] = useState((0));

    const [searchparams, setSearchparams] =  useState({
        animal: "",
        breed: "",
        location: "",
        page: 0
    });

    const [animal, setAnimal] = useState("");
    const petsResults = useQuery(["pets", searchparams], fetchSearch);
    const pets = petsResults?.data?.pets ?? [];

    const [BREEDS] = useBreedList(animal)

    const [adoptedPet] = useContext(AdoptedPetContext)

    const nextPage = () =>{
        setPage(currentPage + 1);
        const obj_t = searchparams;
        // console.log(obj_t);
        obj_t["page"] = currentPage
        // console.log(obj_t);
        setSearchparams(obj_t);
    }
    const prevPage = () =>{
        if (currentPage > 0) setPage(currentPage - 1);
        const obj_t = searchparams;
        // console.log(obj_t);
        obj_t["page"] = currentPage
        // console.log(obj_t);
        setSearchparams(obj_t);
    }

    return (
        <div className="search-params">
            <form onSubmit={(e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                    page: 0
                }
                setPage(0);
                setSearchparams(obj);
                })}>

                <label htmlFor="location">
                    location
                    <input type="text" name="location" id="location" placeholder="location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" name="animal" value={animal} onChange={(e) => {setAnimal(e.target.value);}}>
                        <option value={""}>All</option>
                        {ANIMALS.map((animal) => <option key={animal}> {animal} </option> )}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select id="breed" name="breed" disabled={BREEDS.length === 0}>
                        <option value={""}>All</option>
                        {BREEDS.map((breed) => <option key={breed}> {breed} </option> )}
                    </select>
                </label>
                <button>search</button>
            </form>
            <div>
                <button onClick={()=> {prevPage(); console.log(currentPage)}}>prev</button>
                <button onClick={() => {nextPage(); console.log(currentPage)}}>Next</button>
            </div>
            {
                    adoptedPet?(
                        <div className="adopted">
                            <div className="image-container">
                                <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                            </div>
                        </div>
                    ):null
            }
            <Results pets={pets} />
        </div>
    )
}

export default Search_params
