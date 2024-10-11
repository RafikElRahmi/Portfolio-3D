import { SectionWrapper } from "@app/hoc";
import { styles } from "@app/styles/styles";
import { fadeIn, textVariant } from "@app/utils/motion";
import { motion } from "framer-motion";
import { services } from "@app/config";
import { ServiceCard } from "../ui";
import { useTranslation } from "react-i18next";
import { Tilt } from "react-tilt";

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionHeadText}>{t("Introduction")}</p>
                <h2 className={styles.sectionSubText}>{t("Overview")}.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                {t(
                    "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like Reactjs, React-native, Node.js, and Next.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
                )}
            </motion.p>
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 w-[200px] text-[17px] green-pink-gradient p-[1.5px] rounded-[5px] shadow-card text-center">
                    <a
                        href="/Rafik_Rahmi_CV.pdf"
                        target="blank"
                        className="block text-white bg-tertiary rounded-[5px] w-full p-[10px] ">
                        {t("download CV")}
                    </a>
                </motion.div>
            </Tilt>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
