import React, {useContext} from 'react'
import Board from '../../components/Board/Board'
import './View.css' 
import Navbar from '../../components/Navbar/Navbar'
import {Context} from '../../Store'


  
export default function View() {
 
  const [state, setState] = useContext(Context)
  

    return (
        <div className="view">
          <div className="nav">
            <Navbar />
          </div>
        <div className="boards">
        
        <Board state={state} setState={setState} className="Boards"/>


         </div>

        </div>
    )
}
