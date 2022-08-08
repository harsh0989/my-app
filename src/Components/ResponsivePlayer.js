import React from "react"
import ReactPlayer from 'react-player'
import '../Assets/ResponsivePlayer.css'

const ResponsivePlayer = (props) => {
const videoPlay=()=>{
    props.setIcon(true)
}
    return (
        <div className='player-wrapper' >
            <ReactPlayer
                onEnded={props.endOfVid}
                className='react-player'
                playing={true}
                muted={props.muted}
                onStart={videoPlay}
                url={props.url}
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default ResponsivePlayer