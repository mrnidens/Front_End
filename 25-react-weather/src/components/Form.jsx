

const Form = ({getWeather}) => {

    const getCity = e => {
        e.preventDefault();
        const city = e.target.city.value.trim();
        getWeather(city);
    }

    return (
        <form onSubmit={getCity}>
            <input type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form