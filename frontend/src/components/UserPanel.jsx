import React from 'react'
import { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useState } from 'react';
import ShowSchema from './ShowSchema'

const UserPanel = () => {
	const { userData } = useContext( UserContext) ;
	const [ showSchema, setShowSchema ] = useState( false );

	if(!userData) return
	const {
		employee_id, 
		fname, 
		lname, 
		salary, 
		street, 
		city, 
		state, 
		zip_code, 
		position, 
		doj
	} = userData[0];

	return (
		<div className="rounded-xl p-px transition-all duration-700 w-full h-full hover:bg-linear-to-br hover:from-green-400 hover:via-blue-800 hover:to-green-900 bg-white/10">
		<div
			className={`relative w-full h-full transition-transform duration-700 transform-3d ${
			showSchema ? "rotate-x-180" : ""}`}
		>
			<div className="relative h-full inset-0 backface-hidden">
				<div className="flex flex-col h-full gap-4 rounded-xl p-4 bg-gray-950 transition-all duration-700 hover:scale-95 overflow-hidden">

					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-3">
							<div className="bg-blue-500/20 border border-blue-400/30 rounded-full p-3 shrink-0">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
									/>
								</svg>
							</div>
							<div className="min-w-0 flex flex-col gap-1.5">
								<p className="text-white font-bold tracking-wide truncate">
									{fname} {lname}
								</p>
								<p className="text-xs text-blue-400 tracking-widest uppercase truncate">
									{position}
								</p>
							</div>
						</div>
						<button
							onClick={() => setShowSchema(true)}
							className="w-fit text-sm px-4 py-1.5 rounded-lg border border-green-500/40 text-green-400 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400/70 transition-all duration-300 tracking-wide"
						>
							{"⊞ View Schema"}
						</button>
					</div>

					<div className="border-t border-white/10" />

					<div className="grid grid-cols-2 h-full gap-3">
						<div className="bg-white/5 rounded-lg p-3">
							<p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
								Employee ID
							</p>
							<p className="text-sm text-white font-semibold truncate">
								{employee_id}
							</p>
						</div>

						<div className="bg-white/5 rounded-lg p-3">
							<p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
								Salary
							</p>
							<p className="text-sm text-white font-semibold">
								${salary?.toLocaleString()}
							</p>
						</div>

						<div className="bg-white/5 rounded-lg p-3">
							<p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
								Date Joined
							</p>
							<p className="text-sm text-white font-semibold">
								{new Date(doj).toLocaleDateString()}
							</p>
						</div>

						<div className="bg-white/5 rounded-lg p-3">
							<p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
								Zip Code
							</p>
							<p className="text-sm text-white font-semibold">
								{zip_code}
							</p>
						</div>

						<div className="bg-white/5 rounded-lg p-3 col-span-2">
							<p className="text-xs text-gray-400 tracking-widest uppercase mb-1">
								Address
							</p>
							<p className="text-sm text-white font-semibold truncate">
								{street}, {city}, {state}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-x-180">
				<ShowSchema closeSchema={() => setShowSchema(false)} />
			</div>
			
		</div>
	</div>
  );
}

export default UserPanel



