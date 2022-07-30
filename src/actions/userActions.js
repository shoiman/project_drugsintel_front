
export const GET_USER = "GET_USER"
export const GET_MESSAGE = "GET_MESSAGE"


export const addUserAction = (payload) => (
    {type: GET_USER, payload}
)

export const getMessageAction = (payload) => (
    {type: GET_MESSAGE, payload}
)
