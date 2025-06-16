import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom'

const DataTablewithAPI = () => {
        const [products, setProducts] = useState()

    function get_products(){
        axios.get("http://208.109.34.247:8012/Category/GetAllCategories")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data.categoryList   )

        })
    }

    function handleDelete(id){
        const remark = prompt("enter reason") 
        axios.post("http://208.109.34.247:8012/Category/RemoveCategory",{
            categoryId:id,
            removedRemarks:remark,
            createdBy:1

        })
        .then(res => {
            console.log(res.data);
            alert("deleted")
                    get_products()
            
        })

    }


    useEffect(()=> {
        get_products()
    },[])
    const col = [{
        name: 'ID',
        selector: row => row.categoryId,
    },
    {
        name: 'Title',
        selector: row => row.category ,
    },
    {
        name: 'Price',
        selector: row => row.description,
    },
{
    name:"action",
    cell: (row) => 
    <div>
     <Link to="/formforapi" state={row}>   
    <button >edit</button>
    </Link>
    <button onClick={() => handleDelete(row.categoryId)}>delete</button>
    </div>
}];
  return (
    <div>DataTablewithAPI
        <DataTable columns={col} data={products} 
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[5, 10, 15]}
        highlightOnHover
        selectableRows
        selectableRowsHighlight
        fixedHeader
        fixedHeaderScrollHeight="400px"
        striped
        responsive
        noDataComponent="No Data Available"
        progressPending={!products}
        progressComponent={<div>Loading...</div>}
        conditionalRowStyles={[
            {
                when: row => row.price > 1000,
                style: {
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    color: 'red',
                },
            },
            {
                when: row => row.price <= 1000,
                style: {
                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                    color: 'green',
                },
            },
        ]}

      

        />
    </div>
  )
}

export default DataTablewithAPI