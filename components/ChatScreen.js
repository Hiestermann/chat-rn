import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import {
  Platform,
  Text,
  View,
  TouchableHighlight,
  Modal,
  ScrollView,
  Button,
  ViewPropTypes,
} from 'react-native';
import {GiftedChat, Send, InputToolbar, SystemMessage, Bubble} from 'react-native-gifted-chat';
import {Icon} from 'react-native-elements';
import CustomSystemMessage from './CustomSystemMessage';
import styles from './Styles'
import CameraRollPicker from 'react-native-camera-roll-picker'
import ActionButtons from './ActionButtons';

 class ChatScreen extends Component {

  constructor(props) {
    super(props)
    this._images = [];
    this.state = {
      messages: [],
      modalIsActive: false
    };
    
  }
    
    
      componentWillMount() {
        this.setState({
          messages: [],
        });
      }
    
      onSend(messages = []) {
        console.log(messages)
        this.setState((previousState) => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }));
      }

      _renderInputToolbar = (props) =>{
          return(
            <ActionButtons {...props}/>
          )
        
      }
      
      _modalImagePicker = () => (
        <View style= {styles.modalContent}>
          <Button style={styles.buttonDismissImagePicker} title='X'/>
        </View>
      )

      renderBubble(props) {
        return (
          <Bubble
            {...props}
          />
        );
      }
    
      renderCustomView(props) {
        return(
          <View/>
        )
      }

      render() {
        return (
          <GiftedChat
            messages={this.state.messages}
            renderSend={()=>{}}
            onSend={(messages) => this.onSend(messages)}
            renderAccessory={this._renderInputToolbar}
            renderBubble={this.renderBubble}
            isAnimated
            renderCustomView={this.renderCustomView}
            renderSystemMessage={(props) => ( <InfoRow {...props}/>
            )}
            user={{
              _id: 1,
            }}
          />
        );
      }
    
}



const InfoRow = (props) => {
console.log(props)
  var type = props.currentMessage.type
  var headerText =  props.currentMessage.text
  
  return(

    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10
    }}>
    <TouchableHighlight
    onPress={() => console.log(props.currentMessage)}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',flexDirection: 'row', width: 300, height: 50, backgroundColor: 'blue', borderRadius: 10, paddingBottom: 5}}>
      <Icon
        iconStyle={{paddingLeft: 5, paddingRight: 5, paddingTop: 10}}
        name={type}
        type='evilicon'
        size={50}
        color='#517fa4'
        onPress={this.handleCalendar}
        />
        <Text> {headerText} </Text>
      </View>
      </TouchableHighlight>
    </View>
  )
}



export default ChatScreen;