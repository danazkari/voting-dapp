import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CandidateList } from 'components'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add';
import {
  getCandidates,
  postulateNewCandidate,
  vote
} from 'modules/candidates'


const style = theme => ({
  list: {
    maxWidth: 1035,
    paddingTop: 20,
    margin: '0 auto',
  },
  button: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
})

class Home extends Component {
  componentDidMount() {
    this.props.getCandidates()
  }

  handleVote = (candidate) => {
    console.log('voting for ', candidate)
  }

  handlePostulateCandidate = () => {
    console.log('Postulating new candidate')
  }

  render() {
    const { candidates, classes} = this.props
    return (
      <div className={classes.list}>
        <CandidateList
          className={classes.list}
          candidates={candidates}
          onVote={this.handleVote}
        />
        <Button onClick={this.handlePostulateCandidate} variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCandidates: () => getCandidates()
}, dispatch)

const mapStateToProps = state => ({
  candidates: state.candidates,
})

const connectedHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default withStyles(style)(connectedHome)
