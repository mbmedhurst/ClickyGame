import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
// npm package which finds largest number in an array
import large from 'largest-element'

class TopNav extends Component {
    render() {
        const { score, goodGuess, topScoreArr } = this.props

        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: '#f5844a' }}>
                    <Toolbar>
                        <Grid container spacing={3} style={{ textAlign: 'center' }}>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit" style={{ fontWeight: 'bold' }}>
                                    Clicky Game
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit">
                                    {this.props.goodGuess}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit">
                                    Score: {this.props.score} | Top Score: {large(this.props.topScoreArr)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default TopNav
