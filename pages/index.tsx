import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = ({ endpoint }) => {
  console.log(endpoint);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Detail-oriented Mathematics student at the University of Reading with
        background working productively in dynamic environments. Fluent in
        Python and JavaScript programming languages used to develop Web
        Applications. A highly organised and efficient individual, focused on
        achieving project objectives with speed and accuracy.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              variants={fadeInUp}
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// ==== FOR PAGES THAT REQUIRES UPDATING THE DATABASE ON REFRESH ====
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // calculation

  // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
  // const data = await res.json();

  return {
    props: {
      endpoint: process.env.VERCEL_URL,
    },
  };
};

// ==== FOR STATIC DATA THAT IS RUN ONCE ON BUILD ====
// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // calculation

//   const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   const data = await res.json();

//   return {
//     props: {
//       endpoint: process.env.VERCEL_URL,
//     },
//   };
// };
