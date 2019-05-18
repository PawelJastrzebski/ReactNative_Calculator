import React, { Component, useReducer, Dispatch } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, AlertAndroid, ImageSourcePropType, TextBase, TextInput, NativeSyntheticEvent } from 'react-native';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
import { connect } from 'react-redux';
import CalcButton from '../components/CalcButton';

interface Props {
    text: string,
    counter: number
    increase?: () => void,
    decrease?: () => void
}
interface State { }
export class App extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    }

    onClick = (sign: string) => {
        console.log(sign)
        this.props.increase()
    }

    render() {
        return (

            <View style={styles.container}>
                <Row size={5} style={styles.white}>
                    <Text>{this.props.text}</Text>
                    <Text style={{ fontSize: 20, padding: 20 }} >{this.props.counter}</Text>
                </Row>
                <Row size={10} style={[styles.grey]}>
                    <Col size={9} style={styles.buttons}>
                        <Row>
                            <CalcButton onClick={this.onClick} color="#3E3C3E" sign="1"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="2"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="3"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton color="#3E3C3E" sign="4"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="5"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="6"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton color="#3E3C3E" sign="7"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="8"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="9"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton color="#3E3C3E" sign="."></CalcButton>
                            <CalcButton color="#3E3C3E" sign="0"></CalcButton>
                            <CalcButton color="#3E3C3E" sign="="></CalcButton>
                        </Row>
                    </Col>
                    <Col size={3} style={[styles.dark, styles.buttons]}>
                        <Row>
                            <CalcButton fontsize="19" color="#3E3C3E" sign="DEL"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton color="#3E3C3E" sign="+"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton sign="x"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton sign="-"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton color="#3E3C3E" sign="+"></CalcButton>
                        </Row>
                    </Col>
                    <Col style={styles.green}></Col>
                </Row>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    white: {
        backgroundColor: "#FFFDFF"
    },
    dark: {
        backgroundColor: "#3E3C3E"
    },
    grey: {
        backgroundColor: "#585958"
    },
    green: {
        backgroundColor: "#61DDAF"
    },
    buttons: {
        paddingBottom: 20
    }
});

function mapProps(props: Props): Props {

    console.log(props)
    return {
        text: props.text,
        counter: props.counter,
    }
}

function mapDispatch(dispath: Dispatch<any>) {
    return {
        increase: () => dispath({ type: "increase" }),
        decrease: () => dispath({ type: "decrease" })
    }
}

export default connect(mapProps, mapDispatch)(App)