import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, RefreshControl, StyleSheet } from 'react-native';
import { transactions } from '../data/transactions';
import { useNavigation } from '@react-navigation/native';
import { TransactionHistoryScreenNavigationProp } from '../navigation/types';

const TransactionHistoryScreen = () => {
    const navigation = useNavigation<TransactionHistoryScreenNavigationProp>();
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transaction History</Text>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.transactionItem} onPress={() => navigation.navigate('TransactionDetail', { item })}>
                        <View>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <Text style={[styles.amount, item.type === 'credit' ? styles.credit : styles.debit]}>
                            {item.type === 'credit' ? `+ $${item.amount}` : `- $${item.amount}`}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TransactionHistoryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    transactionItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 3,
    },
    date: {
        fontSize: 14,
        color: '#888',
    },
    description: {
        fontSize: 16,
        fontWeight: '600',
    },
    amount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    credit: {
        color: 'green',
    },
    debit: {
        color: 'red',
    },
});

