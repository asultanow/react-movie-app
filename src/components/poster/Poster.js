import "./Poster.css";
import {posterBaseURL} from "../../services/api.service";

export default function Poster({posterPath}) {
    return (
        <div className={'poster'}>
            <img src={`${posterBaseURL}${posterPath}`} alt={''}/>
        </div>
    );
}
