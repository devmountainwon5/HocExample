import React, {Component} from 'react';

export default (WrappedComponent) => {
    return class LoaderWrapper extends Component {
       render(){
           debugger
            const shouldLoad = this.props.data.length <= 0;
            if(shouldLoad){
                return <div className="loader"></div>
            }else{
                return <WrappedComponent {...this.props}/>
            }
       } 
    }

}