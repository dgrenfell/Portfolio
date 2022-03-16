import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const cv = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* //education & exp */}
      <div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">BSc Mathematics</h5>
            <p className="font-semibold">Univeristy of Reading (2019-2022)</p>
            <p className="my-3">
              Attending the University of Reading for a BSc Mathematics degree.
              Currently in the final year, having completed various modules
              including Linear Models and Data Analysis where I participated in
              a group project analysing real data from P&G, consolidating in
              presenting our findings to audiences of varying technical
              knowledge. I also completed a Dissertation Project on Molecular
              Dynamics Simulations in which I developed a MATLAB program from
              scratch that runs a series of particle simulations. Achieved a
              high 2:1 in second year exams (69%) and a 1st in first year exams
              (81%){" "}
            </p>
          </div>
        </motion.div>
      </div>

      {/* //languages & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default cv;
