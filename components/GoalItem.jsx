import {Text, View, StyleSheet, Pressable} from "react-native";
import React from "react";

const GoalItem = props => {


    return (

        <View style={styles.goalListItem}>
            <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed ? styles.pressed : null}>
                <Text style={styles.goalListFont}>{props.goalText}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    goalListItem: {

        borderColor: '#ccc',
        marginBottom: 2,

        borderRadius: 5,
        backgroundColor: '#ccc'
    },
    pressed: {
        opacity: 0.5,
        backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: 5,
    },
    goalListFont: {
        fontWeight: 'bold',
        padding: 10,
    }
})

export default GoalItem