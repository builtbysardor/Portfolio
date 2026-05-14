import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

type ServiceCardProps = { index: number; title: string; icon: string };

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export const About = () => (
  <SectionWrapper idName="about">
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(undefined, undefined, 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm <span className="text-white font-semibold">Sardor</span> — a
        18-year-old self-taught developer from Samarkand, Uzbekistan. I
        specialise in building production-grade full-stack web applications with{" "}
        <span className="text-[#915eff]">Next.js</span> and{" "}
        <span className="text-[#915eff]">FastAPI</span>, containerised DevOps
        infrastructure with <span className="text-[#915eff]">Docker &amp; Linux</span>,
        and real-time <span className="text-[#915eff]">cybersecurity</span> tooling.
        I'm a fast learner who ships clean, scalable code — let's build something
        great together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} index={i} {...s} />
        ))}
      </div>
    </>
  </SectionWrapper>
);
