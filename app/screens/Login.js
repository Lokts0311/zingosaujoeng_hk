import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Button, TextInput } from 'react-native';

function Login( {navigation} ) {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const login = () => {
        if ( username === 'lokts0311' && password === '19851210') {
            navigation.navigate('Main');
        }
    }
    return (
        <SafeAreaView>
            <Text>Here is Login Page</Text>

            <TextInput
                style={styles.input}
                value={username}
                placeholder="Enter your username"
                onChangeText={text => setUsername(text)}
            />

            
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                placeholder="Enter your password"
                onChangeText={text => setPassword(text)}
            />  

            <Button title='login' onPress={login}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default Login;