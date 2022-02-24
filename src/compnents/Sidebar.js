import React from "react";
import "../css/Sidebar.css";
import {
	Dashboard,
	CreditCard,
	Login,
	Logout,
	AssignmentInd,
	RocketLaunch,
} from "@mui/icons-material";

const Sidebar = () => {
	return (
		<div className='sidebar-con'>
			<div className='side'>
				<div className='logo'>Logo</div>
				<ul className='side-menu'>
					<li className='side-option'>
						<div className='side-icon'>
							<div className='side-icon-shadow'>
								<AssignmentInd />
							</div>
						</div>
						<div className='side-text'>Home</div>
					</li>

					<li className='side-option'>
						<div className='side-icon'>
							<div className='side-icon-shadow'>
								<Dashboard />
							</div>
						</div>
						<div className='side-text'>Dashboard</div>
					</li>
					<li className='side-option'>
						<div className='side-icon'>
							<div className='side-icon-shadow'>
								<RocketLaunch />
							</div>
						</div>
						<div className='side-text'>Tracking</div>
					</li>
					<li className='side-option'>
						<div className='side-icon'>
							<div className='side-icon-shadow'>
								<Login />
							</div>
						</div>
						<div className='side-text'>Sign Up</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
