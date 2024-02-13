const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

    console.log(`Res pet req ${res.ok}`)
    if (!res.ok){
        throw new Error("Could not fetch pet details")
    }
    // console.log(res.json());
    return await res.json();
}


export default fetchPet;
