import React, { Component } from 'react'
import './ImgButton.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/button'

class ImgBtn extends Component {
    render() {
        const { imgArr, handleClickImage, className } = this.props


        return (
            <Grid container className='pageCont'>
            <Grid container className='imgCont' style={{ marginTop: '100px', marginLeft: '15%', marginRight: '15%'}}> {
                imgArr.map(img => {
                    return <Grid item sm={3} md={3} lg={3} xl={3}>
                        <Button className='imgBtn' style={{ height: '120px', width: '160px', marginBottom: '20px' }} onClick={() => handleClickImage(img)}>
                            <img className='image' style={{ maxWidth: '110%', maxHeight: '110%' }} src={img} alt='landmark'></img>
                        </Button>
                        </Grid>
                })
            }
            </Grid>
            </Grid>
        )
    }
}

export default ImgBtn
