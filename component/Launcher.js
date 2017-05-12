import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {fetchBanner,init} from '../actions/simpleAction'
  class Launcher extends Component {
      _onPress(){

      }
  componentWillMount(){
      const {dispatch}=this.props;
      //先拿到dispatch对象再进行reducer操作
      dispatch(init())
  }
  render() {
      const {simpleReducer, dispatch} = this.props;
      return (
        <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={()=>{
          dispatch(fetchBanner())
        }}>
        <View style={{width:150,height:100,backgroundColor:'red'}}>
        <Text style={styles.welcome}>
            1234
            {JSON.stringify(simpleReducer.imgs)}
        </Text>
            </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    color:"#00ff00",
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
//指定组件的reducer，也就是说将组件的state转换为了由redux统一管理的props
function mapStateToProps(state){
  const {simpleReducer}=state;
  return{
    simpleReducer
  }
}
//注册组件到redux上
export default connect(mapStateToProps)(Launcher);