import Backdrop from "../Backdrop/Backdrop";
import SearchFilterForm from "../SearchFilterForm/SearchFilterForm";
import closeBtn from "../../assets/icons/close.svg";
import "./Modal.scss";

const Modal = ({ handleClose, setQueryParams }) => {
  return (
    <Backdrop onClick={handleClose}>
      <h4>Modal</h4>
      <dialog
        open
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
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
        <SearchFilterForm
          onClick={handleClose}
          setQueryParams={setQueryParams}
        />
      </dialog>
    </Backdrop>
  );
};

export default Modal;
