import { navItems } from '../utils/constants'
import NavItem from './NavItem'

interface NavigationProps {
    changePage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ changePage }) => {
    return (
        <nav className="fixed-top">
            <ul className="nav mt-1 ms-5">
                {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation