import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DestinationCard from './DestinationCard'

const DestinationSearchPage = () => {
  // const [loading, setLoading] = useState(false)
  const [destinations, setDestinations] = useState([])
  // const [destination, setDestination] = useState('')
  const [search, setSearch] = useState('')

  const [error, setError] = useState(false)

  const [includedInfo, setIncludedInfo] = useState([])

  console.log(includedInfo)
  useEffect(() => {
    const getData = async () => {
      try {

        const { data } = await axios.get(
          `https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search ? search : 'New'}`,
          {
            headers: {
              Authorization: 'Basic MDNmMGQ2NGIzNmM0YWIyYzg2NzNiZjM2NWVmZmViNDI6OGY2OGU4OWM1ZDM1MmRhN2MzNGJmMmU3NzVhMDQ3Njg=',
            },
          }
        )
        // setLoading(false)

        setDestinations(data.data)
        setIncludedInfo(data.included)
        console.log(data)

      } catch (error) {
        setError(true)
      }
    }
    getData()
  }, [search])



  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())

  }


  return (
    <>
      <section className="search-body text-center">

        <div className='search-functions destinationBar'>
          <p className='destinationSearch'> 🕵️‍♂️ Find your favourite place:  <input type='text' placeholder='Where do you want to go?' id='search-field' onInput={handleSearch}></input></p>
        </div>

        <div className='searched-destinations mt-4 container'>
          <div className='row gx-4'>

            {destinations.length > 0 ?
              destinations.map(destination => {
                let photoData
                try {
                  const photoId = destination.relationships.featured_photo.data.id
                  photoData = includedInfo.find(included => included.type === 'photo' && included.id === photoId)
                } catch (e) {
                  console.log(e)
                }


                return <DestinationCard key={destination.id} destination={destination} photo={photoData} />
              })
              :
              <>
                {error ?
                  <h2 className='display-5 text-center'> Something went wrong!</h2>
                  :
                  <h2 className='display-5 text-center'> Loading...</h2>
                }
              </>
            }
          </div>
        </div>

      </section>

      <footer className='fixed-bottom'>
        <div className='nav-item'>
          <p>&copy; Made by Iury and Kate 2021</p>
        </div>
      </footer>
    </>

  )
}




export default DestinationSearchPage