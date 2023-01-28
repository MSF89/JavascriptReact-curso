export const aumentar = ()=>{
    return{
        type: "AUMENTAR",
        payload: +1,
    };
};
export const disminuir = ()=>{
    return{
        type: "DISMINUIR",
        payload: -1,
    };
};