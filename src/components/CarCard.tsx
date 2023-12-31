import { Car } from "../types"
import {useState} from 'react'
import { CarDetails, CustomButton } from ".";
import { calculateCarRent, generateImageUrl } from "../utils";


interface CarCardProps {
    car: Car;
}

const CarCard = ({car}: CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car
    const carRent = calculateCarRent(city_mpg, year)

    const [isOpen, setIsOpen] = useState(false)
    

  return (
    <div className="car-card group">
        <div className="car-card__content">
            <h2 className="car-card__content-title">
                {make} {model}
            </h2>
        </div>
        <p className="car-card__price">
            <span className="car-card__price-dollar">
                $
            </span>
                {carRent}
            <span className="car-card__price-day">
                /day
            </span>
        </p>
        <img src={generateImageUrl(car)} alt="car model" className="car-card__image"/>
        <div className="relative flex w-full mt-2">
            <div className="car-card__icon-container">
                <div className="car-card__icon">
                    <img src="/steering-wheel.svg" alt="steering wheel" className="w-5 h-5"/>
                    <p className="car-card__icon-text">
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="car-card__icon">
                    <img src="/tire.svg" alt="tire" className="w-5 h-5"/>
                    <p className="car-card__icon-text">
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="car-card__icon">
                    <img src="/gas.svg" alt="gas" className="w-5 h-5"/>
                    <p className="car-card__icon-text">
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
            <div className="car-card__btn-container">
                <CustomButton
                title='View more'
                containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                textStyles="text-white text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard