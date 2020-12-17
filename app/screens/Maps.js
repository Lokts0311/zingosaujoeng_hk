import React from 'react'
import MapView , { Marker, Callout } from 'react-native-maps'
import { StyleSheet, Dimensions, TouchableOpacity, Text, Image, View, Button, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const height = Dimensions.get('window').height


function Maps( {navigation} ) {
  // const [latitude,setLatitude] = 0;
  // const [longitude,setLatitude] = 0;

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition(position => {

  //     setLatitude(position.coords.latitude)
      
  //   },error => this.setState({error: error.message}),
  //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
  //   );
  // }
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    
    <MapView
      style={styles.map}
      loadingEnabled={true}
      region={{
        latitude: 22.387514,
        longitude: 113.979569,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003
      }}
      showsUserLocation={true}
      userLocationAnnotationTitle='你所在'
      userLocationPriority='passive'
      followsUserLocation={true}
      showsMyLocationButton={false}
      zoomEnabled={false}
      scrollEnabled={false}
      rotateEnabled	={false}
    >
    <StatusBar style='dark' />
    <Marker
        coordinate={{
            latitude: 22.380369, 
            longitude: 113.978149,
        }}
    >
        <Image source={require('../assets/shop.png')} style={{height: 20, width: 20 }} />
        <Callout 
            style={{width: 30, height:20 , justifyContent: 'center'}}
            onPress ={() => navigation.navigate('QuestionScreen')}
        >
            <Text>
                答題
            </Text>
            {/* <View>
                <Button //navigation later
                    color="orange"
                    title="答題"
                    onPress={
                        // () => Alert.alert("My title", "My message", [
                        // { text: "Yes", onPress: () => console.log("Yes")},
                        // { text: "No", onPress: () => console.log("No")},
                        // ])
                        () => console.log("按了千履奇緣")
                    }/>
            </View> */}
            {/* <TouchableOpacity
                onPress={ () => {
                    console.log("Marker tapped")
                }}    
            >
                <Text>恵康</Text>
            </TouchableOpacity> */}
        </Callout>
    </Marker> 
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Maps;