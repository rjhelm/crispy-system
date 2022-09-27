import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../../../assets/images';
import kitchenSale from '../../../assets/images';
import poco from '../../../assets/images';
import realme from '../../../assets/images';
import fashionSale from '../../../assets/images';
import oppo from '../../../assets/images';

export const PreviousBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIosIcon />
        </div>
    )
}

export const NextBtn = ({ className, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIosIcon />
        </div>
    )
}

const Banner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousBtn />,
        nextArrow: <NextBtn />,
    };

    const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];

    return (
        <>
            <section className='h-44 sm:h-72 w-full rounded-sm shadow relative overflow-hidden'>
                <Slider {...settings} />
                {banners.map((el, i) => (
                    <img draggable='false' className='h-44 sm:h-72 w-full object-cover' src={el} alt='banner' key={i} />
                ))}
            </section>
        </>
    );
}

export default Banner;