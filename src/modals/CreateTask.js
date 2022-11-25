import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";   

const CreateTaskPopup = ({modal, toggle, save}) => {
  const [courseName,setCourseName] = useState('');
  const [description,setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date()); 
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");
  

  const handleChange = (e) =>{
      const {name, value} = e.target

      if(name === "courseName"){
        setCourseName(value)
      }
     
      else{
        
        setDescription(value)
      }
  }

  const handleSave = () =>{
    let taskObj= {}
    taskObj["Name"] = courseName
    taskObj["Date"] = startDate
    taskObj["Description"] = description
    save(taskObj)
  }



  return (
    <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Task</ModalHeader>
          <ModalBody>
                <form>
                    <div className='form-group'>
                        <label>Course Name</label>
                        <input type="text" className='form-control' value={courseName} onChange = {handleChange} name="courseName" />
                    </div>
                    <div className='form-group'>
                        <label>Start Date</label><br />
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
                        onCalendarClose={handleCalendarClose}
                        onCalendarOpen={handleCalendarOpen}
                         dateFormat="dd/MM/yyy" isClearable={true}/>
       
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <textarea rows="5" className='form-control' value={description} onChange = {handleChange} name="description"></textarea>
                    </div>
                </form>
          </ModalBody>
          <ModalFooter>
             
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
  )
}

export default CreateTaskPopup;
