import React from 'react'
import { Redirect } from 'react-router'
import { Home, Calculator,input,Output } from './Components'
import fakeAuth from './Auth'

const routes = [
  {
    'path':'/',
    'component': Home,
    'exact': true
  },
  {
    'path':'/Calculator',
    'component': Calculator
  },
  {
    'path':'/input',
    'component': input
  },

{
    'path':'/Output',
    'component': Output
  },
];
export default routes;
