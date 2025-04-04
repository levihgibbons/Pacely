import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

type Goal = {
  id: string;
  title: string;
  type: 'distance' | 'consistency' | 'pace' | 'time';
  target: number;
  current: number;
  unit: string;
  deadline?: string;
};

const GoalsScreen = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Monthly Distance',
      type: 'distance',
      target: 100,
      current: 45,
      unit: 'km',
      deadline: '2024-04-30',
    },
    {
      id: '2',
      title: 'Weekly Consistency',
      type: 'consistency',
      target: 3,
      current: 2,
      unit: 'runs',
      deadline: '2024-04-07',
    },
    {
      id: '3',
      title: 'Pace Improvement',
      type: 'pace',
      target: 5,
      current: 5.5,
      unit: 'min/km',
    },
  ]);

  const getProgressPercentage = (goal: Goal) => {
    return (goal.current / goal.target) * 100;
  };

  const addNewGoal = () => {
    // TODO: Implement goal creation
    console.log('Add new goal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Goals</Text>
          <TouchableOpacity style={styles.addButton} onPress={addNewGoal}>
            <Text style={styles.addButtonText}>+ Add Goal</Text>
          </TouchableOpacity>
        </View>

        {goals.map((goal) => (
          <View key={goal.id} style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalTitle}>{goal.title}</Text>
              <Text style={styles.goalProgress}>
                {goal.current} / {goal.target} {goal.unit}
              </Text>
            </View>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${Math.min(getProgressPercentage(goal), 100)}%` },
                ]}
              />
            </View>

            {goal.deadline && (
              <Text style={styles.deadline}>
                Deadline: {new Date(goal.deadline).toLocaleDateString()}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  goalCard: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalProgress: {
    fontSize: 16,
    color: '#666',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  deadline: {
    fontSize: 14,
    color: '#666',
  },
});

export default GoalsScreen; 