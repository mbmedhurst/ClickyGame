import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ImgCard extends Component {
    render() {
        const { classes } = this.props
        const imgArr = [
            'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/images/amexpub/0028/1307/201201-w-landmarks-taj-mahal.jpg?itok=IDXQ7hrR',
            'https://assets.fnlondon.com/2016/10/IMG013025_full4x3.jpg?width=620&height=465',
            'https://nyoobserver.files.wordpress.com/2011/06/liberty_1.jpg',
            'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832343638393835',



        ]
        return (
            <div id='container' style={{margin: '50px'}}>
            <Card className='imageCard' style={{height: '275px', width: '325px'}}>
                <CardContent>
                    <img className='image' style={{maxWidth: '100%', maxHeight: '100%'}} src='https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832343638393835' alt='landmark'></img>
                </CardContent>
            </Card>
            </div>
        )
    }
}

export default ImgCard
