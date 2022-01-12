import React from 'react'
import './paintingscontainer.css'

import PaintingCard from '../PaintingCard/PaintingCard'

export default function PaintingsContainer() {
    return (
        <div className="mt-4">
            <h1>Paintings List</h1>
            <div className="painting-grid">
                <PaintingCard />
                <PaintingCard />
                <PaintingCard />
                <PaintingCard />
                <PaintingCard />
            </div>
        </div>
    )
}
