import axios from "axios";

export const Login_API = async({ employeeId, setError }) => {
    try {

        const BASE_URL = import.meta.env.VITE_BASE_URL;
        const res = await axios.post(
            BASE_URL + "/login",
            {employeeId},
            {withCredentials: true }
            
        )
        const userdata = res?.data?.result;

        if(!userdata){
            throw new Error("Employee Not Found");
        }

        return userdata

    } catch (err) {

        setError("Invalid ID")
        throw new Error( `Error Occured : ${err.message}`)
        
    }
}
