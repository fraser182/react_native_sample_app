import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export class Header extends React.Component{

    // we need to initialize state. constructor is called when an instance of
    // our class is created.
    // super provides us access to our parent class
    // we need to set our state this.state
    // we can add more variables in our state
    constructor(props){
        super(props);
        this.state = {isLoggedIn: false}
    }

    toggleUser =()=>{
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn };
        });
    }

    render(){
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style = {styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={ require('./img/Polynesian-Village-Lobby-10.jpg')}
                />

            <Text
                style = {styles.headText}
                onPress={this.toggleUser}>{display}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1,
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: Platform.OS === 'ios' ? "#35605a" : "#342245" ,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined,

    }

});