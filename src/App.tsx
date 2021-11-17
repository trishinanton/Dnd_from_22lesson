import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRootStateType, store, useActions} from "./bll/redux-store";
import {boardsActions} from "./bll";
import {useSelector} from "react-redux";
import {Board, BoardsType, Item} from "./bll/todo-reducer";
import {ItemElement} from './ItemElement';

function App() {


    const {
        setBoardsAC,
        setCurrentBoardAC,
        setCurrentItemAC,
        pushCurrentItemAC,
        deleteItemsFromCurrentBoardAC,
        setItemsInCurrentBoardAC
    } = useActions(boardsActions)
    const boards = useSelector<AppRootStateType, BoardsType>(state => state.boards.boards)
    const currentBoard = useSelector<AppRootStateType, Board>(state => state.boards.currentBoard)
    const currentItem = useSelector<AppRootStateType, Item>(state => state.boards.currentItem)

    function dragOverHandler(e: any) {

        e.preventDefault()
        if (e.target.className === 'item') {
            e.target.style.boxShadow = '0 2px 3px gray'
        }
    }

    function dragLeaveHandler(e: any) {


        e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e: any, board: any, item: any) {

        setCurrentBoardAC({board})
        setCurrentItemAC({item})
    }

    function dragEndHandler(e: any) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e: any, board: any, item: any) {

        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        deleteItemsFromCurrentBoardAC({currentIndex})

        const dropIndex = board.items.indexOf(item)
        setItemsInCurrentBoardAC({board, currentItem, dropIndex})

        setBoardsAC({board, currentIndex})

    }

    function dropCardHandler(e: any, board: any) {
        pushCurrentItemAC({board, currentItem})
        const currentIndex = currentBoard.items.indexOf(currentItem)
        deleteItemsFromCurrentBoardAC({currentIndex})
        setBoardsAC({board, currentIndex})
    }

    return (
        <div className="app">
            {boards.map(board =>
                <div
                    className="board"
                    onDragOver={(e: any) => dragOverHandler(e)}
                    onDrop={(e: any) => dropCardHandler(e, board)}
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item => {
                        return <ItemElement dragOverHandler={dragOverHandler}
                                            dragLeaveHandler={dragLeaveHandler}
                                            dragStartHandler = {dragStartHandler}
                                            dragEndHandler={dragEndHandler}
                                            dropHandler ={dropHandler}
                                            title={item.title}
                                            board={board}
                                            item={item}/>
                        }
                    )}
                </div>
            )}
        </div>
    );
}

export default App;

