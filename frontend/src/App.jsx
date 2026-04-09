import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom";
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { QueryContext } from "./context/QueryContext"
import { useMemo } from "react";

function App() {
	
	const [ userData, setUserData ] = useState( null );
	const [ tableData, setTableData ] = useState( null );
	const [ errorMessage, setErrorMessage ] = useState( null );
	const [ isEmptyTable, setIsEmptyTable ] = useState( null );

	const values = useMemo(() => ({
		tableData,
		setTableData,
		errorMessage,
		setErrorMessage,
		isEmptyTable,
		setIsEmptyTable,
		}),[tableData, errorMessage, isEmptyTable]);
	
	useEffect(() => {
		const user = localStorage.getItem("user");
		if(user) {
		setUserData(JSON.parse(user));
		}
	}, []);

	return (
		<>
			<UserContext.Provider value={{ userData, setUserData }}>
				<BrowserRouter basename="/">
					<Routes>
						<Route path="/" element={<Container />} />
						<Route
							path="/dashboard"
							element={
								<QueryContext.Provider value={values}>
									<Dashboard />
								</QueryContext.Provider>
							}
						/>
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;