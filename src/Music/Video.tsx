interface VideoProps {
    url: string;
}

const Video = ({url}: VideoProps) => {
    return (
        <div className="video-frame">
            <div>video</div>
            <iframe
                width="420"
                height="236.25"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>

            </iframe>
        </div>
    )
}
export default Video;