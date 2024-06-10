import { base_url } from "./base_url"
import { commonRequest } from "./commonRequest"


export const addMoviesApi=async(bodyData)=>{
    return await commonRequest('POST',`${base_url}/movies`,bodyData)
  }

export const acessMoviesApi=async()=>{
    return await commonRequest('GET',`${base_url}/movies`,{})
  }

  export const deleteMoviesApi=async(id)=>{
    return await commonRequest('DELETE',`${base_url}/movies/${id}`,{})
  }