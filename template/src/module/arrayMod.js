function checkboxArr(e){
    // console.log(e)
    let index = e.arr.indexOf(e.elm)
    if(index > -1)  e.arr.splice(index, 1)
    else e.arr.push(e.elm)
    // console.log(e.arr, index)
    return e.arr
}
export{
    checkboxArr
}