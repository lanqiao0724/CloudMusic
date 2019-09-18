import React from 'react';
class Phone extends React.Component{
    render(){
        return(
            <div style={{position:"relative",height:"100%"}}>
                <div style={{width:"100%",height:"1.6rem",background:"#d33a31",display:"flex",flexDirection:"row",lineHeight:"1.6rem"}}>
                    <span style={{fontSize:".8rem",color:"white",padding:"0 .44rem",display:"inlineBlock"}} className={" iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)} ></span>
                    <span style={{fontSize:".5rem",color:"white"}}>手机号登陆</span>
                </div>
                <p style={{height:"1.68rem",borderBottom:"1px solid #e6e6e6",width:"9.88rem",marginLeft:".48rem"}}>
                    <input style={{border:"none",marginTop:".9rem",fontSize:".46rem"}} ref="phone" type="text" placeholder="请输入手机号"/>
                </p>
                <p  style={{height:"1.68rem",borderBottom:"1px solid #e6e6e6",width:"9.88rem",marginLeft:".48rem",marginBottom:".94rem"}}>
                    <input style={{border:"none",marginTop:".9rem",fontSize:".46rem"}} ref="password" type="text" placeholder="请输入密码"/>
                </p>
                <p style={{width:"9.84rem",height:"1.23rem",fontSize:".5rem",margin:"0 .46rem",lineHeight:"1.28rem",color:"white",textAlign:"center",borderRadius:".6rem",background:"#d33a31"}} onClick={()=>this.props.history.push("/signup")}>登录</p>
            </div>
        )
    }
}
export default Phone;