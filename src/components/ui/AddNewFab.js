import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

const AddNewFab = () => {
  const dispatch = useDispatch();

  const openModalAddEvent = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button onClick={openModalAddEvent} className="btn btn-primary fab">
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNewFab;
