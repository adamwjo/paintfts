import React from 'react'
import paintingsData from '../../data/paintings'

import SearchBar from '../SearchBar/SearchBar'
import PaintingsContainer from '../PaintingsContainer/PaintingsContainer'

export default function MainContainer() {
    return (
        <div className="container">
            <div className="row">
                <SearchBar />
                <PaintingsContainer />
            </div>
        </div>
    )
}

