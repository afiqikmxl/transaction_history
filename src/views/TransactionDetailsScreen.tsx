import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TransactionDetailScreenRouteProp } from '../navigation/types';

const TransactionDetailScreen = ({ navigation }: any) => {
    const route = useRoute<TransactionDetailScreenRouteProp>();
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transaction Details</Text>
            <View style={styles.detailsCard}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{item.date}</Text>

                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{item.description}</Text>

                <Text style={styles.label}>Type:</Text>
                <Text style={[styles.value, item.type === 'credit' ? styles.credit : styles.debit]}>
                    {item.type}
                </Text>

                <Text style={styles.label}>Amount:</Text>
                <Text style={[styles.value, item.type === 'credit' ? styles.credit : styles.debit]}>
                    {item.type === 'credit' ? `+ $${item.amount}` : `- $${item.amount}`}
                </Text>
            </View>

            <Button title="Go Back" onPress={() => navigation.goBack()} color="#007AFF" />
        </View>
    );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    detailsCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
        marginTop: 10,
    },
    value: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    credit: {
        color: 'green',
    },
    debit: {
        color: 'red',
    },
});
