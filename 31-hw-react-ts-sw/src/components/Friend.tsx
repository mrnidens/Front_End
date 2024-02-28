import style from '../css_modules/bottomRound.module.css'

interface FriendProps {
    picture: string;
    pos: number;
}


const Friend: React.FC<FriendProps> = ({ picture, pos}) => {
    let styles = "col-4 p-1"
    if (pos === 7) {
        styles = `${styles} ${style.bottomLeft}`;
    }
    if (pos === 9) {
        styles = `${styles} ${style.bottomRight}`;
    }
    return (
        <img className={styles} src={picture} alt='Friend' />
    )
}

export default Friend