import Home from './Home'
import AboutMe from './AboutMe'
import StarWars from './StarWars'
import Contact from './Contact'
import { navItems } from '../utils/constants'

interface MainProps {
    page: string;
}

const Main: React.FC<MainProps> = ({ page }) => {
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