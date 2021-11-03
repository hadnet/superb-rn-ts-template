/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/Ionicons';

import {Book1, ChemicalGlass, Edit, UserEdit} from 'iconsax-react-native';

import {NavigationContainer} from '@react-navigation/native';

const color = '#FF8A65';

const Section: React.FC<{
  title: string;
  icon: JSX.Element;
}> = ({children, title, icon}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {icon}
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      <Icon name="ios-arrow-forward" size={24} color={color} />
    </View>
  );
};

const App = () => {
  const {width: winWidth} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';

  const width = useSharedValue(1);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value),
    };
  });

  useEffect(() => {
    width.value = winWidth;
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <Animated.View style={[styles.box, animatedStyle]} />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One" icon={<Edit size="32" color={color} />}>
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section
              title="See Your Changes"
              icon={<UserEdit size="32" color={color} />}>
              <ReloadInstructions />
            </Section>
            <Section
              title="Debug"
              icon={
                <ChemicalGlass size="32" color={color} variant="Outline" />
              }>
              <DebugInstructions />
            </Section>
            <Section
              title="Learn More"
              icon={<Book1 size="32" color={color} variant="Outline" />}>
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'ArtBrewery',
    fontSize: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    height: 2,
    backgroundColor: 'blue',
  },
});

export default App;
