import React from 'react'
import { useState } from 'react';
import { Run_Queries_API } from '../apis/query_apis';
import { useContext } from 'react';
import { QueryContext } from '../context/QueryContext';

const QueryPanel = () => {

	const [ query, setQuery ] = useState( "" )
	const { setTableData, setErrorMessage, setIsEmptyTable } = useContext( QueryContext )

	const runQuery = async() => {

		setTableData(null);
		setErrorMessage(null);
		setIsEmptyTable(null);
		
		const tabledata = await Run_Queries_API({
			query,
			setErrorMessage,
			setIsEmptyTable,
		});

		if (tabledata?.length > 0) {
			setTableData(tabledata);
			setIsEmptyTable(null);
		}
	}

  	return (
		<div className="rounded-xl h-full p-px transition-all duration-700 hover:bg-linear-to-br hover:from-green-400 hover:via-blue-800 hover:to-green-900 bg-white/10">
			<div className="flex flex-col h-full gap-4 rounded-xl p-5 bg-gray-950 transition-all duration-700 overflow-hidden">
			
				<div className="flex items-center justify-between">
					<div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm text-blue-300 font-medium">
						<h1 className='font-semibold text-2xl'>
							Query Box
						</h1>
					</div>

					<div className="flex gap-3">
						<button
							className="w-fit text-sm px-4 py-1.5 rounded-lg border border-green-500/40 text-green-400 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400/70 transition-all duration-300 tracking-wide"
							onClick={runQuery}
						>
							Run
						</button>
						<button
							className="w-fit text-sm px-4 py-1.5 rounded-lg border border-orange-500/40 text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-400/70 transition-all duration-300 tracking-wide"
							onClick={() => setQuery("")}
						>
							Clear
						</button>
					</div>
				</div>

				<div className="border-t border-white/10" />

				<div className="bg-white/5 h-full rounded-lg p-3">
					<textarea
						value={query}
						placeholder="Write your SQL query here... (e.g., SELECT * FROM users;)"
						className="w-full h-40 bg-transparent text-white text-sm outline-none resize-none placeholder-gray-500"
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>

				<p className="text-xs text-gray-500">
					Press <span className="text-blue-400 font-medium">Run</span> to
					execute query
				</p>
			</div>
		</div>
    );
}

export default QueryPanel