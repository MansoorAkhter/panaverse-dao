import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
    return (
        <Wrapper>
            <header className="flex items-center justify-between py-2 bg-white sticky top-0 backdrop-blur-xl ">
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
            </header>
        </Wrapper>
    );
};

export default Header;
