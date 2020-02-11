import React from 'react'

const appInteraction = React.createContext([{}, () => { }])

export const AppInteractionProvider = appInteraction.Provider
export const AppInteractionConsumer = appInteraction.Consumer

export default appInteraction