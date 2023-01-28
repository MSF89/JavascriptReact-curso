const estadoInicial = {
    numero: 0
}

export default (state = estadoInicial ,action) =>{
    const {type,payload} = action;

    switch (type) {
        case "AUMENTAR":
            return{
                ...state,
                numero: state.numero + payload
            };
        case "DISMINUIR":
            return{
                ...state,
                numero: state.numero + payload
            };
        default: return state;
    }

}