import React from 'react'
import './App.css'
import { Column } from './components/Column'
import { Card } from './components/Card'
import { AppContainer } from './styles'
import { AddNewItem } from './components/AddNewItem'

const App = () => {
  return (
    <AppContainer>
      <Column text='To do'>
        <Card text='Generate App scaffold' />
      </Column>
      <Column text='In Progess'>
        <Card text='Microsoft Teams' />
      </Column>
      <Column text='Done'>
        <Card text='Present worth future worth but I am worthless' />
      </Column>
      <AddNewItem
        toggleButtonText='+Add another list'
        onAdd={console.log}
        dark
      />
    </AppContainer>
  )
}

export default App
