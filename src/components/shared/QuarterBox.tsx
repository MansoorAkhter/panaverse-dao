import React, { FC } from "react";

interface IProps {
    title: string;
    desc: string;
    num: number;
    haveBorder?: boolean
}

const QuarterBox: FC<IProps> = ({ title, desc, num, haveBorder = true }) => {
    return (
        <div className={`flex flex-1 flex-col justify-center rounded-md p-8 relative ${haveBorder && "border"}`}>
            <h4 className="font-bold text-lg">{title}</h4>
            <p className="mt-2 text-slate-700">{desc}</p>
            <span className="font-bold text-[170px] text-black opacity-5 absolute -top-12 right-10 -z-10">{num}</span>
        </div>
    )
}
export default QuarterBox;
