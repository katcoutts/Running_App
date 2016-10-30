import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView} from 'react-native';

// import runningData from '../runningData'

export default class TrainingWeek extends Component {
  // constructor() {
  //     super();
  //     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //     this.state = {
  //       dataSource: ds.cloneWithRows(this.props.weekData),
  //     };
  //   }

  render() {

      return (
        <View>
          <Text style={styles.title}>{this.props.weekData}</Text>
          <Text>Monday: {this.props.weekTraining.Day1}</Text>
          <Text>Tuesday: {this.props.weekTraining.Day2}</Text>
          <Text>Wednesday: {this.props.weekTraining.Day3}</Text>
          <Text>Thursday: {this.props.weekTraining.Day4}</Text>
          <Text>Friday: {this.props.weekTraining.Day5}</Text>
          <Text>Saturday: {this.props.weekTraining.Day6}</Text>
          <Text>Sunday: {this.props.weekTraining.Day7}</Text>
        </View>
      );
  }

};

const styles = StyleSheet.create({
  title: {
    marginLeft: 12,
    fontSize: 16,
    color: 'red'
  }
});

// <ListView
//  dataSource={this.props.weekTraining}
//  renderRow={(rowData) => <Text>{rowData}</Text>} />