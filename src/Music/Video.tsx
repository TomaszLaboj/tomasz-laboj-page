interface VideoProps {
    url: string;
}

const Video = ({url}: VideoProps) => {
    return (
        <div className="one-video">
            <iframe
                width="420"
                height="236.25"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow=""
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div> 
    )
}
export default Video;