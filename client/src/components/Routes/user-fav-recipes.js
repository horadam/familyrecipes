import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {AuthContext} from '../../lib/auth'
import { connect } from 'react-redux'
import {getUserFavorites} from '../../actions/actions'
import {getRecipeBooks} from '../../actions/actions'
import Header from '../header'
import Footer from '../footer'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nettles from '../assets/nettle.jpg'

const UserFavRecipes = (props) => {

  const { user } = useContext(AuthContext)

  useEffect( () => {
      getUserFavorites(user)
      getRecipeBooks(user)

  }, [user])

  const userFavorites = useSelector(appstate => appstate.userFavorites)

    console.log(props.userRecipeBooks)

    return (
      <div className='userFavoriteContainer'>
       <div>
       <Header />

      <div className='divHeader2'>
      <Link to='/'><FontAwesomeIcon className='faBack' icon="arrow-left" /></Link>
      <div className='space2'></div>
      <h1 className='recipe-name'>Favorites</h1>
      </div>

{/* USERS FAVORITES */}

        <div>
         <div className='recipeFavoritesDiv'>

          {props.userFavorites.map((recipe, i) => (   

              <Link 
                className='recipeLink' 
                to={`/user_fav_recipes/` + recipe.recipe_id}
                key={'favoriteR' + i}>
                <div className='recipeListP'>
                <h2 className='recipe-view-h2'>{recipe.name == null ? "Unnamed Recipe" : recipe.name}</h2>
                <img className='recipeImgThumbnail' src={recipe.imgURL || nettles } alt=''></img>
              </div>
                
              </Link>

            ))}
          </div>
        </div>

{/* USERS RECIPES BOOKS */}

      <div className='bookFavorites'>
  
          {props.userRecipeBooks.map((recipebook, i) => (

            <Link 
              className='recipeLink' 
              to={`/user_fav_recipes/recipebook/` + recipebook.recipebook_id}
              key={'recipebook' + i}>
              
             <div className='book'> 

              <div className='bookCenter'>   
              
               <h2>
                {recipebook.recipebook_name === '' ? "Unnamed Recipe Book" : recipebook.recipebook_name}
               </h2>
                <FontAwesomeIcon className='fa2' icon='book-open' />
              </div> 

             </div>
            </Link>
          ))}
        </div>
      </div>

{/*         
        <div className="createGroupLink">
            <Link to={"/createrecipebook"}>
              <button className='abutton'>Create Book</button>
            </Link>
        </div>
        <div className='invisible'></div> */}
        <Footer />
      </div>
    )
}

function mapStateToProps(appState) {
  return {
    userFavorites: appState.userFavorites,
    userRecipeBooks: appState.userRecipeBooks
  }
}

export default connect(mapStateToProps)(UserFavRecipes)
