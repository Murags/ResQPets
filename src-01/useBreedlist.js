import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query"


export default function useBreedList(animal){
    const breedResults = useQuery(["Breeds", animal], fetchBreedList);
    return [breedResults?.data?.breeds ?? [], breedResults.status];
}
