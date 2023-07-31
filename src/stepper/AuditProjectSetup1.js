import React,{useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from './Stepper';

export default function AuditProjectSetup1() {
	const navigate = useNavigate();
	const location = useLocation();
	const {updateStep,currentStep} = useContext(AppContext);
	function handleNext(){
		updateStep(currentStep + 1);
		if(location.pathname==="/sidemain/stepper"){
			navigate("/sidemain/stepper/projectsetup2")
		}else{
		navigate("/stepper/projectsetup2");
		}
	}
  return (
    <div>
        <h1>Project Setup1</h1>
      <div className='project_setup_btn_box'>
				<div className='project_setup_btn_box_left'>
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
					// onClick={() => updateStep(currentStep + 1)}
					onClick={handleNext}
				>NEXT</button>
			</div>
    </div>
  )
}
