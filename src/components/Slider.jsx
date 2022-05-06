import {Component} from 'react';

class Slider extends Component {
  state = {
    initialMousePosX :0,
    offsetX :0,
    percentage : 1,
  };

  componentDidMount() {
    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', this.isMoving);
    });
  }

  isMouseDown = (e) => {
    this.setState({initialMousePosX : e.clientX - this.state.offsetX});
    document.addEventListener('mousemove', this.isMoving); 
  }
  isMoving = (e) => {
    let progressBarWidth = document.querySelector('.progress').clientWidth;
    let diffX = e.clientX - this.state.initialMousePosX; 
    if(diffX >= progressBarWidth) diffX = progressBarWidth;
    else if(diffX <= 0) diffX = 1;
    
    this.setState({offsetX : diffX});
    this.setState({percentage : Math.ceil(this.state.offsetX / progressBarWidth * 100)});

  }

  onClickPercent = (e) => {
    if(e.target === e.currentTarget) return;
    let posX;
    switch (e.target.className) {
      case 'spot_1':
        posX = 0;
        break;
      case 'spot_25':
        posX = 85;
        break;
      case 'spot_50':
        posX = 170;
        break;
      case 'spot_75':
        posX = 255;
        break;
      case 'spot_100':
        posX = 340;
        break;
    }
    const percent = e.target.innerText.replace('%', '');
    this.setState({percentage : percent});
    this.setState({offsetX : posX});
  }

  render(){
    return (
      <div className="slider_container">
        <div className="percent_box">
          <span className="number">{this.state.percentage}</span>
        </div>
        <div className="inner">
          <div className="progress">
            {
              [1,25,50,75,100].map((v) => 
              <span key={v.toString()} className={`spot_${v} ${this.state.percentage >= v ? 'active' : ''}`}>{`${v}%`}</span>)
            }
            <div 
              className="progress_bar" 
              style={{ width: this.state.percentage + '%'}}
            ></div>
            <button 
              className="controller" 
              onMouseDown={this.isMouseDown} 
              style={{ left: this.state.percentage + '%'}}
            >move</button>
          </div>
          <div className="percent" onClick={this.onClickPercent}>
            {[1,25,50,75,100].map(v => <span key={v.toString()} className={`spot_${v}`}>{`${v}%`}</span>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;