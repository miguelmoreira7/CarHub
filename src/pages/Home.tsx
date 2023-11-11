import { useEffect, useState } from "react"
import { CustomFilter, Hero, SearchBar, CarCard } from "../components"
import { fetchCars } from "../utils"
import { Car } from "../types/index"
import { useSearchParams } from "react-router-dom"


const Home = () => {

  const [cars, setCars] = useState<Car[]>([]);
  const [searchParams] = useSearchParams()

  const getCars = async () => {
    await fetchCars(searchParams).then(data => setCars(data))
  };
  
  useEffect(() => {
    getCars();
    
  }, [searchParams]);

  const isDataEmpty = cars.length === 0 || !cars

  return (
    <div className="overflow-hidden">
        <Hero/>
        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">            
            </div>
          </div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {cars?.map((car, index) => (<CarCard car={car} key={index}/>))}
              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h2 className="tect-black text-xl font-bold">Oops, no results</h2>
              <p>a</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home