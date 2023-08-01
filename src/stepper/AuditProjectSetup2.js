import React,{useContext} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { AppContext } from './Stepper';

export default function AuditProjectSetup2() {
	const navigate = useNavigate();
	const location = useLocation();
	const {updateStep,currentStep} = useContext(AppContext);
	function handleNext(){
		updateStep(currentStep + 1);
		if(location.pathname === "/sidemain/stepper/projectsetup2"){
			navigate("/sidemain/stepper/projectsetup3");
		}else{
		navigate("/stepper/projectsetup3");
		}
	}
	function handlePrevious(){
		updateStep(currentStep - 1);
		if(location.pathname === "/sidemain/stepper/projectsetup2"){
			navigate("/sidemain/stepper");
		}else{
		navigate("/stepper");
		}
	}
  return (
    <div>
        <h1>Project setup 2</h1>
		<p>Lorem ipsum dolor sit amet.</p>
      <div className='project_setup_btn_box'>
				<div className='project_setup_btn_box_left'>
					{currentStep > 0 &&
						<button className="btn btn-md text-center btn-size create_ac_btn"
							onClick={handlePrevious}
						>Previous</button>
					}
					<table className="text-center table table-responsive">
						<thead>
							<tr>
								<th>Price Per Response</th>
								<th>*</th>
								<th>Quantity </th>
								<th>=</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
                        <tr>
								<td>INR. 1000</td>
								<td>* </td>
								<td>3</td>
								<td>=</td>
								<td>INR. 2000</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button className="btn btn-md text-center btn-size create_ac_btn"
					onClick={handleNext}
				>NEXT</button>
			</div>
    </div>
  )
}
