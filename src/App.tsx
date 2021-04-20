import React from 'react'
import './App.css'
import { Column } from './components/Column'
import { Card } from './components/Card'
import { AppContainer } from './styles'
import { AddNewItem } from './components/AddNewItem'
import { useAppState } from './AppStateContext'

const App = () => {
  const { state } = useAppState()

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}

      <AddNewItem
        toggleButtonText='+Add another list'
        onAdd={console.log}
        dark
      />
    </AppContainer>
  )
}

export default App
