// types.d.ts

import { Dispatch, SetStateAction } from 'react';

export interface StarWarsContextType {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
    hero: any; // Уточните тип героя
    setHero: Dispatch<SetStateAction<any>>;
}