import React from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const style = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    flexGrow: 1,
    width: '33%',
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
}

const CandidateList = ({ classes, candidates, onVote }) => (
  <div className={classes.root}>
    {candidates
      .sort(({ votes: votesA }, { votes: votesB }) => votesB - votesA)
      .map(({ name, votes, percentage }) => (
      <Card key={`candidate-${name.split(' ')[2]}`} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`https://api.adorable.io/avatars/345/${name.split(' ')[2]}.png`}
          title={name}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {
              name
                .split(' ')
                .map(section => `${section.charAt(0).toUpperCase()}${section.slice(1)}`)
                .join(' ')
            }
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            Votes {(percentage * 100).toFixed(2).replace('.00', '')}%
          </Typography>
          <Typography component="p">
            Sit maxime facilis temporibus perspiciatis
            repellat! Officia ab non rerum quo illo
            Itaque enim voluptatem vitae quae repellat?
            Ea laudantium quidem quos incidunt cupiditate?
            Ab saepe similique sint laboriosam esse?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => onVote({name, votes})}
          >
            Vote!
          </Button>
        </CardActions>
      </Card>
    ))}
  </div>
)

export default withStyles(style)(CandidateList)
