
import './Add.css'
import AddTask from '../../components/AddTask/AddTask'
import Navbar from '../../components/Navbar/Navbar'

export default function Add() {

    return (
      <div className="view">
      <div className="nav">
        <Navbar />
      </div>
    <div className="boards">
    

        <div className="addtask">

        <AddTask />
        </div>

     </div>

    </div>
    )
}
