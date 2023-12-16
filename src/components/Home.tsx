import Twitch from "./Twitch.tsx";
import Youtube from "./Youtube.tsx";

const Home = () => {
    return (
        <>
            <img className={"w-full"} src={"./YouTube-Banner.png"} alt={"banner"}/>
            <div className={"grid-rows-2"}>
                <div
                    className="lg:flex-auto flex-wrap gap-20 max-container padding-container w-full content-center pb-4">
                    <h1 className={"flex justify-center items-center max-container padding-container relative z-30 py-5 regular-20 lg:regular-40 "}>
                        <img src={"./twitch.png"} alt={"twitch"} width={75} height={75} className={"mr-6"}/>
                        Twitch Stream
                    </h1>
                    <div className={"flex justify-center"}>
                        {/*!stream goes here!*/}
                        <Twitch channel={"dillisan"}/>
                    </div>
                </div>
                <div
                    className="lg:flex-auto flex-wrap gap-20 max-container padding-container w-full content-center pb-4">
                    <h1 className={"flex justify-center items-center max-container padding-container relative z-30 py-5 regular-20 lg:regular-40 "}>
                        <img src={"./youtube_icon.png"} alt={"youtube"} width={75} height={75} className={"mr-6"}/>
                        YouTube Highlights
                    </h1>
                    <div className={"grid lg:grid-cols-2 gap-7"}>
                        <Youtube options={{
                            height: '390',
                            width: '640',
                            playerVars: {
                                list: "PLSoBnpDg8Zxd9n-aBn-d-8PxKfIrAOgXx", listType: 'playlist'
                            }
                        }}/>
                        <Youtube options={{
                            height: '390',
                            width: '640',
                            playerVars: {
                                list: "PLSoBnpDg8Zxd9n-aBn-d-8PxKfIrAOgXx", listType: 'playlist'
                            }
                        }}/>
                        <Youtube options={{
                            height: '390',
                            width: '640',
                            playerVars: {
                                list: "PLSoBnpDg8Zxd9n-aBn-d-8PxKfIrAOgXx", listType: 'playlist'
                            }
                        }}/>
                        <Youtube options={{
                            height: '390',
                            width: '640',
                            playerVars: {
                                list: "PLSoBnpDg8Zxd9n-aBn-d-8PxKfIrAOgXx", listType: 'playlist'
                            }
                        }}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;

