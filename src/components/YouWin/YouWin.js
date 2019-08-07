import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

class YouWin extends Component {
    render() {
        const { winLose } = this.props
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);

        function handleClick(event) {
            setAnchorEl(event.currentTarget);
        }

        function handleClose() {
            setAnchorEl(null);
        }

        const open = Boolean(anchorEl);
        const id = open ? { winLose } : undefined;

        return (
            <div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Typography className={classes.typography}>The content of the Popover.</Typography>
                    <Button aria-describedby={id} variant="contained" onClick={handleClose}>
                    Ok
                </Button>
                </Popover>
            </div>
        )
    }
}
export default YouWin
