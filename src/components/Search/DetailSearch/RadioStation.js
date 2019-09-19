import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class RadioStation extends React.Component{
    render() {
        const radioStationList  = this.props.radioStationList
        const djRadios = (this.props.radioStationList.result?this.props.radioStationList.result.djRadios:"");
        //console.log(this.props.radioStationList.result,"1")
        return(
            <div className={"radioStation_k"}>
                <h5>电台</h5>
                <ul>
                    {
                        djRadios?djRadios.map(v=>(
                            <li key={v.id}>
                                <span><img src={v.picUrl} alt=""/></span>
                                <span>
                                <p>{v.name}</p>
                                <p>{v.dj.nickname}</p>
                        </span>
                            </li>
                        )):[].map(v=>{

                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getRadioStationList()
    }
}
function mapStateToProps(state,props) {
    return{
        radioStationList: state.search.radioStationList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (RadioStation)