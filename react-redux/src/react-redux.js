import React,{Component} from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrappedComponent) =>{
    class Connect extends Component{
        static contextTypes = {
            store : PropTypes.object
        }
        constructor(){
            super()
            this.state = {allProps:{}}
        }
        componentWillMount(){
            const {store} = this.context
            this._updateProps()
            store.subscribe(()=>this._updateProps())
        }
        _updateProps(){
            const {store} = this.context
            let stateProps = mapStateToProps(store.getState(),this.props)
            this.setState({
                allProps:{
                    ...stateProps,
                    ...this.props
                }
            })
        }
        render(){
           
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return　　<WrappedComponent {...this.state.allProps} />
        }
    }
    return Connect
}






// const mapStateToProps = (state) => {
//     return {
//       themeColor: state.themeColor
//     }
//   }
//   Header = connect(mapStateToProps)(Header)
//   ...