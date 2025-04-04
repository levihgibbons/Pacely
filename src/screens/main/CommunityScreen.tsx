import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

type Workout = {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  title: string;
  type: string;
  distance: number;
  duration: number;
  pace: number;
  likes: number;
  comments: number;
  tags: string[];
};

const CommunityScreen = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([
    {
      id: '1',
      user: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      },
      title: 'Morning Run',
      type: 'Easy Run',
      distance: 5.2,
      duration: 30,
      pace: 5.45,
      likes: 12,
      comments: 3,
      tags: ['#morningrun', '#easyrun'],
    },
    {
      id: '2',
      user: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      },
      title: 'Interval Training',
      type: 'Interval',
      distance: 8.5,
      duration: 45,
      pace: 4.30,
      likes: 24,
      comments: 8,
      tags: ['#intervals', '#speedwork'],
    },
  ]);

  const likeWorkout = (id: string) => {
    setWorkouts((prev) =>
      prev.map((workout) =>
        workout.id === id
          ? { ...workout, likes: workout.likes + 1 }
          : workout
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Community</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {workouts.map((workout) => (
          <View key={workout.id} style={styles.workoutCard}>
            <View style={styles.userInfo}>
              <Image
                source={{ uri: workout.user.avatar }}
                style={styles.avatar}
              />
              <Text style={styles.userName}>{workout.user.name}</Text>
            </View>

            <View style={styles.workoutInfo}>
              <Text style={styles.workoutTitle}>{workout.title}</Text>
              <Text style={styles.workoutType}>{workout.type}</Text>

              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{workout.distance} km</Text>
                  <Text style={styles.statLabel}>Distance</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{workout.duration} min</Text>
                  <Text style={styles.statLabel}>Time</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{workout.pace} min/km</Text>
                  <Text style={styles.statLabel}>Pace</Text>
                </View>
              </View>

              <View style={styles.tagsContainer}>
                {workout.tags.map((tag, index) => (
                  <Text key={index} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>

              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => likeWorkout(workout.id)}
                >
                  <Text style={styles.actionText}>❤️ {workout.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>💬 {workout.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  filterButtonText: {
    fontSize: 14,
    color: '#666',
  },
  workoutCard: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  workoutInfo: {
    marginTop: 10,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  workoutType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e1e1e1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default CommunityScreen; 