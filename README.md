# React is latest frameWork used by facebook for development of large scale application it usses the redux for managing application  state. hhere is how we can connect our state to our react app.create react app by 

npx create-react-app <app-name>

# the src and other folders doesnt exist create src and create folder components folder inside src folder and under coponents folder folder home and in home folder create home.js file tat contain following code 

import React from 'react'

class Home extends React.Component{
 
    mainver =(e) => {
        alert('hello')
    }
    render(){
        return <>
        <div onClick={this.mainver}>Hello luv</div>
        </>
    }
}
export default Home;

# add it to app.js file 
import React from 'react';
import Home from './components/home/home'

function App() {
  return (
  <div>
    <Home />
    </div>
  );
}

export default App;

# serve it or host it on local host by running following command in terminal 

npm start

# now install redux, react redux using command 

npm i redux react-redux

# we have successfully installed redux now we need to maintain state so create folder redux whisch contain three folders namely
# 1. constants ( contains constant file where all the constant types are declared )
# 2. reducers ( contain reducer file that maintain state )
# 3. actions ( contain action file tat contains action dispatchers ) and file index.js

# create constants.js in constant folder and create constant apcall 

export const Api_call = "API_CALL"

# Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.under reducr folder create reducer.js file 

import { Api_call } from '../constants/constants'

const initialstate ={

 count:0,
}

export const Homereducer = (state=initialstate,action) => {
    switch(action.type){
        case Api_success:
            return{
              count:count+1
            }
        default:
            return state;
    }
}

# in above file the initial state is the state of application and reducer function accepts two arguments and one is state and another is action and when an action is dispatched reducer function is called and changes the state os an application accordingly to dispatched action

# now create action file in actions folder as actions.js that contain action creator

import {Api_call} from '../constants/constants'
export const apiCall =()=>{
    return {
        type: Api_call
    }
}

# now its time to create store redux provides create store function from redux package  in indx.js file in redux folder import create store from redux and pass the reducer we created and export it as a store ( it cnnot be store can be any thing )

import {createStore} from 'redux'
import { Homereducer } from "./reducers/reducer";
export const Store = createStore(Homereducer) 

# connect redux to the app by using provider from react redux, open app .js file and import provider and pass the store to app

import React from 'react';
import {Provider} from 'react-redux'
import { Store } from "./redux/index";
import Home from './components/home/home'
function App() {
  return (
   <Provider store={Store}> 
    <Home />
    </div></Provider>
  );
}
export default App;

# we successfully connected to store now show the state in app edit the home.js file as follows 

