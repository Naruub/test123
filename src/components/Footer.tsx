import {IMAGES} from "../constants";

const Footer = () =>  {
    return (
        <>
            <footer
                className=" w-full end-2 padding-container relative py-8 pr-4 bottom-0 z-50 h-24 bg-default-background border-t-8 border-purple-900 ">
                <div className={"flex justify-center items-center"}>
                    <img alt={"dilliLove"} src={IMAGES[5]} width={32} height={32}></img>
                    Made by Naruub
                    <img alt={"dilliLove"} src={IMAGES[5]} width={32} height={32}></img>
                </div>
            </footer>
        </>
    );
}

export default Footer;