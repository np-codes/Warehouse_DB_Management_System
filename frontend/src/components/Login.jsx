import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Login_API } from "../apis/auth_apis";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
	const [ employeeId, setEmployeeId ] = useState( "" );
	const [ error, setError ] = useState( "" );
	const { setUserData } = useContext( UserContext )
	const navigate = useNavigate()

	useEffect(() => {

		if (error) {
			const timer = setTimeout(() => {
				setError("");
				setEmployeeId("");
			}, 6000);
			return () => clearTimeout(timer);
		}

	}, [error] )

	const handleLogin = async() => {

		if(!/^\d+$/.test(employeeId)) {
			setError ("Invalid ID");
			return;
		}
		const digits = employeeId.length;
		if (digits !== 7) {
			setError("Invalid ID");
			return;
		}

		const userdata = await Login_API({employeeId, setError}); 
		setUserData(userdata)
		localStorage.setItem("user", JSON.stringify(userdata));
		navigate ("/dashboard")
	}

	return (
		<div className="absolute flex items-center w-full flex-col grid-flow-col grid-rows-3 gap-10">
			<div className=" hover-3d ">
				<div className="flex items-center justify-center px-4 ">
					<div className="relative text-center">
			
						<div className="absolute inset-0 blur-3xl bg-blue-500/20 rounded-full -z-10 " />

						<div className="text-4xl md:text-6xl font-extrabold text-center leading-tight tracking-wide">
							<span className="bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
								WAREHOUSE DATABASE
							</span>
							<br />
							<span className="bg-linear-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
								MANAGEMENT SYSTEM
							</span>
						</div>

						<div className="mt-2 mx-auto h-0.5 w-3/4 bg-linear-to-r from-transparent via-blue-400 to-transparent rounded-full" />
					</div>
				</div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div className="flex items-center justify-center gap-3 ">
				<div className="text-3xl md:text-4xl font-extrabold bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
					Run
				</div>

				<div className="text-rotate text-3xl">
					<span className="justify-items-center px-2 ">
						<span className="bg-teal-500/20 border-2 border-teal-400/40 text-teal-300 px-3 flex justify-center items-center rounded-lg font-mono font-bold text-sm md:text-base tracking-widest shadow-lg shadow-teal-500/20">
							SELECT
						</span>
						<span className="bg-red-500/20 border-2 border-red-400/40 text-red-300 px-3 flex justify-center items-center  rounded-lg font-mono font-bold text-sm md:text-base tracking-widest shadow-lg shadow-red-500/20">
						INSERT
						</span>
						<span className="bg-blue-500/20 border-2 border-blue-400/40 text-blue-300 px-3 flex justify-center items-center rounded-lg font-mono font-bold text-sm md:text-base tracking-widest shadow-lg shadow-blue-500/20">
						UPDATE
						</span>
						<span className="bg-orange-500/20 border-2 border-orange-400/40 text-orange-300 px-3 flex justify-center items-center rounded-lg font-mono font-bold text-sm md:text-base tracking-widest shadow-lg shadow-orange-500/20">
						DELETE
						</span>
					</span>
				</div>

				<div className="text-3xl md:text-4xl font-extrabold bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent tracking-tight">
				Queries
				</div>
			</div>

			<div className="rounded-2xl p-px bg-linear-to-br from-blue-500 via-blue-400 to-purple-500 shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:via-blue-400 hover:to-purple-800 hover:shadow-blue-400/50">
				<div className="bg-gray-950/90 backdrop-blur-xl p-8 rounded-2xl text-white w-80 flex flex-col gap-5">

					<div className="flex flex-col items-center gap-1 mb-2">
						<div className="bg-blue-500/20 border border-blue-400/30 rounded-full p-3 mb-1">
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
						<h2 className="text-lg font-bold tracking-widest text-white uppercase">
						Employee Login
						</h2>
						<p className="text-xs text-gray-400 tracking-wide">
						Authorized personnel only
						</p>
					</div>

					<fieldset className="flex flex-col gap-1">
						<legend className="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-1">
							Employee ID
						</legend>
						<div className="relative">
							<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0"
									/>
								</svg>
							</span>
							<input
								type="text"
								placeholder="Enter your ID..."
								className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm transition duration-200"
								value={employeeId}
								onChange={(e) => setEmployeeId(e.target.value)}
							/>
						</div>
						{ error && (
							<div className="flex flex-col items-center text-center mt-3 ">
								<p className="text-sm font-semibold text-red-500 tracking-wide">
								{error}
								</p>
							</div>
						)}
					</fieldset>

					<button
						className="w-full py-2.5 rounded-lg font-semibold text-sm tracking-widest uppercase bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 active:scale-95"
						onClick={handleLogin}
					>
						Login →
					</button>
					<p className="text-center text-xs text-gray-600">
						Access restricted to warehouse staff
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
