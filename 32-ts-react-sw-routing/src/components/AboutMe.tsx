import React, { useEffect, useState } from 'react';
import style from "../css_modules/aboutMe.module.css";
import { base_url, period_month } from "../utils/constants";
import { useParams } from 'react-router-dom';

const AboutMe = () => {
    const [hero, setHero] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const { heroId } = useParams<{ heroId?: string }>();

    useEffect(() => {
        const fetchHeroInfo = async () => {
            try {
                let info;
                if (!heroId || heroId.length === 0) {
                    const response = await fetch(`${base_url}/v1/peoples/1`);
                    info = await response.json();
                    localStorage.setItem('hero', JSON.stringify({
                        time: Date.now(),
                        payload: info
                    }));
                } else {
                    const response = await fetch(`${base_url}/v1/peoples/${heroId}`);
                    if (response.ok) {
                        info = await response.json();
                    } else {
                        // Если герой с заданным id не найден, загружаем информацию о Люке Скайвокере
                        const responseLuke = await fetch(`${base_url}/v1/peoples/1`);
                        info = await responseLuke.json();
                    }
                }
                setHero(info);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching hero information:", error);
                setLoading(false);
            }
        };

        fetchHeroInfo();
    }, [heroId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={`${style.farGalaxy} ${style.hero_box}`}>
                <p><span className={style.hero_titles}>name:</span> {hero.name}</p>
                <p><span className={style.hero_titles}>height:</span> {hero.height}</p>
                <p><span className={style.hero_titles}>birth year:</span> {hero.birth_year}</p>
                <p><span className={style.hero_titles}>gender:</span> {hero.gender}</p>
                <p><span className={style.hero_titles}>mass:</span> {hero.mass}</p>
                <p><span className={style.hero_titles}>hair color:</span> {hero.hair_color}</p>
                <p><span className={style.hero_titles}>skin color:</span> {hero.skin_color}</p>
                <p><span className={style.hero_titles}>eye color:</span> {hero.eye_color}</p>
            </div>
        </div>
    );
};

export default AboutMe;