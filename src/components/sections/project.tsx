import { styles } from "@app/styles/styles";
import { fadeIn, slideIn, textVariant } from "@app/utils/motion";
import { motion } from "framer-motion";
import { ProjectCard } from "../ui";
import { projects } from "@app/config";
import { SectionWrapper } from "@app/hoc";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Project = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <div className="flex flex-col justify-center items-center ">
            <motion.div variants={slideIn("", "tween", 0.1, 1)}>
                <p className={`${styles.sectionHeadText} `}>{t("My work")}</p>
                <h2 className={`${styles.sectionSubText}`}>{t("Projects")}.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.div
                    variants={slideIn("", "tween", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    {t(
                        "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively."
                    )}
                </motion.div>
            </div>

            <div className="xs:mt-20 mt-10 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Project, "projects");
