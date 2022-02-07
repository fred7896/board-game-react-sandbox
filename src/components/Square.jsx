import React from 'react';


export default class Square extends React.Component {
    
    render() {
        console.log(this.props.imgSrc);
        return (
            <div className="square">
                {/* <div className="yep"><img src="../img/characterBlue_1.png"/></div> */}

                <img src={`../tileSet/${this.props.imgSrc}`} alt="square"/>              
            </div>
    
        );
    }
  
}