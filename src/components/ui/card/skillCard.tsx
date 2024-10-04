import { FC } from "react";
import { Tilt } from "react-tilt";
interface ISKillCardProps {
    title: string;
    index: number;
    icon: string;
}
const SkillCard: FC<ISKillCardProps> = ({ index: _index, title, icon }) => {
    return(
    <Tilt className="xs:w-[100px] w-full p-1 z-[100] ">
        <div className="w-full green-pink-gradient p-[1.5px] rounded-[20px] shadow-card" dir="ltr">
            <div
                //@ts-ignore
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] h-[120px]  flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-14 h-14 mb-2 object-contain"
                />

                <h3 className="text-white text-[15px] h-[40px] font-semibold text-center">
                    {title}
                </h3>
            </div>
        </div>
    </Tilt>
)}

export default SkillCard;
