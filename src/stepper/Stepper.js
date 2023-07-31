//-----------------------ONLY ONE COMPONENT NAMED Stepper WHERE OTHER 4 COMPONENTS ARE RENDERED ONLY WITH INDEX, NO NAVIGATION INBETWEEN THE COMPONENTS (in this case 4components route define is not needed) ----------------------

// import React,{useState} from 'react';
// import AuditProjectSetup1 from './AuditProjectSetup1';
// import AuditProjectSetup2 from './AuditProjectSetup2';
// import AuditProjectSetup3 from './AuditProjectSetup3';
// import AuditProjectSetup4 from './AuditProjectSetup4';
// import { useLocation,useNavigate } from 'react-router-dom';
// import "./stepper.css";

// export default function Stepper() {
//     const steps = [AuditProjectSetup1, AuditProjectSetup2, AuditProjectSetup3, AuditProjectSetup4];
//     const labelArray = ['Basic Details', 'Store Locations', 'Review and Pay', 'All Done!'];
//     const [currentStep, setCurrentStep] = useState(0);
//     const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

//     function updateStep(step) {
//         setCurrentStep(step);
//         setIsPaymentCompleted(false);
//       }

//       const StepComponent = steps[currentStep];
//   return (
//     <div>
//        <div className={isPaymentCompleted ? "stepwrapper_col" : "stepwrapper_col1"}>
//           <div className="stepWrapper">
//             {labelArray.map((item, index) => (
//               <div className={"stepBlock" + ((currentStep > index || isPaymentCompleted) ? " selected" : "")} key={index}>
//                 <div className="circleWrapper"
//                 onClick={() => updateStep(index)}
//                 >
//                   <div className="circle">
//                     {(currentStep > index || isPaymentCompleted) && <i className="fa-solid fa-check"></i>}
//                   </div>
//                   <p>{item}</p>
//                 </div>
//               </div>
//             ))}
//             <div className='line'></div>
//           </div>
//         </div>
//         {StepComponent &&
//         <StepComponent updateStep={updateStep} currentStep={currentStep} setIsPaymentCompleted={setIsPaymentCompleted}/>
//       }
//     </div>
//   )
// }


//--------------------------------------------------------------------------------------------------

import React, { useState, createContext } from 'react';
import "./stepper.css";
import { Outlet } from 'react-router-dom';

export const AppContext = createContext();

export default function Stepper() {
  const labelArray = ['Basic Details', 'Store Locations', 'Review and Pay', 'All Done!'];
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  function updateStep(step) {
    setCurrentStep(step);
    setIsPaymentCompleted(false);
  }
  return (
    <div>
      <div className={isPaymentCompleted ? "stepwrapper_col" : "stepwrapper_col1"}>
        <div className="stepWrapper">
          {labelArray.map((item, index) => (
            <div className={"stepBlock" + ((currentStep > index || isPaymentCompleted) ? " selected" : "")} key={index}>
              <div className="circleWrapper"
                onClick={() => updateStep(index)}
              >
                <div className="circle">
                  {(currentStep > index || isPaymentCompleted) && <i className="fa-solid fa-check"></i>}
                </div>
                <p>{item}</p>
              </div>
            </div>
          ))}
          <div className='line'></div>
        </div>
      </div>
      <AppContext.Provider value={{ updateStep, currentStep, setIsPaymentCompleted }}>
        <Outlet />
      </AppContext.Provider>
    </div>
  )
}

