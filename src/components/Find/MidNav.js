import React from 'react'
import '../../assets/style/find/find_1.css'
class MidNav extends React.Component{
    render(){
        return(
            <ul className={"intro"}>
                <li onClick={()=>{
                    this.props.history.push("/dailyspecial")
                }}>
                    <div>
                        <i className={"iconfont iconmeirituijian-"}></i>
                    </div>
                    <p>每日推荐</p>
                </li>
                <li onClick={()=>{
                    this.props.history.push("/songlist")
                }}>
                    <div>
                        <i className={"iconfont icongedan"}></i>
                    </div>
                    <p>歌单</p>
                </li>
                <li onClick={()=>{
                    this.props.history.push("/ranking")
                }}>
                    <div>
                        <i className={"iconfont iconpaihangbang---"}></i>
                    </div>
                    <p>排行榜</p>
                </li>
                <li onClick={()=>{
                    this.props.history.push("/radiostation")
                }}>
                    <div>
                        <i className={"iconfont icontuijian"}></i>
                    </div>
                    <p>电台</p>
                </li>
                <li onClick={()=>{
                    this.props.history.push("/live")
                }}>
                    <div>
                        <i className={"iconfont icondiantai1"}></i>
                    </div>
                    <p>直播</p>
                </li>
            </ul>
        )
    }
}
export default MidNav;