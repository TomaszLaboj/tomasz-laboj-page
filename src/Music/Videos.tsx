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

        

        
    ]
    return (
        <div>
          {videos.map((video) => <Video key={video.name}url={video.url}/>)}   
        </div>
    )
}
export default Videos;