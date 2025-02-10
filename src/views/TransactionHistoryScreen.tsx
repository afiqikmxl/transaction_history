import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, RefreshControl } from 'react-native';
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
        <View>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { item })}>
                        <Text>{item.date} - {item.description} - {item.type}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default TransactionHistoryScreen;
