const INITIAL_STATE =
{
    digitalizacoes: [{
        teste:'teste'
    }]
}

export default function digital(state = INITIAL_STATE, action) {
    if (action.type === 'GET_DIGITALS') {
        return {
            ...state,
            digitalizacoes: action.digitalizacoes,
        }
    }

    return state
}