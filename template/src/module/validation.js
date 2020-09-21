function validationRule(e){
    // if(e.required) console.log(e)
    return e.required ? ( // required check
        (
            (e.min ? e.min-1 : 0)  < e.text.length) ? ( //minimum char check
                e.regexp ? (e.text.match(e.regexp) != null) : true) //regular expression check
            : false 
        ): e.regexp ? (e.text.match(e.regexp) != null) : true
}
function validCheckboxes(e){
    // console.log(e)
    let required = e.filter(f => f.required).length
    let checked = e.filter(f => f.required && f.checked).length
    return required > 0 ? checked == required : true
}
export{
    validationRule,
    validCheckboxes
}