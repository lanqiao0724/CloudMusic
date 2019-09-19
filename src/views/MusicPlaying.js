import React from 'react'
import "../assets/style/mineCloud/musicPlaying.css";
import Audio from "../components/MineCloud/Audio"
class MusicPlaying extends React.Component{
    render(){
        return(
            <>
                <div className={"cyHead"}>
                    <div>
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <p>
                            <span>歌名</span>
                            <span>歌词</span>
                        </p>
                    </div>
                    <span className={"iconfont iconshare"} ></span>
                </div>
                <div className={"cyMusic"}>
                    <div className={"cyson1"}>
                         <img className={"cyimg1"} src={require("../assets/mine_img/changpian.jpg")}></img>
                         <div className={"cyImgBox"}>
                             <img/>
                         </div>
                         <div>
                         <span className={"iconfont iconaixin cyiconaixin"} ></span>
                         <span className={"iconfont iconxiazai1"} ></span>
                         <span className={"iconfont iconpinglun cyiconpinglun"} ></span>
                         <span className={"iconfont icondiandiandian"} ></span>
                         </div>
                    </div>
                </div>
                <footer className={"cyFooter"}>
                    <Audio></Audio>
                    {/* <audio src={require("../assets/mine_img/薛之谦 - 刚刚好.mp3")} ref="cyAudio" autoPlay controls></audio> */}
                </footer>
            </>
        )
    }
}
export default MusicPlaying;