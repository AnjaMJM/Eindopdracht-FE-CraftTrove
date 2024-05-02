import "./GallerySlider.css"

function GallerySlider({images}) {
    return (
        <section className="gallery-slider__container">
            {images.map((image, index) => (
                <div className="gallery-slider__item" key={index}>
                    <input type="radio" id={index} defaultChecked={true} name="gallery" className="gallery__selector"/>
                    <img className="gallery__img" src={image} alt=""/>
                    <label htmlFor={index} className="gallery__thumb-label">
                        <img src={image} alt=""/>
                    </label>
                </div>))}
        </section>
    );
}

export default GallerySlider;