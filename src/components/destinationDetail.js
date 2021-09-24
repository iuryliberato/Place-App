import React from 'react'

const DestinationDetail = ({ destination }) => {


  const { attributes: { budget, safety, covid, name, airbnb_url: airbnbUrl, wikipedia_url: wikipediaUrl }, relationships } = destination.data

  const knownFor = destination.included ? destination.included.filter(included => included.type === 'known_for') : []

  const photoId = relationships ? relationships.photos.data[0].id : ''

  const photoData = destination.included ? destination.included.find(included => included.type === 'photo' && included.id === photoId) : []



  return (
    <>
      <div className='container row flex-lg-row-reverse align-items-center g-5 py-5'>
        <div className="col-12 col-sm-6 col-lg-4">
          <img src={photoData.attributes.image.large} alt={name} width="700" height="500" loading="lazy" />
        </div>

        <div className="col-lg-6">
          <h1 className="display-5 pt-2 fw-bold lh-1 mb-3">{name}</h1>
          <div className="pt-2">
            <div data-status={Object.values(budget)[0].text}>
              <strong>Budget:</strong> {Object.values(budget)[0].text}
            </div>
            <div data-status={Object.values(safety)[0].text}>
              <strong>Safety:</strong> {Object.values(safety)[0].text}
            </div>
            <div data-status={Object.values(covid)[0].text}>
              <strong>Covid risk:</strong> {Object.values(covid)[0].text}
            </div>
          </div>
          <div className='known-for mt-2 lead'>
            {knownFor.map(item =>
              <span className="correct-badges" key={item.id}>
                {item.attributes.name}
                <img src={item.attributes.icon + '-48.png'} alt={item.attributes.name} width='30px' />
              </span>

            )}
          </div>
          <hr />

          <h3 > Find out more:</h3>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <a className='btn btn-primary btn-lg px-4 me-md-2 btn-danger airBnB' href={airbnbUrl} target="_blank" rel="noreferrer">Search on AirBnb</a>
            <a className='btn btn-primary btn-lg px-4 me-md-2 wikipedia' href={wikipediaUrl} target="_blank" rel="noreferrer">Wikipedia</a>
          </div>
        </div>
      </div>
      <footer className='fixed-bottom'>

        <div className='nav-item'>
          <p>&copy; Iury and Kate 2021</p>
        </div>

      </footer>

    </>
  )

}
export default DestinationDetail