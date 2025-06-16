import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';

const CRUDoperation = () => {
    const [products, setProducts] = useState()
    const [formData, setFormData] = useState({
        employeeId: 1,
        employeeName: '',
        mobile: '',
        userName: '',
        password: '',
        confirmPassword: ''
    });


    function get_EmployeeDetails(){
        axios.get("http://208.109.34.247:8012/Employee/GetAllEmployeeDetails")
        .then((res) => {
            console.log(res.data);
            setProducts(res.data.employeeList)

        })
    }
     
    const onsubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Validate form data
          
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }   
        axios.post('http://208.109.34.247:8012/Employee/InsertEmployee', formData)
        .then((res) => {
            console.log(res.data);
            get_EmployeeDetails();
        })
        //afer successful submission, you can reset the form
        setFormData({
            employeeId: 1,
            employeeName: '',
            mobile: '',
            userName: '',
            password: '',
            confirmPassword: ''
        });
    }

    useEffect(()=> {
        get_EmployeeDetails()
    },[])
    function handleDelete(id) {
        const remark = prompt("Enter reason for deletion");
        if (remark) {
            axios.post("http://208.109.34.247:8012/Employee/RemoveEmployee", {
                employeeId: id,
                removedRemarks: remark,
                createdBy: 1
            })
            .then((res) => {
                console.log(res.data);
                get_EmployeeDetails();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }
    function handleEdit(row) {
        setFormData({
            employeeId: row.employeeId,
            employeeName: row.employeeName,
            mobile: row.mobile,
            userName: row.userName,
            password: row.password, 
            confirmPassword: row.password 
        });
    }

    const col = [{
        name: 'User Name',
        selector: row => row.userName,
    },
    {
        name: 'Employee Name',
        selector: row => row.employeeName,
    },
    {
        name: 'Mobile',
        selector: row => row.mobile,
    },
    {
        name: "Action",
        cell: (row) => 
        <div>
            <button onClick={() => handleEdit(row)}>Edit</button>
            <button onClick={() => handleDelete(row.employeeId)}>Delete</button>
        </div>
    }
];
  return (
    <div>CRUDoperation
        <DataTable columns={col} data={products} 
        pagination
        />
        <form onSubmit={onsubmit}>
             <label>
                Employee Name:
                <br />
                <input type="text" name="employeeName" value={formData.employeeName} onChange={e => setFormData({ ...formData, employeeName: e.target.value })} />
            </label>
            <br />
            <label>
                Mobile:
                <br/>
                <input type="text" name="mobile" value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })} />
            </label>
            <br />
            <label>
                User Name:
                <br />
                <input type="text" name="userName" value={formData.userName} onChange={e => setFormData({ ...formData, userName: e.target.value })} />
            </label>
            <br />
            <label>
                Password:
                <br />
                <input type="password" name="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
            </label>
            <br />
            <label>
                Confirm Password:
                <br />
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })} />
            </label>
            <br />
            <br/>
            <button type="submit">Submit</button>
        </form>
        <br />
        </div>
  )
}

export default CRUDoperation