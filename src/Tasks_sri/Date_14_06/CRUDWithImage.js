import React from 'react'
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import axios from 'axios';


const CRUDWithImage = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null

    });
    const [editData, setEditData] = useState(false);
    const getProducts = () => {
        axios.get('http://92.205.109.210:8116/post/getall')
        .then((res) => {
            console.log(res.data);
            setProducts(res.data.data);
        })
    }
    
    const onsubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Validate form data
    if (!formData.title || !formData.content) {
        alert('Please fill in all fields');
        return;
    }
    
    const formDataToSend ={
        title: formData.title,
        content: formData.content
    }
    console.log(formDataToSend);
    if (editData) {
        axios.put(`http://92.205.109.210:8116/post/update/${formData._id}`, formDataToSend)
            .then((res) => {    
                console.log(res.data.data);
                getProducts();
                setEditData(false);
                setFormData({
                    title: '',
                    content: ''
                });
            });
    }
    else {
        const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('image', formData.image);
        console.log(formDataToSend);
        axios.post('http://92.205.109.210:8116/post/create', formDataToSend)
            .then((res) => {
                console.log(res.data.data);
                getProducts();
        });
    }
}

     useEffect(() => {
        getProducts()
    }, [])

    const handleEdit = (row) => {
        setEditData(true);
        console.log(editData);
        setFormData({
            _id: row._id,
            title: row.title,
            content: row.content,
        });
    };

    const handleDelete = (id) => {
        console.log(id);
        axios.delete(`http://92.205.109.210:8116/post/deletebyId/${id}`)
            .then((res) => {
                console.log(res.data.data);
                getProducts();
            });
    };

    const col = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Content',
            selector: row => row.content,
            sortable: true,
        },
        {
            name: 'Image',
            cell: row => row.image ? (
                <img
                    src={row.image.startsWith('http') ? row.image : `http://92.205.109.210:8116/${row.image}`}
                    alt="book"
                    style={{ width: '75px', height: '75px', objectFit: 'cover' }}
                />
            ) : 'No Image',
        },
        {
            name: 'Actions',
            cell: row => (
                <>
                    <button onClick={() => handleEdit(row)}>Edit</button>
                    <button onClick={() => handleDelete(row._id)}>Delete</button>
                </>
            ),
        }
    ];

   

    return (
        <div>
            <DataTable columns={col} data={products}
                pagination
            />
            <form onSubmit={onsubmit}>
                <label>
                    Title:
                    <br />
                    <input type="text" name="title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                </label>
                <br />
                <label>
                    Content:
                    <br />
                    <textarea name="content" value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} />
                </label>
                <br />
                <label>
                    Image:
                    <br />
                    <input type="file" name="image" onChange={e => setFormData({ ...formData, image: e.target.files[0] })} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
        </div>
    );
};

export default CRUDWithImage