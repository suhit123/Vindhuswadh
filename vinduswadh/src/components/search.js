import React, { useState } from "react";
import data from "../data.json"
const Search = () => {
    const [searched, setSearched] = useState("")
    const [dataResult, setdataResult] = useState([])
    const handleSearch = (e) =>{
        const searchedWord = e.target.value  
        console.log(searchedWord)
        setSearched(searchedWord)
        const newFilter = data.filter((value)=>{
           if (value.name.includes(searchedWord.toLowerCase()))
                return value.name;
        })
        if (searchedWord==="")
            setdataResult([])
        else
            setdataResult(newFilter)
    }
    return(
        <div>
            <input type={"text"} value={searched} onChange={handleSearch}/>
        { dataResult.map((value,index)=>{
            return(
                <a style={{color:"red"}} key={value.id}>{value.name}</a>
            )

        })}
        </div>
    )
}
export default Search