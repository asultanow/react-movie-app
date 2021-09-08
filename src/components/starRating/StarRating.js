import ReactStarRating from "react-star-ratings";
import "./StarRating.css";

export default function StarRating({rating}) {
    return (
        <div className={'star-rating'}>
            <ReactStarRating
                numberOfStars={10}
                starDimension={'15px'}
                starSpacing={'2px'}
                starRatedColor={'#ff6100'}
                starEmptyColor={'#a0a0a0'}
                rating={rating}
            />
        </div>
    );
}
