import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";

const Footer = () => {
    return (
        <section>
            <Wrapper>
                <div className="bg-[#202F39] rounded-t-xl px-6 py-8">
                    {FooterData.map((item, index) => (
                        <div key={index} className="">
                            <Link href={item.route} className="text-gray-300 text-sm">{item.name}</Link>
                        </div>))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Footer;


const FooterData = [
    {
        name: "Home",
        route: "/"
    },
    {
        name: "Contac Us",
        route: "/contact-us"
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
        name: "Artificial Intelligence",
        route: "/ai"
    },
    {
        name: "Internet of Things and AI",
        route: "/iot"
    },

]