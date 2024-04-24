// GoalScreen.js
import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Pressable, Button } from 'react-native';
import { connect } from 'react-redux';
import globalStyles from '../styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateOfBirthScreen = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", gap: 15 }}>
                <Text onPress={showDatepicker} style={{ fontSize: 20 }}>{date.toLocaleDateString(undefined, options)}</Text>
                <Text onPress={showTimepicker} style={{ fontSize: 20 }}>{date.toLocaleTimeString('en-US')}</Text>

            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="spinner"
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingTop: 20
    },
});

const mapStateToProps = (state) => {
    return {
        isLoading: state.loading.isLoading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateOfBirthScreen);