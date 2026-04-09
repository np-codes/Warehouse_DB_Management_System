import React from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Header = () => {

	const { setUserData } = useContext( UserContext );
	const navigate = useNavigate();
	
	const handleLogout = () => {
		setUserData(null);
		navigate("/")
		localStorage.removeItem("user");
		localStorage.clear()
	}

	return (
		<nav className="w-full flex items-center justify-between px-6 py-3 bg-gray-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30">
			<div className="flex items-center gap-3">
				<div className="w-2 h-6 bg-linear-to-b from-blue-400 to-purple-500 rounded-full" />
				<span className="font-mono font-bold tracking-widest text-sm md:text-base uppercase bg-linear-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
					Warehouse Database Management System
				</span>
			</div>

			<button 
				className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:border-red-400/50 transition-all duration-200 font-mono text-sm font-semibold tracking-wide active:scale-95"
				onClick={handleLogout}
			>
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
						d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
					/>
				</svg>
				Logout
			</button>
		</nav>
	);
}

export default Header