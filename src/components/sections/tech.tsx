import { SectionWrapper } from "@app/hoc";
import { technologies } from "@app/config";
import { styles } from "@app/styles/styles";
import { motion } from "framer-motion";
import { slideIn } from "@app/utils/motion";
import { SkillCard } from "../ui";
import { useTranslation } from "react-i18next";
// import { SkillBall } from "../canvas";

const Tech = () => {
    const {t}=useTranslation()
    return (
        <div
            className={`xl:mt-12 flex flex-col justify-center items-center gap-3 overflow-hidden`}>
            {Object.keys(technologies).map((section) => (
                <motion.div
                    key={section}
                    variants={slideIn("", "tween", 0.2, 1)}
                    className=" rounded-2xl w-full pb-5">
                    <div>
                        <h3
                            className={`${styles.sectionHeadText} text-start pb-8`}>
                            {t(section)}
                        </h3>
                        <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-y-5 xs:gap-x-5">
                            {technologies[section].map((technology, index) => (
                                <SkillCard
                                    icon={technology.icon}
                                    title={technology.name}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "skills");

//prefere use when have less than 15 skills
// <div className="">
//     <div
//         className="w-28 h-28"
//         key={technology.name}>
// {/* <SkillBall icon={technology.icon} /> */}
//     </div>
//     <div className="text-white font-medium mb-4 w-full text-center">
//         {technology.name}
//     </div>
// </div>
