import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
    root: {
        flexGrow: 1,
    },
}

class TopNav extends Component {
    render() {
        const { classes } = this.props

        return (
            <div className={{ root: styles.root }}>
                <AppBar position="static" style={{ backgroundColor: '#001a8c' }}>
                    <Toolbar>
                        <Grid container spacing={3} style={{textAlign: 'center'}}>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit" style={{fontWeight: 'bold'}}>
                                    Clicky Game
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit">
                                    You guessed Correctly!
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h6" color="inherit">
                                    Score: 0 | Top Score: 11
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
