import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@app/utils/motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";
interface IServiceCardProps {
    title: string;
    index: number;
    icon: string;
}

const ServiceCard: FC<IServiceCardProps> = ({ index, title, icon }) => {
    const {t}=useTranslation()
    return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                //@ts-ignore
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="text-white text-[20px] font-bold text-center">
                    {t(title)}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);}

export default ServiceCard;