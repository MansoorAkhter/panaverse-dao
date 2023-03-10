import { FC } from "react";

const Button: FC<{ title: string }> = ({ title }) => {
    return (
        <button type="button"
            className="bg-[#00616C] py-3 px-6 rounded-full text-white text-lg font-medium hover:scale-105 duration-300 hover:shadow-lg">
            {title}
        </button>);
};

export default Button;
