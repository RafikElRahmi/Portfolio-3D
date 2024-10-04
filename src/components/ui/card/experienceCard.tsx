import { IExperience } from "@app/config";
import { FC } from "react";
import { useTranslation } from "react-i18next";
//@ts-ignore
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface IExperienceCardProps {
    experience: IExperience;
    i: number;
}
const ExperienceCard: FC<IExperienceCardProps> = ({ experience , i}) => {
    const { t } = useTranslation();
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            position={i % 2 === 0 ? "left" : "right"}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={t(experience.date)}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[80%] h-[80%] object-contain"
                    />
                </div>
            }>
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {t(experience.title)}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {t(point)}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;
