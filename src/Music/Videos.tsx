import Video from "./Video"
const Videos = () => {

    const videos = [
        {
            name: "top-gun-anthem",
            url: "https://www.youtube.com/embed/_ThyoSu6JsA?si=-PfaLTkbB4Jr8N8P"
        },
        {
            name: "children",
            url: "https://www.youtube.com/embed/kxujI6s3NUg?si=9ZqUjK0TH6p_IhO7"
        },
        {
            name: "reborne-altered-awareness",
            url: "https://www.youtube.com/embed/bi7ibe5raxY?si=VlhUaZk3juJOnqUE"
        },
        {
            name: "crockets-theme",
            url: "https://www.youtube.com/embed/R5dL7rau_20?si=rLoafvYrLVOuCd20"
        },
        {
            name: "hot-motorway",
            url: "https://www.youtube.com/embed/mr9jENbqbHk?si=Es_Vwkane5Yb_MrX"
        },
        {
            name: "airborne",
            url: "https://www.youtube.com/embed/3Km10Kt3iho?si=AjQvxIwqm0HcyMVj"
        },
        {
            name: "out-on-the-seaside",
            url: "https://www.youtube.com/embed/kMhVcDhIMk4?si=lDUq04iQsrHLFpWY"
        },
        {
            name: "man-of-the-mountains",
            url: "https://www.youtube.com/embed/yUPz2oAwjsc?si=LG589OUZx4kVIAaC"
        },
        {
            name: "mariannka-2",
            url: "https://www.youtube.com/embed/4k4V_KtsCg8?si=2nIB17rvAsOwgMRk"
        },
        {
            name: "brave-new-year",
            url: "https://www.youtube.com/embed/fIqK2raRSPU?si=YAFjbmDe_sNll4lf"
        }
 
    ]
    return (
        <div>
            <div className="videos-title">
                YouTube videos
            </div>
            <div className="videos">
                {videos.map((video) => <Video key={video.name}url={video.url}/>)}   
            </div>
        </div>
    )
}
export default Videos;