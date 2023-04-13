import { motion } from "framer-motion";
import "./Backdrop.scss";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      key="backdrop"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ duration: 1, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
