import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList, 'Login'>>();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async () => {
        const optionalConfigObject = {
            title: 'Authenticate',
            imageColor: '#2196F3',
            imageErrorColor: '#ff0000',
            sensorDescription: 'Touch sensor',
            sensorErrorDescription: 'Failed',
            cancelText: 'Cancel',
            fallbackLabel: 'Use Passcode',
        };

        try {
            const success = await TouchID.authenticate('Login using biometrics', optionalConfigObject);
            if (success) {
                setIsAuthenticated(true);
                Alert.alert('Authentication Successful', 'You are now logged in!');
                navigation.replace('TransactionHistory');
            }
        } catch (error) {
            Alert.alert('Authentication Failed', 'Please try again.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Login with Biometrics</Text>
            <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#2196F3', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Authenticate</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
