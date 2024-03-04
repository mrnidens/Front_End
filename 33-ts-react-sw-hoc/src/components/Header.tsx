import { useContext } from 'react';
import Navigation from './Navigation';
import { SWContext } from '../utils/context';
import { characters } from '../utils/constants';

const Header = () => {
    const { hero } = useContext(SWContext);


    //заглушка
    if (!hero || !characters[hero]) {
        return (
            <header>
                <Navigation />
                <h1 className="text-center py-4">Loading...</h1>
            </header>
        );
    }

    return (
        <header>
            <Navigation />
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    );
};

export default Header;