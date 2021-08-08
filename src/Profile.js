import React from 'react';
import image from './imageInSrc.png'


class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state=
        {
            fullName:'Lily',
            bio:'works since 2001',
            profession:'an artist',
            image,
            counter:0
        }

       
    }
    componentDidMount(){
        setInterval(() => {
            this.setState ({
                counter: this.state.counter +1
            })},1000)
       }



    render(){
        return(

            <div>
                <span>{this.state.counter}</span>
                <h1 style={{color:"#4A5899", fontSize:'60px', paddingBottom:'5px'}}>I'm {this.state.fullName}.</h1>
                <h1 style={{color:"#C1B2AB", fontSize:'30px', paddingBottom:'5px'}}>I'm {this.state.profession}.</h1>
                <h1 style={{color:'lightblue',fontSize:'30px', paddingBottom:'5px'}}>and I {this.state.bio}.</h1>
                <img src={this.state.image}/>
            </div>
        )
    }
}


export default Profile