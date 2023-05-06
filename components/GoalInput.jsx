import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import React, {useState} from "react";

const GoalInput = props => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoalText)
        setEnteredGoalText('')
    }



    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/favicon.png')}  style={styles.image}/>
                <TextInput placeholder='Your course goal!' value={enteredGoalText} style={styles.textInput}
                           onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer} >
                    <Button title={enteredGoalText ?  'Add Goal' : 'Close'} onPress={addGoalHandler}/>
                    <Button title='Reset' onPress={props.resetGoalHandler}/>
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonContainer: {
        paddingTop: 30,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#ccc'
    },
})

export default GoalInput