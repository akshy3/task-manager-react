import { Button, TextField } from '@mui/material'
import React, { useRef,useContext} from 'react'
import {v4} from 'uuid'
import './AddTask.css'
import {Context} from "../../Store"
import {Link} from "react-router-dom"

function AddTask() {
// eslint-disable-next-line
  const [state,setState] = useContext(Context)
  const inputbox = useRef()

    const addItem = () => {
        setState(prev => {
          return {
            ...prev,
            low: {
              title: "Low Priority",
              items: [
                {
                  id: v4(),
                  name: inputbox.current.value
                },
                ...prev.low.items
              ]
            }
        }
        })
        inputbox.current.value = "";
    }
    return (
        <div className="addtask">
          <TextField id="outlined-basic" label="Task" variant="outlined" type="text" inputRef={inputbox}/>
        <Button variant="contained" onClick={addItem}><Link to="/" className="add-button">Add a Task</Link></Button>
        </div>
    )
}


export default AddTask;
