let todos = [{
    addedDate: "",
    id: "todolistId1",
    order: 0,
    title: "new todolist"
},{
    addedDate: "",
    id: "todolistId2",
    order: 0,
    title: "new todolist"
},{
    addedDate: "",
    id: "todolistId3",
    order: 0,
    title: "new todolist"
},{
    addedDate: "",
    id: "todolistId4",
    order: 0,
    title: "new todolist"
}]



let todos1 = todos.map((tl) => ({...tl, filter: 'All', entityStatus: "idle"}))
console.log(todos1);

