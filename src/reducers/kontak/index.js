import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, DETAIL_KONTAK, UPDATE_KONTAK} from "../../actions/kontaAction";

const initialState = {
    getListKontakLoading : false,
    getListKontakData : false,
    getListKontakError : false,

    addKontakLoading : false,
    addKontakData : false,
    addKontakError : false,

    deleteKontakLoading : false,
    deleteKontakData : false,
    deleteKontakError : false,

    detailKontakResult : false,

    updateKontakLoading : false,
    updateKontakData : false,
    updateKontakError : false,
}

const KontakReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_LIST_KONTAK :
            return {
                ...state,
                getListKontakLoading : action.payload.loading,
                getListKontakData : action.payload.data,
                getListKontakError : action.payload.errorMessage
            }

        case ADD_KONTAK :
            return {
                ...state,
                addKontakLoading : action.payload.loading,
                addKontakData : action.payload.data,
                addKontakError : action.payload.errorMessage
            }

        case DELETE_KONTAK :
            return {
                ...state,
                deleteKontakLoading : action.payload.loading,
                deleteKontakData : action.payload.data,
                deleteKontakError : action.payload.errorMessage
            }

        case DETAIL_KONTAK :
            return {
                ...state,
                detailKontakResult : action.payload.data,
            }

        case UPDATE_KONTAK :
            return {
                ...state,
                updateKontakLoading : action.payload.loading,
                updateKontakData : action.payload.data,
                updateKontakError : action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default KontakReducer