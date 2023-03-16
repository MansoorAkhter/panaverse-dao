import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import heroPoster from "../../assets/images/heroPoster.png";


const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 leading-normal">
                        <h4 className="text-[#00616C] font-semibold mt-8 sm:mt-4">
                            Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
                        </h4>
                        <h1 className="text-4xl font-extrabold sm:text-6xl my-6">
                            Certified Web 3.0 and Metaverse Developer
                        </h1>

                        <p className="text-slate-700 max-w-xl">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </p>
                        <p className="text-slate-700 my-6">
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>
                        <div className="mt-6">
                            <Button title={"Enroll Now"} />
                        </div>

                    </div>

                    <div className="flex flex-1 justify-end items-center mt-8 sm:mt-0">
                        <Image src={heroPoster} alt="Hero Poster" className="md:max-w-xl" style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Hero;
