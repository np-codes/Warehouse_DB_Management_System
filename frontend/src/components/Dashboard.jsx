import React from "react";
import Header from "./Header";
import UserPanel from "./UserPanel";
import QueryPanel from "./QueryPanel";
import OutputPanel from "./OutputPanel";

const Dashboard = () => {
	return (
		<div className="h-screen bg-gray-950 text-white flex flex-col overflow-hidden">
			<Header />

			<div className="flex-1 flex flex-col gap-3 p-4 overflow-hidden">
				<div className="flex flex-1 gap-3">
					<div className="w-1/2 h-full">
						<UserPanel />
					</div>
					<div className="w-1/2 h-full">
						<QueryPanel />
					</div>
				</div>
				<div className="flex-1 mt-3 overflow-auto">
					<OutputPanel />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
