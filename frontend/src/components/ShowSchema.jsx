import React from 'react'
import WarehouseSchema from '../context/WarehouseSchema.png' 

const ShowSchema = ({ closeSchema }) => {

	return (
		<div className="rounded-xl h-full p-px transition-all duration-700 hover:bg-linear-to-br hover:from-green-400 hover:via-blue-800 hover:to-green-900 bg-white/10">
			<div className="absolute inset-0 backface-hidden">
				<div className="flex flex-col h-full gap-4 rounded-xl p-4 bg-gray-950 transition-all duration-700 hover:scale-95 overflow-hidden">
					<div className="flex items-center justify-between gap-3">
						<div className="flex items-center gap-3">
							<div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1 text-sm text-blue-300 font-medium">
								Warehouse DataBase Schema
							</div>
						</div>
						<button
							onClick={() => closeSchema()}
							className="w-fit text-sm px-4 py-1.5 rounded-lg border border-green-500/40 text-green-400 bg-green-500/10 hover:bg-green-500/20 hover:border-green-400/70 transition-all duration-300 tracking-wide"
						>
							{"⊞ Close Schema"}
						</button>
					</div>

					<div className="border-t border-white/10" />

					<div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
						<img
							src={WarehouseSchema}
							alt="Schema"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ShowSchema