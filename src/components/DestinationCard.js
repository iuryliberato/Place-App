import React from 'react'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination, photo }) => {

  const { attributes, id } = destination

  return (

    <div className="col-12 col-md-6 col-lg-3 gy-4">
      <div className="card h-100">
        <div className='ratio ratio-16x9 bg-light'>
          {photo && (
            <img src={photo.attributes.image.medium} className="card-img-top" alt={attributes.name} />
          )}
        </div>
        <div className="card-body cardPos">
          <h4 className="card-title view">{attributes.name}</h4>
          <h5>Average Rating:</h5>
          <h2 className="score" data-status={Math.round(attributes.average_rating).toString()}>{parseFloat(attributes.average_rating.toFixed(1))}/5</h2>
          <h6>Type: {attributes.destination_type}</h6>
          <div className="info">
            <hr />

            <Link className="btn btn-primary btn-lg px-4 me-md-2 btn-danger view" to={`/destinations/${id}`}>View info 🔎</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DestinationCard