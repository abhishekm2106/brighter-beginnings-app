import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export interface KidType {
  category: string;
  age: string;
  start: number;
  end: number;
  img: string;
  color: string;
  price: string | number;
  description: string;
  schedule: string;
  staff: string;
}

interface ProgramsAccordionProps {
  kid: KidType | null;
}

const ProgramsAccordion = ({ kid }: ProgramsAccordionProps) => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const { store, actions } = contextValue;

  if (kid) {
    return (
      <div>
        <div className="d-flex">
          <img src={kid.img} className="w-25" alt="program types" />
          <h1>{kid.category} Program Details</h1>
        </div>
        <div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Schedule</p>
          </div>
          <div>
            <p>Staff</p>
          </div>
        </div>
      </div>
    );
  } else if (store.childProgram) {
    return <div>{store.childProgram.firstName}</div>;
  }
};

export default ProgramsAccordion;
