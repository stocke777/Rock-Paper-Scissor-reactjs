import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rock from './rock.PNG';


class Player extends React.Component{
    render(){
        return(
            <>  
                <div className='player'>
                    <button className='option'>Rock</button>
                    <button className='option'>Paper</button>
                    <button className='option'>Scissor</button>
                </div>
            </>
        )
    }
}

class Enemy extends React.Component{
    render(){
        return(
            <>  
                <div className="enemy">
                    <div className="image">
                        <img src={rock} alt="" />
                    </div>
                    <div className="timer">
                        <h2>{this.props.timer}</h2>
                    </div>
                </div>

            </>
        )
    }
}

class Sidebar extends React.Component{
    
    render(){
        return(
            <>
                <button className='restart-button'>Restart</button>
                <ul>
                    <li>Player: {this.props.scoreOf.player}</li>
                    <li>Enemy: {this.props.scoreOf.enemy}</li>
                </ul>
            </>
        )
    }
}

class Game extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            scoreOf: {
                player: 10,
                enemy: 30
            },
            timer: 3
        }
    }

    render(){
        return(
            <>
                <div className='container'>
                    <Player />
                    <Enemy 
                        timer = {this.state.timer}
                    />
                    <div className='sidebar'>
                        <Sidebar
                            scoreOf = {this.state.scoreOf}
                        />
                    </div>
                </div>
            </>
        )
    }
}


  
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
  