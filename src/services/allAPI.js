import { commomAPI } from "./commonAPI"
import { serverUrl } from "./severUrl"
export const uploadVideo = async(reqBody)=>{
    return await commomAPI("POST",`${serverUrl}/videos`,reqBody)
}


///get

export const getAllVideo = async ()=>{
    //make get
    return await commomAPI("GET",`${serverUrl}/videos`,"")
}

//

export const getAVideo = async (id)=>{
    //make get
    return await commomAPI("GET",`${serverUrl}/videos/${id}`,"")
}


//

export const deleteVideo = async (id)=>{
    //make get
    return await commomAPI("DELETE",`${serverUrl}/videos/${id}`,{})
}


//
export const addToHistory = async(videoDetails)=>{
    return await commomAPI("POST",`${serverUrl}/history`,videoDetails)
}

//get all watching video history
export const getAllHistory = async ()=>{
    return await commomAPI("GET",`${serverUrl}/history`,"")
}



//delete video history
export const deleteHistory = async (id)=>{
    //make delete http request to "http://loclhost:4000/history/id" to delete watch history from json server to watch history component
    return await commomAPI("DELETE",`${serverUrl}/history/${id}`,{})
}





//add
export const addCategory = async(reqBody)=>{
    return await commomAPI("POST",`${serverUrl}/categories`,reqBody)
}

//get all category
export const getAllCategory = async()=>{
    return await commomAPI("GET",`${serverUrl}/categories`,"")
}

//delete all category
export const deleteCategory = async(id)=>{
    return await commomAPI("DELETE",`${serverUrl}/categories/${id}`,{})
}

//update all category
export const updateCategory = async(id,body)=>{
    return await commomAPI("PUT",`${serverUrl}/categories/${id}`,body)
}

