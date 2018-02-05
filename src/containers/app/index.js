import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Home from 'containers/home'
import NotFound from 'containers/not-found'
import { HeaderBar } from 'components'

const style = {
  container: {
    marginTop: '65px',
  },
}

const App = (props) => (
  <div>
    <HeaderBar />
    <main className={props.classes.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
)

const mapStateToProps = state => ({
})

const connectedApp = connect(mapStateToProps)(App)

export default withStyles(style)(connectedApp)
