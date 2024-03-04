import { useContext } from 'react'
import { SWContext } from '../utils/context'
import { characters } from '../utils/constants'

const Hero = () => {
    const {hero} = useContext(SWContext)
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={characters[hero].img} alt="Hero" />
        </section>
    )
}

export default Hero