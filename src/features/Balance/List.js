import React from 'react'
import List from './components/List'
import { connect } from 'react-redux'
import { pipe, componentDidMount } from 'utils'
import * as actions from './actions'
import { allBalancesSelector } from './selectors'
import { createStructuredSelector } from 'reselect'

const mapStateToProps = createStructuredSelector({
  balances: allBalancesSelector,
})

const mapDispatchToProps = actions

const decorate = pipe(
  componentDidMount(({ getBalances }) => console.log(getBalances())),
  connect(mapStateToProps, mapDispatchToProps)
)

export default decorate(List)
