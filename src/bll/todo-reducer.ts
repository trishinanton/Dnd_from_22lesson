import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    boards: [
        {id: 1, title: 'Users', items: [{id: 1, title: 'Viktor'},{id: 2, title: 'Anton'},{id: 3, title: 'Dima'}]},
        {id: 2, title: 'Mentors', items: [{id: 4, title: 'Dimych'},{id: 5, title: 'Ignat'}]}
    ],
    currentBoard: {
        id: 1, title: 'Users', items: [{id: 1, title: 'Viktor'}]
    },
    currentItem: {} as Item
}
export type BoardsType = Array<Board>
export type Board = {
    id:number,
    title: string,
    items: Array<Item>
}
export type Item  ={id:number, title: string}

export const slice = createSlice({
    name: 'boards',
    initialState: initialState,
    reducers:{
        setBoardsAC (state,action: PayloadAction<{board:Board, currentIndex:number}>){
            console.log('set board')
            console.dir(state.currentBoard)
            // state.boards.map(b=>{
            //     if(b.id === state.currentBoard.id){
            //         return state.currentBoard
            //     } else{
            //         return b
            //     }
            //
            // })
            for (let i=0; i<state.boards.length; i++){
                if(state.boards[i].id === state.currentBoard.id) state.boards[i]=state.currentBoard
                else state.boards[i] = state.boards[i]
            }

            console.log('state board', state)
        },
        setCurrentBoardAC (state, action: PayloadAction<{board:Board}>){
            console.log(action.payload.board)
            state.currentBoard = action.payload.board

        },
        setCurrentItemAC (state, action: PayloadAction<{item: Item}>){
            state.currentItem = action.payload.item
        },
        pushCurrentItemAC (state, action: PayloadAction<{board:Board,currentItem:Item}>){
            state.boards.map(board=>{
                if(board.id===action.payload.board.id) board.items.push(action.payload.currentItem)
                else return board
            })


            // let board = state.boards.find(b=>b.id===action.payload.board.id)
            // if (board){
            //     board.items.push(action.payload.currentItem)
            // }


        },
        deleteItemsFromCurrentBoardAC (state, action: PayloadAction<{currentIndex:number}>){
            console.log('delete item')
            state.currentBoard.items.splice(action.payload.currentIndex,1)
        },
        setItemsInCurrentBoardAC (state, action: PayloadAction<{board:Board,currentItem:Item,dropIndex:number}>){
            console.log('set item')
            state.boards.map(b=>{
                if(b.id===action.payload.board.id) {
                    return b.items.splice(action.payload.dropIndex+1,0, action.payload.currentItem)
                } else{
                    return b
                }
            })
        }

    }
})

export const todoReducer = slice.reducer;
export const {setBoardsAC, setCurrentBoardAC, setCurrentItemAC,pushCurrentItemAC,deleteItemsFromCurrentBoardAC,setItemsInCurrentBoardAC} = slice.actions;