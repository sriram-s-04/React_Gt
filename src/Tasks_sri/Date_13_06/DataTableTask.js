import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

const DataTableTask = () => {
    const [products, setProducts] = useState()

    function get_products(){
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data)

        })
    }


    useEffect(()=> {
        get_products()
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
        name: 'Price',
        selector: row => row.price,
    }];
  return (
    <div>
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

export default DataTableTask
