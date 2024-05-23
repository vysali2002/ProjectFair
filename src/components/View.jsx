import React, { useContext, useEffect, useState } from 'react'
import Edit from './Edit'
import Add from './Add'
import { getUserProjectsAPI, removeProjectAPI } from '../services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'

function View() {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [userProjects,setUserProjects] = useState([])


  console.log(userProjects);
  useEffect(()=>{
    getUserProjects()
  },[addResponse,editResponse])

  const getUserProjects = async () =>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Authorization":`Bearer ${token}`
    }
    try{
       const result = await getUserProjectsAPI(reqHeader)
       console.log(result);
       if(result.status==200){
        setUserProjects(result.data)
       }
    }catch(err){
      console.log(err);
    }
  } 


  const handleDeleteProject = async (projectId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type" : "application/json",
          "Authorization" : `Bearer ${token}`
      }
      //api call
      const result = await removeProjectAPI(projectId,reqHeader)
      if(result.status==200){
        getUserProjects()
      }else{
        console.log(result);
      }
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between mt-3 w-100">
        <h2 class='text-warning'>My Projects</h2>
        <div > <Add/></div>
      </div>
      <div className="mt-4">
      { 
      userProjects?.length>0?
        userProjects?.map(project=>(
          <div className="d-flex justify-content-between border rounded p-2 mb-3  ">
          <h3>{project?.title}</h3>
          <div className="d-flex icons">
            <div ><Edit project={project}/></div>
            <div className='btn'><a href={project?.github} target='_blank'><i className="fa-brands fa-github"></i></a></div>
            <button onClick={()=>handleDeleteProject(project?._id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
          </div>
        </div>
        ))
        :
        <div className='fw-bolder text-warning'>No Projects uploaded yet!!</div>
        }
      </div>
    </div>
  )
}

export default View