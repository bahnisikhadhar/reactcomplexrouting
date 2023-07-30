import React,{useEffect} from 'react'

export default function AuditProjectSetup4({updateStep,currentStep,setIsPaymentCompleted}) {
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
