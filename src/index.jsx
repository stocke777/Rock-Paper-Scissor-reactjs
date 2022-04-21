import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import rock from './rock.PNG';

function Option(props) {
    console.log(props)
    return (
      <button 
        className="option" 
        onClick={()=>props.onClick(props.value)}
        >
        {props.value}
      </button>
    );
  }

class Player extends React.Component{
    render(){
        console.log(this.props)
        return(
            <>  
                <div className='player'>
                    <Option value = {'Rock'} onClick = {this.props.onClick}/>
                    <Option value = {'Paper'} onClick = {this.props.onClick}/>
                    <Option value = {'Scissor'} onClick = {this.props.onClick}/>
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
                player: 0,
                enemy: 0
            },
            timer: 3
        }
    }

    handleClick(value){
        console.log('reached game', value)
        console.log(this.state)
        // set timer on

        // Find enemy value
        const choices = ['Rock', 'Paper', 'Scissor'];   
        const randomElement = choices[Math.floor(Math.random() * choices.length)];
        console.log(randomElement)

        // Compare value
        if(value === randomElement){
            console.log("TIE")
        }else if(
            (value === 'Scissor' && randomElement === 'Paper') || 
            (value === 'Paper' && randomElement === 'Rock') || 
            (value === 'Rock' && randomElement === 'Scissor')
            ){
                console.log('Player Win')
                this.setState({
                    scoreOf:{
                        player: this.state.scoreOf.player + 10,
                        enemy: this.state.scoreOf.enemy
                    },
                    timer: 0
                })
            }
        else{
            console.log('Enemy Win')
            this.setState({
                scoreOf:{
                    player: this.state.scoreOf.player,
                    enemy: this.state.scoreOf.enemy + 10
                },
                timer: 0
            })
        }

        // set score

    }

    render(){
        return(
            <>
                <div className='container'>
                    <Player onClick={this.handleClick}/>
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
  