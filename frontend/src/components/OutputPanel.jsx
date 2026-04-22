import React from 'react'
import { useContext } from 'react'
import { QueryContext } from '../context/QueryContext'
import { useState } from 'react'

const OutputPanel = () => {

	const {
		tableData,
		errorMessage,
		setTableData,
		setErrorMessage,
		isEmptyTable,
		setIsEmptyTable,
  	} = useContext( QueryContext );

	return (
		<div className="rounded-xl h-full p-px transition-all duration-700 hover:bg-linear-to-br hover:from-green-400 hover:via-blue-800 hover:to-green-900 bg-white/10">
			<div className="flex flex-col h-full gap-4 rounded-xl p-5 bg-gray-950 transition-all duration-700 overflow-hidden">
				<div className="relative flex items-center">
					<div className="mx-auto">
						<div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm text-blue-300 font-medium">
							<h1 className="font-semibold text-2xl">Query Result</h1>
						</div>
					</div>

					<div className="absolute right-0 flex gap-3">
						<button
						className="w-fit text-sm px-4 py-1.5 rounded-lg border border-orange-500/40 text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-400/70 transition-all duration-300 tracking-wide"
						onClick={() => {
							setTableData(null);
							setErrorMessage(null);
							setIsEmptyTable(null);
						}}
						>
						Clear
						</button>
					</div>
				</div>

				<div className="border-t border-white/10" />

				{errorMessage && (
					<div>
						<div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-red-500/40 bg-red-500/10">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-4 h-4 text-red-400 shrink-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p className="text-sm text-red-400 font-medium">{errorMessage}</p>
						</div>
					</div>
				)}
				
				{isEmptyTable ? (
				<div>
					<div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-purple-500/40 bg-purple-500/10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4 text-purple-400 shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<p className="text-sm text-purple-400 font-medium">
						{isEmptyTable}
					</p>
					</div>
				</div>
				) : (
				<div className="h-full overflow-auto no-scrollbar">
					{tableData && (
					<div>
						<div className="border border-white/10 overflow-x-auto ">
						<table className="w-full text-sm text-left ">
							<thead>
							<tr className=" border-white/10 bg-[rgba(16,20,30,1)] sticky top-0 z-10">
								{Object.keys(tableData[0]).map((key, index) => (
								<th
									key={index}
									className="px-4 py-2.5 text-xs text-gray-400 tracking-widest uppercase font-semibold whitespace-nowrap "
								>
									{key}
								</th>
								))}
							</tr>
							</thead>
							<tbody>
							{tableData.map((row, rindex) => (
								<tr
								key={rindex}
								className="border-b border-white/5 hover:bg-white/5 transition-colors duration-150 hover:bg-linear-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-teal-500/10"
								>
								{Object.values(row).map((val, vindex) => (
									<td
									key={vindex}
									className="px-4 py-2.5 text-sm text-gray-300 whitespace-nowrap"
									>
									{val}
									</td>
								))}
								</tr>
							))}
							</tbody>
						</table>
						</div>
					</div>
					)}
				</div>
				)}
			</div>
		</div>
  );
}

export default OutputPanel