import React, { useState, useEffect } from 'react';
import style from '../css_modules/contact.module.css';

const Contact = () => {
  const [planets, setPlanets] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    planet: '',
    subject: ''
  });

  useEffect(() => {
    fetch('https://sw-info-api.herokuapp.com/v1/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data))
      .catch(error => console.error('Ошибка при получении планет:', error));
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  return (
    <div className="container" style={style}>
      <h2>Contact</h2>
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" placeholder="Your name.." onChange={handleChange} value={formData.firstName} required />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" placeholder="Your last name.." onChange={handleChange} value={formData.lastName} required />

        <label htmlFor="planet">Planet</label>
        <select id="planet" name="planet" onChange={handleChange} value={formData.planet} required>
          <option value="">Select a planet</option>
          {planets.map(planet => (
            <option key={planet.id} value={planet.name}>{planet.name}</option>
          ))}
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} onChange={handleChange} value={formData.subject} required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;