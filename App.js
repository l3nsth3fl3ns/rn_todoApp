import {StyleSheet, View, FlatList, Button} from 'react-native';
import React, {useState} from "react";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([])
    const [showModal, setModal] = useState(false)

    const startAddGoalHandler = () => {
        setModal(!showModal)
    }

    const addGoalHandler = (enteredGoalText => {
        if (enteredGoalText !== '') {
            // best practice of updating a state array
            setCourseGoals((currentCourseGoals) => [
                ...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}
            ])
        }
        setModal(false)
    })

    const resetGoalsHandler = () => {
        setCourseGoals([])
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <Button title='Add New Goal' color='#ccc' onPress={startAddGoalHandler}/>
            {showModal && <GoalInput
                addGoalHandler={addGoalHandler}
                resetGoalHandler={resetGoalsHandler}
                visible={showModal}
            />}
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => {
                    {/* itemData is an object holding metadata and object info*/
                    }
                    return (<GoalItem goalText={itemData.item.text}
                                      onDeleteItem={deleteGoalHandler}
                                      id={itemData.item.id}/>)
                }} keyExtractor={(item, index) => {
                    return item.id
                }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#7E244F'
    },
    goalsContainer: {
        flex: 3,
    }
});
