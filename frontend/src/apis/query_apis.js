import axios from "axios";

export const Run_Queries_API = async({ query, setErrorMessage, setIsEmptyTable }) => {
    try {

        const BASE_URL = import.meta.env.VITE_BASE_URL;
        const res = await axios.post(
            BASE_URL + "/query",
            {query},
            {withCredentials: true }   
        )
        const tabledata = res?.data?.result;
        const message = res?.data?.message;
        if(!tabledata) {
            throw new Error("Data Not Found");
        }

        if ((message === "Query Ran Sucessfully") && (!Array.isArray(tabledata) || tabledata.length === 0)) {
            setIsEmptyTable("Query executed successfully — no data to display.");
        }

        return tabledata

    } catch (err) {
        
        const sqlError = err.response?.data?.message;
        if (sqlError)
            setErrorMessage(sqlError)
        throw new Error( `Error Occured : ${err.message}`)

    }
}
