const TestimonialCarouselItem = ({data}) => {
  return (
    <>
      <div className="ltn__testimonial-item ltn__testimonial-item-7">
        <div className="ltn__testimoni-info">
          <div className="ltn__testimoni-info-inner">
              <img src={`/img/testimonial/${data.img}`} alt={`${data.name}`} />
              <div className="ltn__testimoni-name-description-1">
                <p>
                    {data.description}
                </p>
              </div>
          </div>
        </div>
        <div className="ltn__testimoni-info">
          <div className="ltn__testimoni-info-inner">
              <div className="ltn__testimoni-name-description-2">
                <p>
                    {data.description}
                </p>
              </div>
              <img src={`/img/testimonial/${data.img}`} alt={`${data.name}`} />
          </div>
          <div className="ltn__testimoni-info">
          <div className="ltn__testimoni-info-inner">
              <img src={`/img/testimonial/${data.img}`} alt={`${data.name}`} />
              <div className="ltn__testimoni-name-description-1">
                <p>
                    {data.description}
                </p>
              </div>
          </div>
        </div>
          
        </div>
      </div>
    </>
  );
};

export default TestimonialCarouselItem;
