import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import female from "../../assets/images/female.png"
import polygonIcon from "../../assets/images/polygonIcon.png"

const BottomSection = () => {

    const checkBTN = [
        {
            name: "Product Ownership",
            icon: polygonIcon
        },
        {
            name: "Freelacing",
            icon: polygonIcon
        },
        {
            name: "Global Marketing by DAO",
            icon: polygonIcon
        },
        {
            name: "Boosting Economy",
            icon: polygonIcon
        },
    ]

    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row my-32">
                    {/* Left Box */}
                    <div className="basis-6/12 flex justify-center items-center" >
                        <Image src={female} alt="Corporate Women" className="" />
                        {/* <div className="w-6 h-6 bg-teal-400 rounded-md origin-center rotate-45 absolute left-10" />
                        */}
                    </div>

                    {/* Rigth Box */}
                    <div className="basis-6/12 flex flex-col justify-center">
                        <h3 className="font-bold text-4xl">
                            The Outcome for Participants of the Program
                        </h3>

                        <p className="text-slate-700 text-lg my-8 max-w-2xl">
                            As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.
                        </p>

                        <div className="flex flex-wrap flex-col md:flex-row md:items-center">
                            {checkBTN.map((item) => (<div className="flex items-center gap-x-3 mb-8 md:w-[50%]">
                                <Image src={item.icon} alt="Corporate Women" className="" />
                                <h4 className="font-medium text-lg">{item.name}</h4>
                            </div>))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
};

export default BottomSection;
