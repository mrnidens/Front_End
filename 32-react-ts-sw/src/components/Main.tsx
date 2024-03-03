import { navItems } from '../utils/constants'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import StarWars from './StarWars'

interface Props {
    page: string
}

const Main = ({ page }: Props) => {
    switch (page) {
        case navItems[1]:
            return <AboutMe />
        case navItems[2]:
            return <StarWars />
        case navItems[3]:
            return <Contact />
        default:
            return <Home />
    }

}

export default Main