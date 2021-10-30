import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import './Board.css'
import DeleteIcon from '@mui/icons-material/Delete';
import _ from "lodash";
import {Context} from '../../Store'
import {useContext} from "react"

import React from 'react'

export default function Board() {

  const [state,setState] = useContext(Context)
    const handleDragEnd = ({destination, source}) => {
        if (!destination) {
          return
        }
    
        if (destination.index === source.index && destination.droppableId === source.droppableId) {
          return
        }
    
        // Creating a copy of item before removing it from state
        const itemCopy = {...state[source.droppableId].items[source.index]}
    
        setState(prev => {
          prev = {...prev}
          // Remove from previous items array
          prev[source.droppableId].items.splice(source.index, 1)
    
    
          // Adding to new items array location
          prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)
    
          return prev
        })
      }


    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
{_.map(state, (data, key) => {
  return(
    <div key={key} className={"column"}>
      <h3 className="BoardTitle">{data.title}</h3>
      <Droppable droppableId={key}>
        {(provided, snapshot) => {
          return(
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={"droppable-col"}
            >
              {data.items.map((el, index) => {
                return(
                  <Draggable key={el.id} index={index} draggableId={el.id}>
                    {(provided, snapshot) => {
                      return(
                        <div
                          className={`item ${snapshot.isDragging && "dragging"}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {el.name} <div className="icons"><DeleteIcon className="delete-icon" onClick={(e)=> {
                            setState(prev => {
                              prev={...prev}
                              prev[key].items.splice(index,1)

                              return prev
                            })
                            
                            }}/></div>
                        </div>
                      )
                    }}
                  </Draggable>
                )
              })}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  )
})}
</DragDropContext>
        </>
    )
}





