import { useState, useEffect } from 'react'
import style from "../css_modules/contact.module.css"
import { base_url } from "../utils/constants"

interface Planet {
  name: string,
}

const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);

  async function fillPlanetsFromAPI(url:string) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const planets = json.map((item: Planet) => item.name);
      setPlanets(planets);
      localStorage.setItem('planets', JSON.stringify(planets));
      localStorage.setItem('lastUpdated', new Date().getTime().toString());
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  }

  useEffect(() => {
    const storedPlanets = JSON.parse(localStorage.getItem('planets')!);
    const lastUpdated: string | null = localStorage.getItem('lastUpdated');
    if (storedPlanets && lastUpdated !== null) {
      const lastUpdatedNumber: number = parseInt(lastUpdated, 10);
      if (new Date().getTime() - lastUpdatedNumber < 30 * 24 * 60 * 60 * 1000) {
          setPlanets(storedPlanets);
      } else {
          fillPlanetsFromAPI(`${base_url}/v1/planets`);
      }
  }
  }, []);

  return (
    <div>
      <form className={style.container} onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label>First Name
          <input type="text" name="firstname" placeholder="Your first name..." />
        </label>
        <label>Last Name
          <input type="text" name="lastname" placeholder="Your last name..." />
        </label>
        <label>Planet
          <select name="planet">{
            planets.map(item => <option value={item} key={item}>{item}</option>)
          }
          </select>
        </label>
        <label>Subject
          <textarea name="subject" placeholder="Write something..." />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default Contact