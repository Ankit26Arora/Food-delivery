import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Back from '../../Component/Back/index.js';

const Help = () => {
  const faqs = [
    {
      question: 'How can I place an order?',
      answer: 'To place an order, go to the menu section, choose your desired items, add them to the cart, and proceed to checkout.',
    },
    {
      question: 'Can I cancel my order after placing it?',
      answer: 'Yes, you can cancel your order before it is confirmed by the restaurant. Once the order is confirmed, you may need to contact the restaurant directly for cancellation.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order is confirmed and on the way, you will receive a notification with a tracking link. Click on the link to track your order in real-time.',
    },
    {
        question: 'How can I place an order?',
        answer: 'To place an order, go to the menu section, choose your desired items, add them to the cart, and proceed to checkout.',
      },
      {
        question: 'Can I cancel my order after placing it?',
        answer: 'Yes, you can cancel your order before it is confirmed by the restaurant. Once the order is confirmed, you may need to contact the restaurant directly for cancellation.',
      },
      {
        question: 'How do I track my order?',
        answer: 'Once your order is confirmed and on the way, you will receive a notification with a tracking link. Click on the link to track your order in real-time.',
      },
      {
        question: 'How can I place an order?',
        answer: 'To place an order, go to the menu section, choose your desired items, add them to the cart, and proceed to checkout.',
      },
      {
        question: 'Can I cancel my order after placing it?',
        answer: 'Yes, you can cancel your order before it is confirmed by the restaurant. Once the order is confirmed, you may need to contact the restaurant directly for cancellation.',
      },
      {
        question: 'How do I track my order?',
        answer: 'Once your order is confirmed and on the way, you will receive a notification with a tracking link. Click on the link to track your order in real-time.',
      },{
        question: 'How can I place an order?',
        answer: 'To place an order, go to the menu section, choose your desired items, add them to the cart, and proceed to checkout.',
      },
      {
        question: 'Can I cancel my order after placing it?',
        answer: 'Yes, you can cancel your order before it is confirmed by the restaurant. Once the order is confirmed, you may need to contact the restaurant directly for cancellation.',
      },
      {
        question: 'How do I track my order?',
        answer: 'Once your order is confirmed and on the way, you will receive a notification with a tracking link. Click on the link to track your order in real-time.',
      },{
        question: 'How can I place an order?',
        answer: 'To place an order, go to the menu section, choose your desired items, add them to the cart, and proceed to checkout.',
      },
      {
        question: 'Can I cancel my order after placing it?',
        answer: 'Yes, you can cancel your order before it is confirmed by the restaurant. Once the order is confirmed, you may need to contact the restaurant directly for cancellation.',
      },
      {
        question: 'How do I track my order?',
        answer: 'Once your order is confirmed and on the way, you will receive a notification with a tracking link. Click on the link to track your order in real-time.',
      },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Back/>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  faqContainer: {
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Help;
