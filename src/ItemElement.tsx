import React from "react";
import {Board, Item} from "./bll/todo-reducer";

type ItemPropsType = {
    dragOverHandler: (e:any)=>void,
    dragLeaveHandler: (e:any)=>void,
    dragStartHandler: (e:any, board:Board, item: Item)=>void,
    dragEndHandler: (e:any)=>void,
    dropHandler: (e:any, board:Board, item:Item)=>void
    title: string,
    board: Board,
    item: Item

}
export function ItemElement({dragOverHandler,dragLeaveHandler,dragStartHandler,dragEndHandler,dropHandler,title,board,item}:ItemPropsType) {
    return(
        <div
            onDragOver={(e: any) => dragOverHandler(e)}
            onDragLeave={(e: any) => dragLeaveHandler(e)}
            onDragStart={(e: any) => dragStartHandler(e, board, item)}
            onDragEnd={(e: any) => dragEndHandler(e)}
            onDrop={(e: any) => dropHandler(e, board, item)}
            draggable={true}
            className="item"
        >{title}</div>
    )
}