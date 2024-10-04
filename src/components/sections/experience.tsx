import { SectionWrapper } from "@app/hoc";
//@ts-ignore
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "../ui";
import { motion } from "framer-motion";
import { textVariant } from "@app/utils/motion";
import { styles } from "@app/styles/styles";
import { experiences } from "@app/config";
import { useTranslation } from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();
  
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionHeadText} text-center`}>
                    {t("What I have done so far")}
                </p>
                <h2 className={`${styles.sectionSubText} text-center`}>
                    {t("Work Experience")}.
                </h2>
            </motion.div>
            <div className="mt-20 flex flex-col" dir="ltr">
                <VerticalTimeline layout={"2-columns"}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                            i={index}
                        />
                    ))}
                </VerticalTimeline>
            </div>
          
        </>
    );
};

export default SectionWrapper(Experience, "experience");
