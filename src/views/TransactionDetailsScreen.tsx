import React from 'react';
import { View, Text, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TransactionDetailScreenRouteProp } from '../navigation/types';

const TransactionDetailScreen = ({ navigation }: any) => {
    const route = useRoute<TransactionDetailScreenRouteProp>();
    const { item } = route.params;

    return (
        <View>
            <Text>Date: {item.date}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Amount: {item.amount}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default TransactionDetailScreen;
