import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@app/utils/motion";
import { styles } from "@app/styles/styles";
import { CanvasEarth } from "../canvas";
import { SectionWrapper } from "@app/hoc";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_peppf5h",
                "template_xv2twi9",
                {
                    from_name: form.name,
                    to_name: "Rafik Rahmi",
                    from_email: form.email,
                    to_email: "rafikrahmi10@gmail.com",
                    message: form.message,
                },
                "7fqm7oFQCKxr1bX-G"
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        t(
                            "Thank you. I will get back to you as soon as possible."
                        )
                    );

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert(t("Ahh, something went wrong. Please try again."));
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row justify-center items-center flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-2 md:p-8 rounded-2xl w-full">
                <p className={styles.sectionHeadText}>{t("Contact")}</p>
                <h3 className={styles.sectionSubText}>{t("Get in touch")}</h3>

                <form
                    //@ts-ignore
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8">
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t("Your Name")}
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder={t("What's your name?")}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t("Your email")}
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder={t("What's your web address?")}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            {t("Your Message")}
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder={t("What you want to say?")}
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary place-self-end">
                        {loading ? t("Sending...") : t("Send")}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className=" md:h-[650px] h-[350px] md:w-[650px] w-[350px]">
                <CanvasEarth />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
