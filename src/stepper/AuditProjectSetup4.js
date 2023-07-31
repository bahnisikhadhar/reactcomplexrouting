import React,{useEffect,useContext} from 'react';
import { AppContext } from './Stepper';

export default function AuditProjectSetup4() {
  const {updateStep,currentStep,setIsPaymentCompleted} = useContext(AppContext);
    useEffect(() => {
        console.log(currentStep + 1);
        setIsPaymentCompleted(true);
    
      }, []);
  return (
    <div>
       <h1>Project setup Final</h1>
    </div>
  )
}
