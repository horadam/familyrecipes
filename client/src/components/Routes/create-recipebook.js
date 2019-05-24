import React, { useState, useContext } from 'react'
import { AuthContext } from "../../lib/auth"
import { createRecipebook } from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'



const CreateRecipebook = (props) => {

  const { user } = useContext(AuthContext)

  const [recipebookName, setRecipebookName] = useState('')

  function handleSubmit(e) {
      e.preventDefault()

      createRecipebook(user, recipebookName).then(() => {
          props.history.goBack()
      })

  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name your recipebook"
              name="recipebookName"
              onChange={e => setRecipebookName(e.target.value)}
        />
        <button className='abutton' type="submit">Create Recipebook</button>
      </form>
    </div>
  )



}

export default CreateRecipebook
