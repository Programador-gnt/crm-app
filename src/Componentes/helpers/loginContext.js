import React from 'react'

const loginContext = React.createContext([{}, () => { }])

export const LoginContextProvider = loginContext.Provider
export const LoginContextConsumer = loginContext.Consumer

export default loginContext