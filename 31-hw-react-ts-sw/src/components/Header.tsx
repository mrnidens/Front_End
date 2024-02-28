
import Navigation from './Navigation'

interface HeaderProps {
    changePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({changePage}) => {
    return (
        <header>
            <Navigation changePage={changePage} />
            <h1 className="text-center py-4">Luke Skywalker</h1>
        </header>
    )
}

export default Header