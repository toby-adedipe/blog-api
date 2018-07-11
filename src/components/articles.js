import React from 'react';

const Articles = (props)=>{
    console.log(props)
    return(
        <div>
            Articles page
        </div>
    )
}
/*
componentDidMount(){
        rootRef.on('value', snapshot=>{
            this.setState ({
                topic:snapshot.child('post-1').val().topic,
                content: snapshot.child('post-1').val().content
            } )
        });
    }
   render(){
 
    }
} */

export default Articles