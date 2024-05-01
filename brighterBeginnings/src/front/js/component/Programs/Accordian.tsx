import React, { useContext, useState } from "react";
import { Context } from "../../store/appContext";
import { AccordionDataType } from "./ProgramType";
import "../../../styles/accordian.css";

interface Accordion2Props {
  accordianData: AccordionDataType | null;
  imgFirst?: boolean;
}

const Accordion = ({
  accordianData,
  imgFirst,
}: Accordion2Props): JSX.Element | null => {
  const contextValue = useContext(Context);
  const [rotate, setRotate] = useState(-1);

  if (!contextValue) {
    return <div>Loading...</div>;
  }

  // This is needed because accordionData may be null
  if (!accordianData) {
    return null;
  }

  // Not rendering any accordion
  if (accordianData.accordion_title === "") return null;

  // handleRotate from arrow

  // Rendering dessired accordion
  return (
    <div
      className="accordion w-75 mx-auto text-center pt-5 pb-5"
      id="accordion2">
      <div className="accordion-item w-100 mx-auto text-center">
        {imgFirst ? (
          // IMAGE FIRST
          <div className="accordion-img-title-content w-100 mx-auto d-flex text-center justify-content-center">
            <div className="accordion-img-content w-75 d-flex justify-content-center">
              <img
                src={accordianData.img}
                className="accordion-img-first pb-2"
                alt={accordianData.img}
              />
              <h3 className="accordion-title m-auto text-center">
                {accordianData.accordion_title}
              </h3>
            </div>
          </div>
        ) : (
          // TITLE FIRST
          <div className="accordion-img-title-content d-flex my-auto justify-content-start">
            <div className="accordion-title-content  my-auto">
              <h3 className="accordion-title fs-1">
                {accordianData.accordion_title}
              </h3>
            </div>
            <div className="accordion-img-content w-25 text-start my-auto">
              <img
                src={accordianData.img}
                className="accordion-img w-75 pb-2"
                alt={accordianData.img}
              />
            </div>
          </div>
        )}
        <div className="accordion-items-container">
          {accordianData.dropdownData.map(
            (accordionContent, accordionContentIndex) => {
              return (
                <div className="accordion-item p-1" key={accordionContentIndex}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button d-flex bg-white border-${accordionContent.color}-1 color-${accordionContent.color}  `}
                      onClick={() => setRotate(accordionContentIndex)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${accordionContentIndex}`}
                      aria-expanded="true"
                      aria-controls={`collapse${accordionContentIndex}`}>
                      <p className="accordion-item-title my-auto">
                        <strong>{accordionContent.title}</strong>
                      </p>
                      {/* STYLE IT AND MAKE IT ROTATE 180 DEGREES WHEN CLICKED */}
                      <i
                        className={`accordion-title-arrow fa-solid fa-chevron-down ${
                          rotate === accordionContentIndex
                            ? "transform-180"
                            : "transform-0"
                        }`}
                      />
                    </button>
                  </h2>
                  <div
                    id={`collapse${accordionContentIndex}`}
                    className={`accordion-collapse collapse `}
                    data-bs-parent="#accordion2">
                    <div className="accordion-body">
                      {accordionContent.description}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
