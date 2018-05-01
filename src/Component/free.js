
import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Item, Text, Button, Input, Card, CardItem, Icon, Header, Left, FlatButton, ListItem, CardActions, Body, Title, Container, Right } from 'native-base';
import { CheckBox } from 'react-native-elements'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      bk:"",
      fontcolor:'rgb(156,156,156)'

    }
  }
  loginSubmit() {
    this.setState({ checked: true })

  }
  render() {

    return (
      <View style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',



      }}>
        <View style={{ backgroundColor: 'rgb(198,40,39)' }} >


          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>


            <Icon name='md-arrow-back' style={{ color: 'white' }} />


            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              S5 Main Order
             </Text>

            <Icon style={{ color: 'white' }} name='ios-search-outline' />

          </View>
        </View>


        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ maxHeight: 50, justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 20, color: 'rgb(204, 204, 204)', }}>    No order slected form any</Text>
            <Text style={{ fontSize: 20, color: 'rgb(204, 204, 204)', }}>    Kitchen yet</Text>
          </View>

          <Icon name='ios-alert-outline' style={{ fontSize: 65, color: "rgb(224, 224, 224)" }} />
        </View>

        <View style={{ backgroundColor: 'rgb(241,241,241)' }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
             <View style={{padding:6}}>
              <Icon name="logo-vimeo" />
</View>

              <Text style={{ fontSize: 20, color: 'rgb(60,60,60)' }}>
                Kitchen
           </Text>
            </View>
            <CheckBox
              title='Select multiple kitchen'
              checked={this.state.checked}
              containerStyle={{ backgroundColor: "rgb(18, 167, 103)" }}
              textStyle={{ color: "white" }}
              size={17}
              checkedColor={color = 'rgb(192, 225, 211)'}
              onPress={this.loginSubmit.bind(this)}
            />

          </View>
          <View>

            <Item searchBar rounded style={{ borderWidth: 1, borderRadius: 11, padding: 2, borderColor: 'rgb(204, 204, 204)', margin: 10, marginLeft: 6, backgroundColor: 'white' }}>
              <Icon name="ios-search" />
              <Input placeholder="Search people cddgdsand places" placeholderTextColor='rgb(204,204,204)' />

            </Item>


          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 3 }}>

            <ScrollView horizontal={true}>
              <View style={{ flexDirection: 'row' }}>
                <Button bordered rounded  style={{borderColor:'red',marginEnd:8, 
                backgroundColor:this.state.bk ,color: this.state.fontcolor}}onPress={()=>{this.setState({bk:'red', fontcolor:'white'})}}
   >
                  <Text style={{ color: this.state.fontcolor , }} >
                    nehari
    </Text>
                </Button>

                <Button bordered rounded>
                  <Text>
                    nehari
    </Text>
                </Button>
                <Button bordered rounded>
                  <Text>
                    nehar3i
    </Text>
                </Button>
                <Button bordered rounded>

                  <Text>
                    nehari4
    </Text>
                </Button>

                <Button bordered rounded>

                  <Text>
                    nehari5
    </Text>
                </Button>

                <Button bordered rounded>
                  <Text>
                    nehari6
    </Text>
                </Button>
                <Button bordered rounded>
                  <Text>
                    nehari7
    </Text>
                </Button>


              </View>
            </ScrollView>


            {/* <Button rounded bordered>
                  <Text>Light</Text>
                </Button>
            <ScrollView horizontal={true}  >
              <View style={{ flexDirection: 'row' }}>

                <Button rounded>
                  <Text>Light</Text>
                </Button>
                <Button rounded>
                  <Text>Light</Text>
                </Button>
              
                <Button rounded >
                  <Text>Light</Text>
                </Button>
                <Button rounded>
                  <Text>Light</Text>
                </Button>
                <Button rounded bordered>
                  <Text>Light</Text>
                </Button>
                <Button bordered>
                  <Text>Primary</Text>
                </Button> */}
            {/* <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Nihari</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Burger</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Anda wala Burger</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 18, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem>
                <CardItem rounded style={{ alignItems: "center", height: 33, borderWidth: 1, margin: 1, borderRadius: 20, borderColor: 'red' }}>
                  <Text style={{ color: 'rgb(204,204,204)' }}>Polayo</Text>
                </CardItem> */}

            {/* </View> */}



            {/* </ScrollView> */}

          </View>
        </View>

      </View>

    )
  }
}