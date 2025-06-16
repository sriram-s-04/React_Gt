import axios from 'axios';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export const FormForAPI = () => {
    const [formData, setFormData] = React.useState({
        categoryId: 0,
        category: '',
        description: '',
        createdBy:1
    });

    let location = useLocation()
    console.log(location);
    
    const onsubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        axios.post('http://208.109.34.247:8012/Category/InsertCategory',formData)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        let data = location.state || {}
        setFormData({
            ...data
        })
        
    },[])
  return (
    <div>
        <form onSubmit={onsubmit}>
            <label>
                Email:
                <input type="text" name="category" value={formData.category} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} />
            </label>
            <br />  
            <label>
                Password:
                <input type="text" name="description" value={formData.description} onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} />
            </label>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
