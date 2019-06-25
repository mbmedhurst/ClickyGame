import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import ImgBtn from './components/ImgButton'
// npm package which shuffles an array
import shuffle from 'shuffle-array'


class App extends Component {
  state = {
    imgArr: [
      'https://assets.fnlondon.com/2016/10/IMG013025_full4x3.jpg?width=620&height=465',
      'https://www.readersdigest.ca/wp-content/uploads/sites/14/2017/06/american-landmarks-statue-of-liberty.jpg',
      'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d3832343638393835',
      'https://media.cntraveler.com/photos/5539216cab60aad20f3f3aaa/4:3/w_480,c_limit/eiffel-tower-paris-secret-apartment.jpg',
      'https://assets.classicfm.com/2012/42/brandenburg-gate-1350560062-view-0.jpg',
      'https://img.etimg.com/thumb/msid-67205335,width-643,imgsize-796545,resizemode-4/big-ben.jpg',
      'https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/02/Sydney-Opera-House_Side-angle-1200x856.jpg',
      'https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/462971_Viator_Thinkstock_169771.jpg',
      'https://imgc.artprintimages.com/img/print/duomo-and-leaning-tower-pisa-italy_u-l-pdkpqx0.jpg?h=550&w=550&background=fbfbfb',
      'https://afar-production.imgix.net/uploads/images/post_images/images/HYF1MFuVcs/original_7c04101b7056eaf1ff178aa8389a4b26.jpg?1459742764?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954',
      'https://media-cdn.sygictraveldata.com/media/800x600/612664395a40232133447d33247d383432303438393437',
      'https://news.berkeley.edu/wp-content/uploads/2019/04/DSC00733_Notre_Dame_Paris_from_east-e1556555780620.jpg',
    ],
    guesses: [],
    score: 0,
    topScoreArr: [0],
    goodGuess: 'Click an image to begin!'
  }

  // function to shuffle the images
  // this is working!
  handleShuffle = _ => {
    let imgArr = this.state.imgArr
    shuffle(imgArr)
    this.setState({ imgArr })
  }

  // function to handle click on an image
  // this is working!
  handleClickImage = (img) => {
    let guesses = this.state.guesses
    this.handleEvaluateMatch(img)
    this.handleShuffle(img)
  }

  // function to handle scenarios depending on if image has already been clicked or not
  handleEvaluateMatch = (img) => {
    const { guesses } = this.state
    if (guesses.indexOf(img) < 0) {
      this.setState({
        guesses: [...this.state.guesses, img],
        goodGuess: 'You guessed correctly!',
        score: this.state.score + 1,
        topScoreArr: [...this.state.topScoreArr, this.state.score + 1]
      })
    } else {
      this.setState({
        guesses: [],
        goodGuess: 'You guessed incorrectly!',
        score: 0,
      })
    }
  }
  
    render() {

      return (
        <>
          <TopNav
            score={this.state.score}
            topScoreArr={this.state.topScoreArr}
            goodGuess={this.state.goodGuess}
          />

          <ImgBtn
            imgArr={this.state.imgArr}
            handleClickImage={this.handleClickImage}
          />
        </>
      )
    }
  }

  export default App