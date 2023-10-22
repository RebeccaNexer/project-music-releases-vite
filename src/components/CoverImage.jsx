import PropTypes from 'prop-types';
import heart from '../assets/icons/heart.svg';
import play from '../assets/icons/play.svg';
import dots from '../assets/icons/dots.svg';

export const CoverImage = ({ images }) => {
    return (
        <div className="coverWrapper">
        <div className="coverImage">
        <img className="img" src={images} alt="cover image" height="250" width="250" />
        <span className="icons">
                <img src={heart} alt="heart icon" className='heartIcon'/>
                <img src={play} alt="play icon" className='playIcon'/>
                <img src={dots} alt="dots icon" className='dotsIcon' />
            </span> 
            </div>
        </div>
    );
};

export default CoverImage;

CoverImage.propTypes = {images: PropTypes.string.isRequired};