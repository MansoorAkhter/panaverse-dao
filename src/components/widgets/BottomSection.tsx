import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import female from "../../assets/images/female.png"

const BottomSection = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex">
                    <div className="basis-6/12">
                        <div className="">
                            <Image src={female} alt="Corporate Women" width={500} height={600} />
                        </div>
                    </div>

                    <div className="basis-6/12 bg-red-400"></div>
                </div>
            </Wrapper>
        </section>
    )
};

export default BottomSection;
