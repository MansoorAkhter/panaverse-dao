import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import female from "../../assets/images/female.png"
import polygonIcon from "../../assets/images/polygonIcon.png"

const BottomSection = () => {

    const checkBTN = ["Product Ownership", "Freelacing", "Global Marketing by DAO", "Boosting Economy"]

    return (
        <section>
            <Wrapper>
                <div className="flex flex-col-reverse md:flex-row my-32">
                    {/* Left Box */}
                    <div className="basis-6/12 flex justify-center items-center mt-16 md:mt-0" >
                        <Image src={female} alt="Corporate Women" />
                    </div>

                    {/* Rigth Box */}
                    <div className="basis-6/12 flex flex-col justify-center">
                        <h3 className="font-extrabold text-4xl max-w-xl">
                            The Outcome for Participants of the Program
                        </h3>

                        <p className="text-slate-700 my-8 max-w-2xl text-justify md:text-left">
                            As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistans software exports.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4">
                            {checkBTN.map((item, index) => (
                                <div key={index} className="flex items-center gap-x-3 mb:2 sm:mb-8">
                                    <Image src={polygonIcon} alt="check icon" className="w-auto h-auto" />
                                    <h4 className="font-medium text-lg">{item}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
};

export default BottomSection;
