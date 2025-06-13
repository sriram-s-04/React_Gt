import React, { useState } from 'react'

const URtask4 = () => {
  const [formFields, setFormFields] = useState([{ name: '', age: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...formFields];
    updatedFields[index][name] = value;
    setFormFields(updatedFields);
  };

  const addField = () => {
    setFormFields([...formFields, { name: '', age: '' }]);
  };

  const removeField = (index) => {
    const updatedFields = formFields.filter((_, i) => i !== index);
    setFormFields(updatedFields);
  };

// Form with Dynamic Fields (Add More Inputs)
// Goal: Create a form where users can dynamically add multiple entries. The form should allow:
// * Adding new fields (e.g., name and age).
// * Removing fields when not needed.
// * Managing each field's state separately.

return (
  <div>
    <h2>Dynamic Form Fields</h2>
    {formFields.map((field, index) => (
      <div key={index}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={field.name}
          onChange={(e) => handleInputChange(index, e)}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={field.age}
          onChange={(e) => handleInputChange(index, e)}
        />
        <button onClick={() => removeField(index)}>Remove</button>
      </div>
    ))}
    <button onClick={addField}>Add More</button>
  </div>
);
};

export default URtask4;
