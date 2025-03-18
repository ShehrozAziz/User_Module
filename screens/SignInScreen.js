import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {
        // Add sign-in logic
        navigation.navigate('MainTabs');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Sign In</Text>

            {/* Display Image */}
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image URL
                style={styles.image}
            />

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setusername}
            />

            {/* Password Input with Show/Hide Button Inside */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    style={styles.showButtonInside}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Text>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.roundButton} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.roundButton, styles.signUpButton]}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={styles.buttonText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#f7f7f7' },

    title: { fontSize: 28, marginBottom: 20, textAlign: 'center', fontWeight: 'bold' }, // Bold title

    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20, // Image spacing
    },

    input: {
        height: 40,
        borderColor: '#22201D',
        borderWidth: 1,
        marginBottom: 8,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,  // Rounded corners
        width: '100%', // Take full width of the parent container
    },

    passwordContainer: {
        position: 'relative', // Relative position for absolute positioning of the show/hide button
        width: '100%',
        marginBottom: 12,
    },

    passwordInput: {
        height: 40,
        borderColor: '#22201D',
        borderWidth: 1,
        padding: 10,
        paddingRight: 60, // Add padding to the right for the show/hide button
        borderRadius: 10,  // Rounded corners
        width: '100%',
    },
    showButtonInside: {
        position: 'absolute',
        right: 15, // Align to the right edge
        top: 0,
        bottom: 0, // Ensure full height coverage
        justifyContent: 'center', // Vertically center the text
        padding: 5,
    },

    buttonContainer: {
        marginTop: 12,  // Space between the inputs and buttons
    },

    roundButton: {
        backgroundColor: '#22201D',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8, // Rounded corners
        marginBottom: 8,  // Space between the buttons
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontStyle: 'bold',
    },


});

export default SignInScreen;
