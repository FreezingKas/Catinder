
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import cats from './helpers/cat';

const LEFT = 0;
const RIGHT = 1;

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {card1: cats[0], card2: cats[1],card3: cats[2]}
    }

    card1Swiped(swipeSide) {

        if (swipeSide == LEFT) {
            console.log('CARD 1 DISLIKE');
        } else if (swipeSide == RIGHT) {
            console.log('CARD 1 LIKE')
        }

    }

    card2Swiped(swipeSide) {

        if (swipeSide == LEFT) {
            console.log('CARD 2 DISLIKE');
        } else if (swipeSide == RIGHT) {
            console.log('CARD 2 LIKE')
        }
        
        var i = Math.floor(Math.random()*cats.length);
        this.setState({card1: cats[i]});
        
        
    }

    card3Swiped(swipeSide) {

        if (swipeSide == LEFT) {
            console.log('CARD 3 DISLIKE');
        } else if (swipeSide == RIGHT) {
            console.log('CARD 3 LIKE')
        }

        

        

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <Text style={{marginTop:20}}>{this.state.i}</Text>
                {/* Interface de swipe */}
                <CardStack
                    style={styles.content}
                    loop={true}
                    ref={swiper => {
                        this.swiper = swiper
                    }}
                    onSwipedTop={() => console.log('Swipé au TOP')}
                >
                    <Card style={[styles.card, styles.card1]} onSwipedLeft={() => this.card1Swiped(LEFT)} onSwipedRight={() => this.card1Swiped(RIGHT)} key={this.state.card1.key}>
                        <Image style={{width:"100%", height: "100%"}} source={{uri: this.state.card1.image}}/>
                        <Text style={styles.label}>{this.state.card1.name}</Text>
                    </Card>
                    
                    <Card style={[styles.card, styles.card2]} onSwipedLeft={() => this.card2Swiped(LEFT)} onSwipedRight={() => this.card2Swiped(RIGHT)} key={this.state.card2.key}>
                    <Image style={{width:"100%", height: "100%"}} source={{uri: this.state.card2.image}}/>
                        <Text style={styles.label}>{this.state.card2.name}</Text>
                    </Card>
                    
                    <Card style={[styles.card, styles.card3]} onSwipedLeft={() => this.card3Swiped(LEFT)} onSwipedRight={() => this.card3Swiped(RIGHT)} key={this.state.card3.key}>
                    <Image style={{width:"100%", height: "100%"}} source={{uri: this.state.card3.image}}/>
                        <Text style={styles.label}>{this.state.card3.name}</Text>
                    </Card>
                </CardStack>


                {/* Bouton like et dislike */}
                <View style={styles.footer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.red]} onPress={() => {
                            this.swiper.swipeLeft();
                        }}>
                            <Image source={require('./assets/red.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.orange]} onPress={() => {
                            this.swiper.goBackFromLeft();
                        }}>
                            <Image source={require('./assets/back.png')} resizeMode={'contain'} style={{ height: 32, width: 32, borderRadius: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.green]} onPress={() => {
                            this.swiper.swipeRight();
                        }}>
                            <Image source={require('./assets/green.png')} resizeMode={'contain'} style={{ height: 62, width: 62 }} />
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2',
    },
    content: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 320,
        height: 500,
        backgroundColor: '#FE474C',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        // Pour avoir le border radius sur
        overflow: 'hidden',
        elevation: 14,
        marginTop: 30
        
    },
    card1: {
        backgroundColor: '#FE474C',
    },
    card2: {
        backgroundColor: '#FEB12C',
    },
    card3: {
        backgroundColor: '#8A2BE2',
    },
    label: {
        // position en bas à gauche
        position : 'absolute',
        bottom: 0,
        left: 0,
        marginLeft: 15,
        marginBottom: 10,

        // police
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
        elevation: 14,
        
    },
    orange: {
        height: 40, 
        width: 40,
        borderRadius: 25,
        marginTop: 10
    },
    red: {
        borderRadius: 128
    },
    green: {
        borderRadius: 128
    }

});