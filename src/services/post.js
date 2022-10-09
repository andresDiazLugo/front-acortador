import axios from "axios";

export const Post = async (url,obj)=>{
    try {
        const response = await axios.post(url,obj)
        return response.data
    } catch (error) {
        return false        
    }
}