/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView
} from 'react-native';

import Row from './components/Row';
import people from './demoData';
import runningData from './runningData';
import TrainingWeek from './components/WeekTraining';

export default class RunningApp extends Component {
  constructor() {
      super();

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(runningData),
        data: runningData
      };
      console.log("this.state.data", runningData)
    }

    render() {

        return (
          <View style = {styles.container}>
            <Text style = {styles.header}>Kat's Training Plan</Text>
            <ScrollView style={styles.scroll}>
              <TrainingWeek
                weekData='Week 1'
                weekTraining = {runningData[0]} ></TrainingWeek> 
              <TrainingWeek
                weekData='Week 2'
                weekTraining = {runningData[1]} ></TrainingWeek> 
              <TrainingWeek
                weekData='Week 3'
                weekTraining = {runningData[2]} ></TrainingWeek> 
              <TrainingWeek
                weekData='Week 4'
                weekTraining = {runningData[3]} ></TrainingWeek> 
              <TrainingWeek
                weekData='Week 5'
                weekTraining = {runningData[4]} ></TrainingWeek> 
              <TrainingWeek
                weekData='Week 6'
                weekTraining = {runningData[5]} ></TrainingWeek>
            </ScrollView>
          </View>

        );
      }
    }

 

  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    header:{
      fontSize: 26,
      fontWeight: 'bold',
      color: 'black',
      backgroundColor: 'skyblue',
      textAlign: 'center'
    },
    scroll: {
      marginTop: 20,
    }
  });


AppRegistry.registerComponent('RunningApp', () => RunningApp);
