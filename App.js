import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import Icons from "react-native-vector-icons/Ionicons";
import Icons1 from "react-native-vector-icons/Feather";
import Icons2 from "react-native-vector-icons/Octicons";


export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.head}>
       <Image
          style={styles.images}
          source={require("./src/ins.jpg")}
          resizeMode="stretch" // static image
        />
        <View style={styles.heads}></View>
       <Icon name="heart-outlined" size={30} color="black" />
       <Icons name="chatbubble-outline" size={30} color="black" />
       </View>
       <View style={styles.story}>
       <Image
          style={styles.image}
          source={require("./src/my.jpg")} // static image
        />
         <Image
          style={styles.image}
          source={require("./src/1s.jpg")} // static image
        />
         <Image
          style={styles.image}
          source={require("./src/2s.jpg")} // static image
        />
         <Image
          style={styles.image}
          source={require("./src/3s.jpg")} // static image
        />
       </View>
       <View style={styles.post}>
       <View style={styles.posts}>
       <Image
          style={styles.images1}
          source={require("./src/post.jpg")} // static image
        />
 <Text style={styles.text}>_trshbrd</Text>
 <Icon name="dots-three-vertical" size={20} color="black" />
        </View>
        <Image
          style={styles.image1}
          source={require("./src/imgae.jpg")} 
          resizeMode="stretch"// static image
        />
        
       </View>
       <View style={styles.postline}>
       <Icon name="heart-outlined" size={35} color="black" />
       <Icons name="chatbubble-outline" size={30} color="black" />
       <Icons1 name="send" size={30} color="black" />
       <View style={styles.line}></View>
     
       <Icons1 name="bookmark" size={30} color="black" />
       </View>
       <View style={styles.foot}>
       <Icon name="home" size={35} color="black" />
       <Icons1 name="search" size={35} color="black" />
       <Icons2 name="diff-added" size={35} color="black" />
       
       <Image
          style={styles.images1}
          source={require("./src/play.jpg")} // static image
        />
           <Image
          style={styles.images1}
          source={require("./src/log.jpg")} // static image
        />

       </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  head:{
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 5,
paddingTop: 30,
gap: 10,
paddingBottom: 10
  },
  story:{
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-around',
paddingVertical: 4
  },
  post:{

  },foot:{
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
borderTopColor: 'black',
borderTopWidth: .3
  },
  image:{
    height: 100,
    width: 80
  },
  images:{
    height: 40,
    width: 150,
    
  },
  images1:{
    height: 30,
    width: 30,
    
  },
  heads:{
    flex: 1
  },
  image1:{
    height: 380,
 width: 360
  },
  posts:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
    alignItems: 'center',
    borderTopColor: 'black',
    borderTopWidth: .3
  },
  text:{
    flex: 1
  },
  postline:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10,
    paddingVertical: 5
  },
  line:{
    flex: 1
  }
});
