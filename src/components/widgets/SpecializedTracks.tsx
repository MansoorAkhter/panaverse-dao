'use client'
import Image from "next/image";
import QuarterBox from "../shared/QuarterBox";
import Wrapper from "../shared/Wrapper";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import { useState } from "react";

const SpecializedTracks = () => {
    const [selectedItem, setSelectedItem] = useState("wmd");
    const selectedData = programsData.find((item) => item.slug === selectedItem);

    // console.log(selectedItem, "=============");

    return (
        <section>
            <Wrapper>
                <div className="">
                    <h2 className="md:text-4xl text-2xl font-extrabold ">Specialized Tracks:</h2>
                    <p className="text-slate-700 md:max-w-xl mt-4">
                        After completing the first three quarters the participants will select one or more specializations consisting of two courses each:
                    </p>

                    <div className="flex flex-col-reverse lg:flex-row my-10 gap-x-6 gap-y-8">

                        {/* Left box */}
                        <div className="shadow-xl basis-8/12 rounded-md p-8 border border-[#00616C4D] top-10 sticky self-start">
                            <h4 className="font-medium text-primary">
                                Specialized Program
                            </h4>
                            <h3 className="text-lg sm:text-3xl font-bold max-w-lg my-4">
                                {selectedData?.program}
                            </h3>
                            <p className="text-slate-700 text-md sm:text-lg">
                                {selectedData?.programDesc}
                            </p>
                            <button className="font-semibold text-primary border border-primary rounded-lg py-1 px-2 mt-2 flex items-center gap-x-1">
                                Learn More
                                <svg className="mt-1" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row gap-x-4 mt-8 sm:mt-20">
                                {selectedData?.quarters.map((item) => (
                                    <span key={item.num}>
                                        <QuarterBox title={item.quarter} num={item.num} haveBorder={false}
                                            desc={item.description} />
                                    </span>
                                ))}
                            </div>
                        </div>




                        {/* Right Box */}
                        <div className="sm:py-6 sm:px-6 basis-4/12">

                            {programsData.map((item) => (<>
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="flex items-center gap-x-4 cursor-pointer group">
                                    <div className="flex items-center h-24 w-28">
                                        <Image src={item.image} alt="image" className="group-hover:ml-1.5 group-hover:mb-3 duration-300 absolute z-10" />
                                        <div className="bg-gradient-to-br from-[#0B4DD0] to-[#00E5FF] h-[80px] w-[110px] rounded absolute -z-0" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="font-medium text-primary text-sm">Specialized Track</h4>
                                        <h3 className="font-bold text-md">{item.program}</h3>
                                    </div>
                                </div>
                                <div className="h-[2px] bg-gray-200 my-3" />
                            </>))}

                        </div>

                    </div>
                </div>

            </Wrapper>
        </section>
    )
};

export default SpecializedTracks;


const programsData = [
    {
        slug: "wmd",
        image: image1,
        program: "Web 3.0 (Blockchain) and Metaverse Specialization",
        programDesc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
            },
        ]
    },
    {
        slug: "ai",
        program: "Artificial Intelligence (AI) and Deep Learning Specialization",
        image: image2,
        programDesc: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
            },
        ]
    },
    {
        slug: "cnc",
        program: "Cloud-Native Computing Specialization",
        image: image3,
        programDesc: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
            },
        ]
    },
    {
        slug: "ac",
        program: "Ambient Computing and IoT Specialization",
        image: image4,
        programDesc: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
            },
        ]
    },
    {
        slug: "gbs",
        program: "Genomics and Bioinformatics Specialization",
        image: image5,
        programDesc: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "Bio-351: Python for Biologists",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
            },
        ]
    },
    {
        slug: "npa",
        program: "Network Programmability and Automation Specialization",
        image: image6,
        programDesc: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        quarters: [
            {
                num: 4,
                quarter: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
            },
            {
                num: 5,
                quarter: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
            },
        ]
    },
]