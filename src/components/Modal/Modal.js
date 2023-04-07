import Backdrop from "../Backdrop/Backdrop";
import SearchFilterForm from "../SearchFilterForm/SearchFilterForm";
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
        <SearchFilterForm
          onClick={handleClose}
          setQueryParams={setQueryParams}
        />
      </dialog>
    </Backdrop>
  );
};

export default Modal;
