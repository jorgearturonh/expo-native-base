import React from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import * as Font from 'expo-font';
export default function App() {

  const [isReady, setReady] = React.useState(false)

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    })
    setReady(true)
  }

  React.useEffect( ()=> {
    loadFonts()
  }, [isReady])

  if(!isReady) {
    return <Text>Loading</Text>
  }

  return (
   <StyleProvider style={getTheme(material)}>
    <Container>
      <Content>
        <Text>
          I have changed the text color.
        </Text>
      </Content>
    </Container>
  </StyleProvider>
 );
}

