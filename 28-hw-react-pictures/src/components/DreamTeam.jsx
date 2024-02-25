import React from 'react';
import Gallery from './Gallery'; // Импортируем компонент галереи изображений
import { friends } from '../utils/constants'; // Предположим, что массив friends содержит ссылки на изображения

const DreamTeam = () => {
  return (
    <section className="w-100 d-flex justify-content-center align-items-center">
      <div className="w-50 border mx-1">
        <h2 className="col-12 text-center">Dream team</h2>
        <Gallery images={friends} /> {/* Передаем массив изображений в компонент галереи */}
      </div>
    </section>
  );
};

export default DreamTeam;