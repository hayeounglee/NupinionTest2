import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize:18, fontWeight:'bold',marginBottom:17}}>Nupinion</Text>
        <Text style={{fontSize:16,color:'#7E58E9',}}>마이페이지</Text>
      </View>
      <View style={styles.menu}>
        <Text>워터진</Text>
        <Text>중3예고입시생 | 인스타</Text>
        <View
        style={{
          flexDirection:"row",
          justifyContent:"space-evenly",
        }}>
          <Text>내가쓴글</Text>
          <Text>북마크</Text>
          <Text>단어장</Text>
        </View>
      </View>

      <View style={{flex:3,backgroundColor:'red'}}>
        <View style={{
          flex:1,
          flexDirection:"row",
          justifyContent:'space-between', 
          alignItems: 'center',
          backgroundColor:'green', 
          marginRight:25,
          }}>
          <View>
            <Text>나의 미션</Text>
            <Text>내 포인트 2,000P</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </View>
        <View style={{
          flex:3, backgroundColor:'purple',
          //flexDirection:"row",
          }}>
          <ScrollView horizontal>
          <View style={styles.card}>
            <Text>진행 중인미션</Text>
            <Text style={{fontSize: 18}}>2개</Text>
            <Image source={require('./assets/images/mission.png')} 
            style={{ width: 50, height: 50 }} />
          </View>
          </ScrollView>
        </View>

    <View style={{flex:5.5,backgroundColor:'orange'}}>
      <Text style={{fontSize:24,}}>나의 활동 요약</Text>
      <ScrollView horizontal>
        <View style={styles.summarycard}>
          <Image source={require('./assets/images/mission.png')} 
            style={{ width: 135, height: 135 }} />
          <View>
            <Text style={{
              textAlign:'center',
              fontWeight: 700,}}>소통의 왕</Text>
            <Text style={{
              textAlign:'center}'}}>커뮤니티에서 남긴 댓글의 추가 50개 이상이에요!</Text>
          </View>
        </View>
        <View style={styles.summarycard}>
          <Image source={require('./assets/images/mission.png')} 
            style={{ width: 135, height: 135 }} />
          <View>
            <Text style={{
              textAlign:'center',
              fontWeight: 700,}}>소통의 왕</Text>
            <Text style={{
              textAlign:'center}'}}>커뮤니티에서 남긴 댓글의 추가 50개 이상이에요!</Text>
          </View>
        </View>
      </ScrollView>
    </View>  
      
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
    // backgroundColor: 'black',
  },
  title:{
    flex:0.5,
    justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    backgroundColor: 'tomato'
  },
  menu:{
    flex:1,
    backgroundColor:'blue',
    marginRight: 25,
    padding: 10,
  },
  card:{
    margin:16,
    padding:8,
    backgroundColor:'white',
  },
  summarycard:{
    // flex:1,
    backgroundColor:'white',
    alignContent:'center',
    justifyContent:'center',
    padding: 15,
    margin:16,
    maxWidth: '46%',
  },

});
