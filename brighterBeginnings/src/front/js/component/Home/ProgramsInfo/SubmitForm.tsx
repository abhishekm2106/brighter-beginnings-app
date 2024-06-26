import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context, ContextValue } from "../../../store/appContext";
import "../../../../styles/submit-form.css";

const SubmitForm = () => {
  const [firstName, setFirstName] = useState("");
  const [yearsOld, setYearsOld] = useState("");
  const [monthsOld, setMonthsOld] = useState("");
  const navigate = useNavigate();

  const contextValue: ContextValue | null = useContext(Context);
  if (!contextValue) {
    return null;
  }

  const { store, actions } = contextValue;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    actions.handleChildProgramSubmit(e, firstName, yearsOld, monthsOld);
    // CONDITION THE NAVIGATE WHEN SOMETHING'S OFF
    navigate("/programs");
  };

  const calculateProgressBar = () => {
    const filledInputs =
      (firstName ? 1 : 0) + (yearsOld ? 1 : 0) + (monthsOld ? 1 : 0);

    const completionPercentage = (filledInputs / 3) * 100;

    return completionPercentage;
  };

  return (
    <div className=" submit-form-container color-tree text-start fs-4">
      <form className=" submit-form-tag-container w-100" onSubmit={(e) => handleSubmit(e)}>
        <div className="submit-form-input-container w-100  ">
          <div className="submit-form-name-cointainer row  mb-3">
            <div className="submit-form-name-title col-4  pe-0">
              {/* depending on screen size have two options to render to save space when needed */}
              <p
                id="child-name"
                className="  my-auto text-end d-md-block d-none text-nowrap">
                Child's first name:
              </p>
              <p
                id="child-no-name"
                className="my-auto d-md-none d-block text-end text-nowrap">
                Child:
              </p>
            </div>
            <div className="submit-form-name-input-container col-8 ">
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="submit-form-name-input my-auto form-control"
                placeholder="Write here"
              />
            </div>
          </div>
          <div className="submit-form-age-container row ">
            <div className="submit-form-age-title-container col-4  pe-0">
              <p className="submit-form-age-title my-auto text-end ">Age:</p>
            </div>
            <div className="submit-form-age-input-years-container col-4  d-flex">
              <input
                value={yearsOld}
                onChange={(e) => {
                  setYearsOld(e.target.value);
                }}
                className="submit-form-age-input-years w-100 form-control"
                type="number"
                placeholder="Years"
              />
            </div>
            <div className="submit-form-age-input-years-container col-4 ">
              <input
                value={monthsOld}
                onChange={(e) => setMonthsOld(e.target.value)}
                className="submit-form-age-input-years w-100 form-control"
                type="number"
                placeholder="Months"
              />
            </div>
          </div>
        </div>
        <div className="submit-form-btn-container w-100 text-end mt-5 d-flex justify-content-end">
          <Link to="/programs">
            <p className="programs-info-button col-lg-4 my-auto  btn bg-sky rounded-pill text-white">
              All Programs
            </p>
          </Link>

          <button
            className="programs-info-button col-lg-3  my-auto  btn bg-grass rounded-pill text-white ms-4"
            type="submit">
            Submit
          </button>
        </div>
      </form>
      <div
        className=" submit-form-progress-bar-percent-container color-tree text-end p-2"
        style={{
          width: `${calculateProgressBar()}%`,
          transition: "ease-in 0.37s",
        }}>
        <strong className="submit-form-progress-bar-percent ms-2">{Math.round(calculateProgressBar())}%</strong>
      </div>
      <div
        className="progress bg-white p-0 w-100"
        role="progressbar"
        style={{ height: "1.85rem" }}
        aria-label="Completion Progress"
        aria-valuenow={calculateProgressBar()}
        aria-valuemin={0}
        aria-valuemax={100}>
        <div
          className="progress-bar color-tree"
          style={{ width: `${calculateProgressBar()}%` }}
        />
      </div>
    </div>
  );
};

export default SubmitForm;
