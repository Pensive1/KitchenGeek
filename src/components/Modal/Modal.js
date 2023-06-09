import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import SearchFilterForm from "../SearchFilterForm/SearchFilterForm";
import closeBtn from "../../assets/icons/close.svg";
import "./Modal.scss";

const Modal = ({ handleClose, filters }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.dialog
        open
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
        key="modal"
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.97 }}
        exit={{ opacity: 0, scale: 0.97, duration: 7 }}
        transition={{ delay: 0.15, duration: 0.3, ease: "easeInOut" }}
      >
        <div className="modal__top-content">
          <h3>Filter by</h3>
          <img
            className="modal__close-icon"
            src={closeBtn}
            alt="Modal close button"
            onClick={handleClose}
          />
        </div>
        <SearchFilterForm onClick={handleClose} filters={filters} />
      </motion.dialog>
    </Backdrop>
  );
};

export default Modal;
