const fetchSearch = async ({ queryKey }) => {
    const { animal, breed, location, page } = queryKey[1];


    const res = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`);

    if (!res.ok){
        throw new Error(`Could not fetch ${animal} breed ${breed} in ${location}`);
    }

    return res.json();
}

export default fetchSearch;
