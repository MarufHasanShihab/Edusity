import "./VidePlayer.css"
import collage_video from "../../assets/college-video-6XtGR-D3.mp4"
import PropTypes from "prop-types"
import { useRef } from "react";

const VideoPlayer = ({playState,setPlayState}) => {
    const player = useRef(null);
    const closeVideo = e=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
    return (
        <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closeVideo}>
            <video src={collage_video} autoPlay muted controls loop></video>
        </div>
    );
};

VideoPlayer.propTypes = {
    playState: PropTypes.bool,
    setPlayState: PropTypes.bool
}

export default VideoPlayer;