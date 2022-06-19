import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import picture from './assets/profile-pic.png';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card';

const App = () => {
  function handleSocialNetwork(social_network) {
    switch (social_network) {
      case 'linkedin':
        Alert.alert(
          'Meu LinkedIn',
          'https://www.linkedin.com/in/janeissakarine/',
        );
        break;

      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/jkss13');
        break;

      case 'user':
        Alert.alert('Sobre mim', 'https://github.com/about.me/karinesantos');
        break;

      default:
        break;
    }
  }

  return (
    <>
      <View style={style.page}>

        <View style={style.header_container}>
          <Image source={picture} style={style.picture} />
          <Text style={style.name}>KARINE SANTOS</Text>
          <Text style={style.career}>Full-stack Developer</Text>
          <View style={style.social_networks}>
            <TouchableOpacity onPress={() => handleSocialNetwork('linkedin')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialNetwork('github')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialNetwork('user')}>
              <Icon name="user" size={30} />
            </TouchableOpacity>
          </View>
        </View>
          <Card title='Formação Acadêmica'> 
            <Text style={style.card_content_text}>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS - IFPE (EM CURSO)</Text>
            <Text style={style.card_content_text}>RELAÇÕES INTERNACIONAIS - FACULDADE DAMAS</Text>
          </Card>
          <Card title='Experiência Profissional'>
          <Text style={style.card_content_text}>JAVA</Text>
            <Text style={style.card_content_text}>PYTHON</Text>
            <Text style={style.card_content_text}>JAVASCRIPT</Text>
            <Text style={style.card_content_text}>HTML E CSS</Text>
            <Text style={style.card_content_text}>REACT, REACT NATIVE</Text>
          </Card>
      </View>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  header_container: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picture: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  career: {
    color: '#939393',
    marginBottom: 10,
  },
  social_networks:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});
