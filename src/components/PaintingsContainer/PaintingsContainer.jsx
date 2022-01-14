import React from 'react'
import './paintingscontainer.css'

import PaintingCard from '../PaintingCard/PaintingCard'

export default function PaintingsContainer({ paintings }) {
   

    return (
        <div className="mt-4">
            <h1>Paintings List</h1>
            <div className="painting-grid">
                { paintings.map(pntg => <PaintingCard key={pntg.id} paintingData={pntg}/>)}
            </div>
        </div>
    )
}
