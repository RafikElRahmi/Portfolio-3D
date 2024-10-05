import { IMAGES, IPojects } from "@app/config";
import { fadeIn, slideIn } from "@app/utils/motion";
import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Tilt } from "react-tilt";

interface IProjectProps extends IPojects {
    index: number;
}
const ProjectCard: FC<IProjectProps> = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    const { t } = useTranslation();
    return (
        <motion.div variants={slideIn("", "tween", 0.1, 1)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
                <div className="relative w-full h-[200px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {source_code_link && (
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={() =>
                                    window.open(source_code_link, "_blank")
                                }
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img
                                    src={IMAGES.tech.github}
                                    alt="source code"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-5 grid h-max">
                    <h3 className="text-white font-bold text-[24px]">
                        {t(name)}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {t(description)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                                dir="ltr">
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default ProjectCard;
