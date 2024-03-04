
import style from '../css_modules/farGalaxy.module.css';
import {  navItems, starWarsInfo } from '../utils/constants';
import { withHeroId } from '../hoc/withHeroId';
import withErrorPage from '../hoc/withErrorPage';

const StarWars = () => {


  return (
    <div className={style.farGalaxy}>{starWarsInfo}</div>
  )
}

export default withErrorPage(StarWars, navItems[2].route)