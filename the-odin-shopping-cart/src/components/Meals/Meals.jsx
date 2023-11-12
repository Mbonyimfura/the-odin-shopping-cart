import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'
import React, { Fragment } from 'react'

function Meals() {
  return (
    <Fragment>
        <MealsSummary/>
        <AvailableMeals/> 
    </Fragment>
  )
}

export default Meals