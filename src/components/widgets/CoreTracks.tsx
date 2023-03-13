import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import QuarterBox from "../shared/QuarterBox";

const CoreTrackData = [
    {
        num: 1,
        title: "Quarter I",
        desc: "CS-101: Object-Oriented Programming using TypeScript",
    },
    {
        num: 2,
        title: "Quarter II",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    },
    {
        num: 3,
        title: "Quarter III",
        desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    },
]

const CoreTracks = () => {

    return (
        <section className="mt-16 lg:mt-28">
            <Wrapper>
                <div className="max-w-screen-md">
                    <h4 className="uppercase font-bold text-lg text-primary">
                        Program of Studies
                    </h4>
                    <h2 className="text-4xl font-bold my-4 whitespace-pre-line">Core Courses {`\n`}
                        (Common in All Specializations):
                    </h2>
                    <p className="text-slate-700">
                        Every participant of the program will start by completing the following three core courses:
                    </p>

                    <div className="mt-5">
                        <Button title="Learn More" />
                    </div>
                </div>

                {/* Boxes */}
                <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
                    {CoreTrackData.map((item) => (
                        <div key={item.num} className="flex flex-1">
                            <QuarterBox title={item.title} desc={item.desc} num={item.num} />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>

    );
};

export default CoreTracks;
