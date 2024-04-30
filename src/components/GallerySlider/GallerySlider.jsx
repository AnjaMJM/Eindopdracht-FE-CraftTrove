import React from 'react';

function GallerySlider({images}) {
    return (
        <section className="gallery">
            {images.map((image, index) => (
            <div className="gallery__item">
                <input type="radio" id="img-1" checked name="gallery" className="gallery__selector"/>
                <img className="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
                <label htmlFor="img-1" className="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg"
                                                                       alt=""/></label>
            </div>))}
        </section>
    );
}

export default GallerySlider;