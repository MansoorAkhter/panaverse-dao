import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import heroPoster from "../../assets/images/heroPoster.png";
import Button from "../shared/Button";

const Hero = () => {
    return (
        <section className="bg-gray-100">
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 leading-normal">
                        <h4 className="text-[#00616C] font-semibold mt-4">
                            Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </h4>
                        <h1 className="text-5xl font-bold sm:text-6xl my-3">
                            Certified Web 3.0 and Metaverse Developer
                        </h1>

                        <p className="text-slate-600 ">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </p>
                        <p className="text-slate-600 my-3">
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                        <div className="">
                            <Button title={"Learn More"} />
                            <Button title={"Enroll Now"} />
                        </div>

                    </div>

                    <div className="flex-1 justify-end items-center flex">
                        <Image src={heroPoster} alt="Hero Poster" className="md:max-w-xl" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;
