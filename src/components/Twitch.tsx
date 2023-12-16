import {TwitchPlayer, TwitchPlayerInstance} from "react-twitch-embed";
import {useRef} from "react";

interface TwitchPlayerProps {
    channel: string;
}
const Twitch = (props: TwitchPlayerProps) => {
    const embed = useRef();
    const handleReady = (e: TwitchPlayerInstance | undefined) => {
        embed.current = e as undefined;
    }

  return(
    <TwitchPlayer width={900} channel={props.channel} autoplay muted onReady={handleReady} />
  )
}
export default Twitch;