import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";   

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
  const [courseName,setCourseName] = useState('');
  const [description,setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date()); 

  const handleChange = (e) =>{
      const {name, value} = e.target

      if(name === "courseName"){
        setCourseName(value)
      }
     
      else{
        
        setDescription(value)
      }
  }

  useEffect(() =>{
    setCourseName(taskObj.Name)
    setStartDate(taskObj.StartDate)
    setDescription(taskObj.Description)
  },[])

  const handleUpdate = (e) =>{
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = courseName
    tempObj['Date'] = startDate
    tempObj['Description'] = description
    updateTask(tempObj)
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Task</ModalHeader>
          <ModalBody>
                
                    <div className='form-group'>
                        <label>Course Name</label>
                        <input type="text" className='form-control' value={courseName} onChange = {handleChange} name="courseName" />
                    </div>
                    <div className='form-group'>
                        <label>Start Date</label><br />
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyy" isClearable={true}/>
       
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={description} onChange = {handleChange} name="description"></textarea>
                    </div>
                
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
  );
};

export default EditTaskPopup;
