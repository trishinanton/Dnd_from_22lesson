(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},24:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(5),d=r.n(a),i=(r(15),r(16),r(1)),c=r(4),u=r(6),s=Object(u.b)({name:"boards",initialState:{boards:[{id:1,title:"Users",items:[{id:1,title:"Viktor"},{id:2,title:"Anton"},{id:3,title:"Dima"}]},{id:2,title:"Mentors",items:[{id:4,title:"Dimych"},{id:5,title:"Ignat"}]}],currentBoard:{id:1,title:"Users",items:[{id:1,title:"Viktor"}]},currentItem:{}},reducers:{setBoardsAC:function(e,t){console.log("set board"),console.dir(e.currentBoard);for(var r=0;r<e.boards.length;r++)e.boards[r].id===e.currentBoard.id?e.boards[r]=e.currentBoard:e.boards[r]=e.boards[r];console.log("state board",e)},setCurrentBoardAC:function(e,t){console.log(t.payload.board),e.currentBoard=t.payload.board},setCurrentItemAC:function(e,t){e.currentItem=t.payload.item},pushCurrentItemAC:function(e,t){e.boards.map((function(e){if(e.id!==t.payload.board.id)return e;e.items.push(t.payload.currentItem)}))},deleteItemsFromCurrentBoardAC:function(e,t){console.log("delete item"),e.currentBoard.items.splice(t.payload.currentIndex,1)},setItemsInCurrentBoardAC:function(e,t){console.log("set item"),e.boards.map((function(e){return e.id===t.payload.board.id?e.items.splice(t.payload.dropIndex+1,0,t.payload.currentItem):e}))}}}),l=s.reducer,m=s.actions,b=(m.setBoardsAC,m.setCurrentBoardAC,m.setCurrentItemAC,m.pushCurrentItemAC,m.deleteItemsFromCurrentBoardAC,m.setItemsInCurrentBoardAC,r(3)),f=Object(i.c)({boards:l}),p=Object(u.a)({reducer:f,middleware:function(e){return e().prepend(c.a)},devTools:window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()});window.store=p;function C(e){var t=Object(b.b)();return Object(n.useMemo)((function(){return Object(i.b)(e,t)}),[])}var I=r(10),O=Object(I.a)({},s.actions),g=r(2);var j=function(){var e=C(O),t=e.setBoardsAC,r=e.setCurrentBoardAC,n=e.setCurrentItemAC,o=e.pushCurrentItemAC,a=e.deleteItemsFromCurrentBoardAC,d=e.setItemsInCurrentBoardAC,i=Object(b.c)((function(e){return e.boards.boards})),c=Object(b.c)((function(e){return e.boards.currentBoard})),u=Object(b.c)((function(e){return e.boards.currentItem}));function s(e){e.preventDefault(),"item"===e.target.className&&(e.target.style.boxShadow="0 2px 3px gray")}return Object(g.jsx)("div",{className:"app",children:i.map((function(e){return Object(g.jsxs)("div",{className:"board",onDragOver:function(e){return s(e)},onDrop:function(r){return function(e,r){o({board:r,currentItem:u});var n=c.items.indexOf(u);a({currentIndex:n}),t({board:r,currentIndex:n})}(0,e)},children:[Object(g.jsx)("div",{className:"board__title",children:e.title}),e.items.map((function(o){return Object(g.jsx)("div",{onDragOver:function(e){return s(e)},onDragLeave:function(e){return function(e){e.target.style.boxShadow="none"}(e)},onDragStart:function(t){return function(e,t,o){r({board:t}),n({item:o})}(0,e,o)},onDragEnd:function(e){return function(e){e.target.style.boxShadow="none"}(e)},onDrop:function(r){return function(e,r,n){e.preventDefault();var o=c.items.indexOf(u);a({currentIndex:o});var i=r.items.indexOf(n);d({board:r,currentItem:u,dropIndex:i}),t({board:r,currentIndex:o})}(r,e,o)},draggable:!0,className:"item",children:o.title})}))]})}))})},x=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,25)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,a=t.getLCP,d=t.getTTFB;r(e),n(e),o(e),a(e),d(e)}))};d.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(b.a,{store:p,children:Object(g.jsx)(j,{})})}),document.getElementById("root")),x()}},[[24,1,2]]]);
//# sourceMappingURL=main.ef0a2f76.chunk.js.map