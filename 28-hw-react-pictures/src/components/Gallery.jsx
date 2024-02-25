import React, { useState } from 'react';

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (index) => {
        setSelectedImage(selectedImage === index ? null : index);
    };

    return (
        <div className="row">
            {images.map((image, index) => (
                <div key={index} className={`col-4 mb-4${selectedImage !== null ? ' d-none' : ''}`}>
                    <div className="image-container">
                        <img
                            src={image}
                            alt={`Image ${index}`}
                            className="img-fluid"
                            onClick={() => handleClick(index)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            ))}
            {selectedImage !== null && (
                <div className="col-12 mb-4">
                    <div className="image-container">
                        <img
                            src={images[selectedImage]}
                            alt={`Image ${selectedImage}`}
                            className="img-fluid"
                            onClick={() => setSelectedImage(null)}
                            style={{ cursor: 'pointer', width: '100%' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;