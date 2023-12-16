import YouTube from "react-youtube";

interface YoutubeProps {
  options: { [x:string]: unknown };
}

const Youtube = (props: YoutubeProps) => {
  return (
      <YouTube className={"aspect-w-16 aspect-h-9"} opts={props.options}/>
  )
}

export default Youtube;
