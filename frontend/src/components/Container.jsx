import React from 'react'
import Login from './Login';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Container = () => {

	const { userData } = useContext( UserContext )
	const navigate = useNavigate()

	useEffect(() => {
		if (userData) {
			navigate("/dashboard");
		}
  	}, [userData, navigate]);
	
	return (
		<div className="absolute flex items-center justify-center top-1/2 transform -translate-y-1/2 w-full">
			<Login/>
		</div>
	);
}

export default Container