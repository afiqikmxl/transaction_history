import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type StackParamList = {
    Login: undefined;
    TransactionHistory: undefined;
    TransactionDetail: { item: { id: string; amount: number; date: string; description: string; type: string } };
};

export type TransactionHistoryScreenNavigationProp = NativeStackNavigationProp<StackParamList, 'TransactionHistory'>;
export type TransactionDetailScreenRouteProp = RouteProp<StackParamList, 'TransactionDetail'>;
