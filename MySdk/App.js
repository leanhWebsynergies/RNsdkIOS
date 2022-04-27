import React from 'react';
import {TextInput} from 'react-native';
import {Dimensions} from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              paddingVertical: 40,
              fontSize: 35,
              fontWeight: '600',
            }}>
            Test Create Identity
          </Text>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor="gray"
                placeholder="Your Email"
              />
            </View>
            <View style={styles.sectionContainer}>
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor="gray"
                placeholder="Your Name"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  inputStyle: {
    width: '100%',
    height: Dimensions.get('window').width / 8,
    borderWidth: 1,
    borderRadius: 8,
    padding: 9,
    borderColor: '#D2D4DA',
    paddingLeft: 50,
  },
});

export default App;
