import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ImgCard extends Component {
    render() {
        const { classes } = this.props
        const imgArr = []
        return (
            <div id='container' style={{margin: '50px'}}>
            <Card className='imageCard' style={{height: '250px', width: '250px'}}>
                <CardContent>
                    <img className='image' src='../../assets/images/bigben.jpg' alt='landmark'></img>
                </CardContent>
            </Card>
            </div>
        )
    }
}

export default ImgCard
