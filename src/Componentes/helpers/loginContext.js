import React from 'react'

const loginContext = React.createContext([null, () => { }])

export const UserProvider = loginContext.Provider
export const UserConsumer = loginContext.Consumer
export default loginContext