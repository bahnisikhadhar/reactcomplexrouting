import React from 'react'

export default function AuditProjectSetup2({updateStep,currentStep}) {
  return (
    <div>
        <h1>Project setup 2</h1>
      <div className='project_setup_btn_box'>
				<div className='project_setup_btn_box_left'>
					{currentStep > 0 &&
						<button className="btn btn-md text-center btn-size create_ac_btn"
							onClick={() => updateStep(currentStep - 1)}
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
					onClick={() => updateStep(currentStep + 1)}
				>NEXT</button>
			</div>
    </div>
  )
}
