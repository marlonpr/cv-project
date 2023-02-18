import React, { useState } from 'react';

function CVForm() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [isEditingGeneralInfo, setIsEditingGeneralInfo] = useState(false);
  const [educationalExp, setEducationalExp] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
  const [isEditingEducationalExp, setIsEditingEducationalExp] = useState(false);

  // handle functions for general info section
  const handleGeneralInfoChange = (event) => {
    setGeneralInfo({ ...generalInfo, [event.target.name]: event.target.value });
  };

  const handleGeneralInfoSubmit = (event) => {
    event.preventDefault();
    setIsEditingGeneralInfo(false);
  };

  const handleGeneralInfoEdit = () => {
    setIsEditingGeneralInfo(true);
  };

    // handle functions for general info section
    const handleEducationalExpChange = (event) => {
      setEducationalExp({ ...educationalExp, [event.target.name]: event.target.value });
    };
  
    const handleEducationalExpSubmit = (event) => {
      event.preventDefault();
      setIsEditingEducationalExp(false);
    };
  
    const handleEducationalExpEdit = () => {
      setIsEditingEducationalExp(true);
    };

 
  return (
    <div>
     <form onSubmit={handleGeneralInfoSubmit}>
      <div>
        <h2>General Information</h2>
        {isEditingGeneralInfo ? (
          <>
            <label>
              Name:
              <input type="text" name="name" value={generalInfo.name} onChange={handleGeneralInfoChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="email" value={generalInfo.email} onChange={handleGeneralInfoChange} />
            </label>
            <br />
            <label>
              Phone:
              <input type="text" name="phone" value={generalInfo.phone} onChange={handleGeneralInfoChange} />
            </label>
            <br />
            <button type="submit">Save</button>
          </>
        ) : (
          <>
            <p>Name: {generalInfo.name}</p>
            <p>Email: {generalInfo.email}</p>
            <p>Phone: {generalInfo.phone}</p>
            <button type="button" onClick={handleGeneralInfoEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </form>
      <form onSubmit={handleEducationalExpSubmit}>
      <div>
        <h2>Educational experience</h2>
        {isEditingEducationalExp ? (
          <>
            <label>
              School name:
              <input type="text" name="schoolName" value={educationalExp.schoolName} onChange={handleEducationalExpChange} />
            </label>
            <br />
            <label>
              Title of study:
              <input type="text" name="titleOfStudy" value={educationalExp.titleOfStudy} onChange={handleEducationalExpChange} />
            </label>
            <br />
            <label>
              Date of study:
              <input type="text" name="dateOfStudy" value={educationalExp.dateOfStudy} onChange={handleEducationalExpChange} />
            </label>
            <br />
            <button type="submit">Save</button>
          </>
        ) : (
          <>
            <p>School name: {educationalExp.schoolName}</p>
            <p>Title of study: {educationalExp.titleOfStudy}</p>
            <p>Date of study: {educationalExp.dateOfStudy}</p>
            <button type="button" onClick={handleEducationalExpEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </form>
    </div>
    );
  }
  export default CVForm;





