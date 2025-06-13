import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

function DataTableComp() {
    const [todos, setTodos] = useState()

    function get_todos(){
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            console.log(res.data);
            setTodos(res.data)
            
        })
    }

    useEffect(()=> {
        get_todos()
    },[])


    const col = [{
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Completed',
        selector: row => row.completed ? 'Yes' : 'No',
    }];
  return (
    <div>DataTableComp

        <DataTable columns={col} data={todos} 
        pagination
        paginationPerPage={15}
        paginationRowsPerPageOptions={[5, 12, 17]}
        highlightOnHover
        selectableRows
        selectableRowsHighlight

/>
    </div>
  )
}

export default DataTableComp
//npm i react-data-table-component