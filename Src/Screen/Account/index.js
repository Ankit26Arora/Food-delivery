import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Account = () => {
  const totalSeats = 20;
  const [seats, setSeats] = useState(Array(totalSeats).fill(false)); 

  const handleSeatPress = (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index]; 
    setSeats(newSeats);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Seat Booking</Text>
      <View style={styles.seatContainer}>
        {seats.map((isBooked, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.seat, isBooked ? styles.bookedSeat : styles.availableSeat]}
            onPress={() => handleSeatPress(index)}
            disabled={isBooked}
          >
            <Text style={styles.seatText}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  seatContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  seat: {
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  availableSeat: {
    backgroundColor: 'green',
  },
  bookedSeat: {
    backgroundColor: 'gray',
  },
  seatText: {
    color: 'white',
  },
});

export default Account;
