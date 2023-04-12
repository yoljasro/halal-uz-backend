import React, { useState } from 'react';
import axios from 'axios';

const CourseImageCreate = () => {
  // const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleFileUpload = () => {
  //   const formData = new FormData();
  //   formData.append('image', selectedFile);
  //   axios.post('/upload', formData)
  //     .then(response => {
  //       // Rasmlar yuklandi
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       // Xatolik yuz berdi
  //       console.error(error);
  //     });
  // };

  return (
    <div>
      <input type="file" />
      <button>Rasmni Yuklash</button>
    </div>
  );
};

export default CourseImageCreate;
