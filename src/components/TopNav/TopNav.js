import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
    root: {
        flexGrow: 1,
    },
}

class TopNav extends Component {
    render() {
        const {classes} = this.props

        return (
            <div className={{ root: styles.root }}>
                <AppBar position="fixed" style={{backgroundColor: '#001a8c'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Clicky Game
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default TopNav
