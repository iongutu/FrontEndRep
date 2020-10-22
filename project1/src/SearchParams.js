import React, {useState, useEffect} from 'react'
import pet,{ANIMALS} from "@frontendmasters/pet"
import useDropDown from './useDropDown'

import Results from './Results'
const SearchParams= () => {

    const [location, setLocation] = useState("Seattle, WA")
   //const [animal,setAnimal] = useState("dog")
    // const [breed,setBreed] = useState("")
    const [breeds,setBreeds] = useState([])



    //with drop-down
    const [animal, AnimalDropDown] = useDropDown("Anima","dog",ANIMALS);
    const [breed, BreedDropDown,setBreed] = useDropDown("Breed","",breeds)


    //async API
    const [pets,setPets] = useState([])

    async function requestPets()
    {
        const {animals} = await pet.animals({
            location,
            breed,
            type:animal
        })
        setPets(animals || []);
    }

    useEffect(()=>{
        setBreeds([])
        setBreed("");


        pet.breeds(animal).then(({breeds: apiBreeds})=>{
            const breedStrings = apiBreeds.map(({name})=>name);
            setBreeds(breedStrings)
        },console.error);
    },[animal,setBreed,setBreeds])


    return (
        <div className = "myclass">
            <form onSubmit={e=>{
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                <input id="location" value={location}
                placeholder="location" onChange={e=> setLocation(e.target.value) }/>
                </label>
                <AnimalDropDown />
                <BreedDropDown />
                {/*<label htmlFor="animal">*/}
                {/*    Animal*/}
                {/*    <select*/}
                {/*    id="animal"*/}
                {/*    value ={animal}*/}
                {/*    onChange={e=>setAnimal(e.target.value)}*/}
                {/*    onBlur={e=>setAnimal(e.target.value)}>*/}
                {/*        <option>ALL</option>*/}
                {/*        {ANIMALS.map(animal=>(*/}
                {/*        <option key ={animal} value={animal}>*/}
                {/*            {animal}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*    </select>*/}

                {/*</label>*/}
                {/*<label htmlFor="breed">*/}
                {/*    Breed*/}
                {/*    <select*/}
                {/*        id="breed"*/}
                {/*        value ={breed}*/}
                {/*        onChange={e=>setBreed(e.target.value)}*/}
                {/*        onBlur={e=>setBreed(e.target.value)}*/}
                {/*        disabled={breeds.length === 0}>*/}
                {/*        <option>ALL</option>*/}
                {/*        {breeds.map(breedString=>(*/}
                {/*            <option key ={breedString} value={breedString}>*/}
                {/*                {breedString}*/}
                {/*            </option>*/}
                {/*        ))}*/}
                {/*    </select>*/}

                {/*</label>*/}
                <button>Submit</button>
                <Results pets = {pets} />
            </form>
        </div>
    )

}


export default SearchParams;