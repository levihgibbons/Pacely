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

const ProfileScreen = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    level: 'Intermediate',
    totalRuns: 45,
    totalDistance: 250.5,
    achievements: 12,
    streak: 5,
  });

  const [stats, setStats] = useState({
    weeklyDistance: 25.3,
    weeklyRuns: 3,
    averagePace: 5.45,
    bestPace: 4.30,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.level}>{user.level} Runner</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{user.totalRuns}</Text>
            <Text style={styles.statLabel}>Total Runs</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{user.totalDistance} km</Text>
            <Text style={styles.statLabel}>Total Distance</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{user.achievements}</Text>
            <Text style={styles.statLabel}>Achievements</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Streak</Text>
          <View style={styles.streakContainer}>
            <Text style={styles.streakValue}>{user.streak} days</Text>
            <Text style={styles.streakLabel}>🔥 Keep it up!</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Stats</Text>
          <View style={styles.weeklyStats}>
            <View style={styles.weeklyStat}>
              <Text style={styles.weeklyStatValue}>{stats.weeklyDistance} km</Text>
              <Text style={styles.weeklyStatLabel}>Distance</Text>
            </View>
            <View style={styles.weeklyStat}>
              <Text style={styles.weeklyStatValue}>{stats.weeklyRuns}</Text>
              <Text style={styles.weeklyStatLabel}>Runs</Text>
            </View>
            <View style={styles.weeklyStat}>
              <Text style={styles.weeklyStatValue}>{stats.averagePace} min/km</Text>
              <Text style={styles.weeklyStatLabel}>Avg Pace</Text>
            </View>
            <View style={styles.weeklyStat}>
              <Text style={styles.weeklyStatValue}>{stats.bestPace} min/km</Text>
              <Text style={styles.weeklyStatLabel}>Best Pace</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingButtonText}>Privacy</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  level: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  statCard: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  streakContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  streakValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  streakLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  weeklyStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  weeklyStat: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  weeklyStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weeklyStatLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  settingButton: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingButtonText: {
    fontSize: 16,
  },
});

export default ProfileScreen; 