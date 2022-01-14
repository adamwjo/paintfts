import React, { useState } from 'react'
import paintingsData from '../../data/paintings'

import SearchBar from '../SearchBar/SearchBar'
import PaintingsContainer from '../PaintingsContainer/PaintingsContainer'

export default function MainContainer() {

    const [searchTerm, setSearchTerm] = useState("")

    console.log("rendering main container")

    function handleSearchTerm(value){
        setSearchTerm(value)
    }

    function filterPaintings(){
        //take the paintingsData and filter over it
        const filteredArray = paintingsData.filter((ptng) => {
            // What do you we wanna test for eaching Painting?
                // check that paintings title contains letters from the searchTerm 

            return ptng.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        })

        return filteredArray
    }

    return (
        <div className="container">
            <div className="row">
                <SearchBar handleSearchTerm={handleSearchTerm}/>
                <PaintingsContainer paintings={filterPaintings()}/>
            </div>
        </div>
    )
}

