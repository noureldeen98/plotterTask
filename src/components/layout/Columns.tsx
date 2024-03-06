import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Column } from '../utils/models/column';
import Draggable from 'react-draggable';

const Columns = () => {
  const baseURL="https://plotter-task-8019e13a60ac.herokuapp.com/columns"
  const [columns, setColumns] = useState([]);
  //Side effect : Getting the columns 
  useEffect(()=>{
    axios.get(`${baseURL}`).then((response:AxiosResponse)=>{
      setColumns(response.data.columns)
    })
  },[])
  return (
    <div className='w-[100%] text-start h-[690px]'>
      <p className='mt-5'>Columns</p>
      <hr className='border-[2px] border-[lightGray]'/>
       <ul className='gap-4 flex flex-col items-start mt-4'>
        {columns.map((column:Column)=>(
          <Draggable>
            <li>{column.name}</li>
          </Draggable>
        ))}
       </ul>
    </div>
  )
}

export default Columns
