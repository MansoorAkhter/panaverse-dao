import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import Image from "next/image";

const SpecializedTracks = () => {
    return (
        <section>
            <Wrapper>
                <div className="">
                    <h2 className="text-4xl font-bold">Specialized Tracks:</h2>
                    <p className="text-slate-700 max-w-xl mt-4">
                        After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
                    </p>

                    <div className="flex my-10 gap-x-6 gap-y-8">

                        {/* Left box */}
                        <div className="shadow-xl basis-8/12 rounded-md px-8 py-6 border border-[#00616C4D]">
                            <h4 className="font-medium text-primary">
                                Specialized Program
                            </h4>
                            <h3 className="text-3xl font-semibold max-w-lg my-4">
                                Web 3.0 (Blockchain) and Metaverse Specialization
                            </h3>
                            <p className="text-slate-700 text-lg max-w-2xl">
                                This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                            </p>
                            <button className="font-semibold text-primary underline mt-2 flex items-center gap-x-1">
                                Learn More
                                <svg className="mt-1" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                                </svg>
                            </button>

                            <div className="flex gap-x-4 mt-28">
                                <QuarterBox title="Quarter IV" num={4} haveBorder={false}
                                    desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" />
                                <QuarterBox title="Quarter V" num={5} haveBorder={false}
                                    desc="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" />
                            </div>
                        </div>


                        {/* Right Box */}
                        <div className="py-6 px-6 basis-4/12">

                            {SpecializedTracksData.map((item) => (<>
                                <div className="flex items-center gap-x-4 cursor-pointer">
                                    <div className="flex items-center h-24 w-28">
                                        <Image src={item.image} alt="image" className="hover:ml-1.5 hover:mb-3 duration-300 absolute z-10" />
                                        <div className="bg-gradient-to-br from-[#0B4DD0] to-[#00E5FF] h-[80px] w-[110px] rounded absolute -z-0" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-medium text-primary text-sm">{item.header}</h4>
                                        <h3 className="font-bold text-lg">{item.program}</h3>
                                    </div>
                                </div>
                                <div className="h-[2px] w-[368px] bg-gray-200 my-3" />
                            </>))}

                        </div>

                    </div>
                </div>

            </Wrapper>
        </section>
    )
};

export default SpecializedTracks;


const SpecializedTracksData = [
    {
        header: "Specialized Program",
        program: "Web 3.0 (Blockchain) and Metaverse Specialization",
        image: image1
    },
    {
        header: "Specialized Program",
        program: "Artificial Intelligence (AI) and Deep Learning Specialization",
        image: image2
    },
    {
        header: "Specialized Program",
        program: "Web 3.0 (Blockchain) and Metaverse Specialization",
        image: image3
    },
    {
        header: "Specialized Program",
        program: "Artificial Intelligence (AI) and Deep Learning Specialization",
        image: image4
    },
    {
        header: "Specialized Program",
        program: "Web 3.0 (Blockchain) and Metaverse Specialization",
        image: image5
    },
    {
        header: "Specialized Program",
        program: "Artificial Intelligence (AI) and Deep Learning Specialization",
        image: image6
    },
]