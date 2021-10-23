import { Route, Switch } from 'react-router-dom'
import React from 'react'

import Article from './pages/Article/Article.jsx'
import GlobalFeed from './pages/PagesFeed/GlobalFeed/GlobalFeed.jsx'
import TagFeed from './pages/PagesFeed/TagFeed/TagFeed.jsx'
import YourFeed from './pages/PagesFeed/YourFeed/YourFeed.jsx'
import Authentication from './pages/Authentication/Authentication.jsx'
import CreateArticle from './pages/CreateArticle/CreateArticle.jsx'
import EditArticle from './pages/EditArticle/EditArticle'
import Settngs from './pages/Settings/Settings.jsx'
import Profile from './pages/Profile/Profile.jsx'

const Routes = () => {
   return (
      <Switch>
         <Route exact path='/' component={GlobalFeed} />
         <Route path='/tags/:slug' component={TagFeed} />
         <Route path='/feed' component={YourFeed} />
         <Route path='/article/:slug/edit' component={EditArticle} />
         <Route path='/article/:slug' component={Article} />
         <Route path='/login' component={Authentication} />
         <Route path='/register' component={Authentication} />
         <Route path='/editor' component={CreateArticle} />
         <Route path='/settings' component={Settngs} />
         <Route path='/profile/:slug' component={Profile} />
         <Route path='/profile/:slug/favorites' component={Profile} />
      </Switch>
   )
}

export default Routes