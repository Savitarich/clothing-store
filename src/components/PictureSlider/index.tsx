import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PictureSlider: React.FC<{ imgUrl: string[] }> = ({ imgUrl }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {imgUrl.map((item) => (
                    <div
                        className='slide'
                        key={item}
                    >
                        <img
                            src={item}
                            alt={item}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
