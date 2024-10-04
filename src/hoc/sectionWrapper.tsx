import { motion } from "framer-motion";
import { styles } from "@app/styles/styles";
import { FC } from "react";
import { staggerContainer } from "@app/utils/motion";

const StectionWrapper = (Component: FC<any>, idName: string) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default StectionWrapper;
