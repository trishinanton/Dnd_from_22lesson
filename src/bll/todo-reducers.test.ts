import {
    Board,
    deleteItemsFromCurrentBoardAC,
    Item,
    setCurrentBoardAC,
    setCurrentItemAC,
    todoReducer
} from "./todo-reducer";

let startState = {
    boards: [
        {id: 1, title: 'Users', items: [{id: 1, title: 'Viktor'},{id: 2, title: 'Anton'},{id: 3, title: 'Dima'}]},
        {id: 2, title: 'Mentors', items: [{id: 4, title: 'Dimych'},{id: 5, title: 'Ignat'}]}
    ],
    currentBoard: {id: 3, title: 'Users', items: [{id: 1, title: 'Viktor'},{id: 2, title: 'Anton'}]} as Board,
    currentItem: {} as Item
}
let item = {id: 1, title: 'Viktor'}
let board = {id: 3, title: 'Users', items: [{id: 1, title: 'Viktor'},{id: 2, title: 'Anton'}]}
let currentIndex = 1

test('choose current item', ()=>{
    let endState = todoReducer(startState, setCurrentItemAC({item}))

    expect(endState.currentItem.id).toBe(1)
});
test('choose current board', ()=>{
    let endState = todoReducer(startState, setCurrentBoardAC({board}))

    expect(endState.currentBoard.id).toBe(3)
});
test('delete item current board', ()=>{
    let endState = todoReducer(startState, deleteItemsFromCurrentBoardAC({currentIndex}))

    expect(endState.currentBoard.items.length).toBe(1)
});