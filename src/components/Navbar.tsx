import {useState} from "react";
import {NAV_LINKS} from "../constants";

const Navbar = () =>  {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav
                className="flexBetween w-full end-2 padding-container relative py-8 pr-4 sticky top-0 z-50 h-24 bg-default-background border-b-8 border-purple-900 ">
                {/*<div className={"w-full h-3.5 bg-purple-900"}/>*/}
                <a href="/">
                    {/*<Image src="/dillihead.png" alt="dilli-logo" width={100} height={100} ></Image>*/}
                    <img className={"lg:hidden"} src="/dillihead.png" alt="dilli-logo" width={70} height={70}></img>
                </a>
                <ul className="hidden h-full gap-20 lg:flex lg:px-8">
                    {NAV_LINKS.map((link) => (
                        <a target={link.target} href={link.href} key={link.key}
                           className="regular-20 text-gray-50 font-semibold flexCenter cursor-pointer pb-1.5 transition-all hover:text-purple-600 hover:underline">{link.label}</a>
                    ))}
                </ul>
                {isOpen ? (
                    <img
                        onClick={() => setIsOpen((prev) => !prev)}
                        src="/close.svg"
                        alt="close"
                        width={32}
                        height={32}
                        className="inline-block cursor-pointer lg:hidden"
                    ></img>
                ) : <img
                    onClick={() => setIsOpen((prev) => !prev)}
                    src="/menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                ></img>}
            </nav>
            {isOpen ? (
                <nav
                    className={"max-container padding-container absolute w-full z-40 py-5 bg-default-background h-full lg:hidden"}>
                    <ul className={"h-full flex-wrap "}>
                        {NAV_LINKS.map((link) => (
                            <a target={link.target} href={link.href} key={link.key} onClick={() => {
                                setIsOpen((prev) => !prev);
                            }}
                               className="regular-40 text-gray-50 flexCenter cursor-pointer pt-8 pb-1.5 transition-all hover:text-purple-600 hover:underline">{link.label}</a>
                        ))}
                    </ul>
                </nav>
            ) : <></>}
        </>
    );
}
export default Navbar;