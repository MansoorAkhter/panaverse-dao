import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <section>
            <div className="flex flex-col md:flex-row bg-[#202F39] rounded-t-xl px-6 py-8">
                <div className="basis-4/12 mt-4 md:mt-0">
                    {FooterData.map((item, index) => (
                        <Link key={index} href={item.route}>
                            <p className="text-gray-300 text-sm font-light mb-1">{item.name}</p>
                        </Link>
                    ))}
                </div>

                <div className="basis-4/12 flex flex-col justify-start items-star mt-4 md:mt-0">
                    <h4 className="font-medium text-gray-300 mb-4">Follow Us:</h4>
                    {FooterSocialData.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-3 mb-3 cursor-pointer">
                            <img src={item.icon} alt={item.name} className="w-[24px] " />
                            <p className="text-gray-300 text-sm font-light ">{item.name}</p>
                        </div>
                    ))}
                </div>

                <div className="basis-4/12 flex flex-col justify-start items-star mt-4 md:mt-0">
                    <h4 className="font-medium text-gray-300 mb-4">Contact Us:</h4>
                    <h5 className=" text-gray-300 text-md font-light">+92-300-2964-143</h5>
                    <h5 className=" text-gray-300 text-sm font-light">mansoor21st@gmail.com</h5>
                </div>
            </div>
        </section >
    );
};

export default Footer;


const FooterData = [
    {
        name: "Home",
        route: "/"
    },
    {
        name: "About Us",
        route: "/about"
    },
    {
        name: "Blockchain",
        route: "/blockchain"
    },
    {
        name: "Web 3 & Metaverse",
        route: "/web3metaverse"
    },
    {
        name: "Cloud Native and Mobile Web Computing",
        route: "/cloudnative"
    },
    {
        name: "Internet of Things and AI",
        route: "/iot"
    },
    {
        name: "Artificial Intelligence",
        route: "/ai"
    },

]

const FooterSocialData = [
    {
        icon: "/facebook.svg",
        name: "Facebook"
    },
    {
        icon: "/instagram.svg",
        name: "Instagram"
    },
    {
        icon: "/linkedin.svg",
        name: "Linkedin"
    },
    {
        icon: "/twitter.svg",
        name: "Twitter"
    },
]