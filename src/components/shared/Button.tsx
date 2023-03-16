import { FC } from "react";

const Button: FC<{ title: string }> = ({ title }) => {
    return (
        <button type="button"
            className="bg-[#00616C] py-2 px-4 text-sm sm:text-lg sm:py-3 sm:px-6 rounded-full text-white font-medium hover:scale-105 duration-300 hover:shadow-lg">
            {title}
        </button>);
};

export default Button;
