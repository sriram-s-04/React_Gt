import React, { useContext } from 'react'
import { dataContext } from './UseContext';

const Language_task3 = () => {
    const {language, setLanguage , languageContent} = useContext(dataContext);

  return (
    <div>
        {/* ### **Task 3: Language Selector Context**
**Description:**  
Create a context that manages **language selection** (e.g., English, Tamil, Hindi). Based on the selected language, display the text accordingly.

âœ… Providing Context for Language Preference  
âœ… Changing Content Dynamically  
âœ… Handling Multi-language Support  

--- */}
        <h1>{languageContent[language]}</h1>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
        </select>

    </div>
  )
}

export default Language_task3