import React from "react";

export default class LoopingAnimationWhite extends React.Component {
    render() {
        return (
            <video 
            ref={ref => (this.video = ref)}
            autoPlay
            muted 
            loop
            defaultmuted
            playsinline
            id="background-video"
            style={{
                // position: "fixed",
                width: "100%",
                height: "100%",
                maxWidth: "500px",
                opactiy: this.state.loading ? 0 : 1,
                transition: "opacity, 2s ease-in-out"
            }}
            >
                <source
                src="https://d1g9ggdtg3kjm9.cloudfront.net/newimg15042023/done_properly_230413-w_1.mp4"
                type="video/mp4" />
            </video>
        )
    }

    state = {
        loading: true
    }
    
    componentDidMount() {
        if (this.video) {
          this.video.addEventListener("loadeddata", () => {
            this.setState({ loading: false });
          });
        }
    }
    
    componentWillUnmount() {
        if (this.video) {
            this.video.removeEventListener("loadeddata", () => {
    
            })
        }
    }

}