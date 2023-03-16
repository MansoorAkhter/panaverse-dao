import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
    return (
        <header className="z-50 sticky inset-0 bg-white bg-opacity-50 h-auto py-2 backdrop-blur-xl">
            <Wrapper>
                <div className="flex items-center justify-between">
                    <div className="">
                        <Image src={logo} alt="Panaverse Dao logo" />
                    </div>

                    <ul className="flex space-x-8 font-medium">
                        <Link href="/">
                            <li>Home</li>
                        </Link>
                        <Link href="/courses">
                            <li>Courses</li>
                        </Link>
                    </ul>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
