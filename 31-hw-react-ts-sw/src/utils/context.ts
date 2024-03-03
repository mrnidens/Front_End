// StarWarsProvider.tsx

import React, { createContext, useContext, useState } from 'react';
import { StarWarsContextType } from './type';

const StarWarsContext = createContext<StarWarsContextType | undefined>(undefined);

export const StarWarsProvider: React.FC = ({ children }) => {
    const [page, setPage] = useState<string>('home');
    const [hero, setHero] = useState<any>(null); // Уточните тип героя

    return (
        <StarWarsContext.Provider value={{ page, setPage, hero, setHero }}>
            {children}
        </StarWarsContext.Provider>
    );
};

export const useStarWars = () => {
    const context = useContext(StarWarsContext);
    if (!context) {
        throw new Error('useStarWars must be used within a StarWarsProvider');
    }
    return context;
};