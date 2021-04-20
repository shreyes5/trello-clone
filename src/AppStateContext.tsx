import React, { createContext, useContext, useReducer } from 'react'

interface AppStateContextProps {
  state: AppState
}

interface Task {
  id: string
  text: string
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

export const useAppState = () => {
  return useContext(AppStateContext)
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
)

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate App scaffold' }]
    },
    {
      id: '1',
      text: 'In progress',
      tasks: [{ id: 'c1', text: 'Sleep' }]
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c2', text: "Have breakfast at Vikram's :(" }]
    }
  ]
}

export interface AppState {
  lists: List[]
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  )
}
