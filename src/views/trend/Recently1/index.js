
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../../store/actionCreator/profile/index";
import { Link } from "react-router-dom";
class Recently1 extends React.Component {
    render() {
        const { record } = this.props;
        const songs = [];
        record.map(v => {
            songs.push(v.song)
        })
        return (
            <>
                <p className="cy_ml_hh cy_lm_hh" >
                    <span className={"iconfont iconzuojiantou"} onClick={() => this.props.history.go(-1)}></span>
                    <span >最近播放</span>
                    <span style={{ marginLeft: "4.2rem", lineHeight: ".29rem" }} className={"iconfont iconfangdajing"}></span>
                    <span className={"iconfont icondiandiandian"}></span>
                </p>
                <div className={"single_k"}>
                    <div className={"cy_single_k"}>
                        <p>
                            <i className={"iconfont iconbofang"}></i>
                            <i>播放全部 (共{record.length}首)</i>
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
                {
                    record.map((v, i) => (
                        <Link to={"/addTrends/"+v.song.id+"/"+v.song.name}>
                            <div key={i} className={"cy_ml_box"} style={{ paddingLeft: ".28rem", paddingRight: ".5rem" }}>
                                <div className={"cy_ml_r"}>
                                    <div>
                                        <p>
                                            <span className={"cy_song_width"}>{v.song.name}</span>
                                            <img style={{ display: v.song.mv ? "inline-block" : "none" }} className="cy_ml_mv" src={""} />
                                        </p>
                                        <p>
                                            <img className="cy_ml_sq" src={""} />
                                            <span className="cy-name-width">{v.song.ar[0].name} - {v.song.al.name}</span>
                                        </p>

                                    </div>
                                    <span style={{ paddingRight: ".1rem" }} className={"iconfont icondiandiandian"} ></span>
                                </div>
                            </div>
                        </Link>

                    ))
                }

            </>
        )
    }
    componentDidMount() {
        this.props.getRecord();
    }
}
function mapStateToProps(state, props) {
    return {
        record: state.profile.cyRecord
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Recently1);