import { Component } from "react";

class Carousel extends Component{
    state = { active: 0 };

    static defaultProps = {
        images: "https://pets-images.dev-apis.com/pets/none.jpg"
    }

    handleIndexClick = (e) => {
        // console.log(e.target.dataset.index);
        this.setState({
            active: +e.target.dataset.index
        })
    }

    render(){
        const { active } = this.state;
        const { images } = this.props;

        return (
            <div className="carousel">
                <img src={images[active]} alt="hero image" />
                <div className="carousel-smaller">
                    {images.map((photo, index) => {
                       return <img onClick={this.handleIndexClick} src={photo}
                        data-index={index}
                        key={photo}
                        className={index === active ? "active" : ""}
                        alt="animal-thumbnail"  />
                    })}
                </div>
            </div>
        )
    }
}

export default Carousel;
