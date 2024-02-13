import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component{
    state = {
        hasError: false
    }

    static getDerivedStateFromError(){
        return {hasError: true}
    }

    componentDidCatch(err, info){
        console.error("Error caught ", err, info);
    }

    render(){
        if (this.state.hasError){
            return(
                <h2>Could not load page <Link to={"/"}> Go to home page </Link></h2>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
