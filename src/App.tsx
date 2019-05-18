import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Alert, AlertAndroid, ImageSourcePropType, TextBase, TextInput, NativeSyntheticEvent } from 'react-native';
import Row from '../components/layout/Row';
import Col from '../components/layout/Col';
import CalcButton from '../components/CalcButton';
import CalcService from './Servies/CalcService';

interface Props { }
interface State {
    lastOperaion: string,
    result: string
}
export default class App extends Component<Props, State> {


    public state = {
        lastOperaion: "22+10",
        result: "32"
    }

    constructor(props: Props) {
        super(props)

    }
    componentDidMount() {

        CalcService.getResult().subscribe((result) => {
            this.setState({ result: result })
        });

        CalcService.getOperation().subscribe(operation => {
            this.setState({ lastOperaion: operation })
        })
    }

    onClick = (sign: string) => {
        CalcService.passButton(sign);
    }

    render() {
        return (

            <View style={styles.container}>
                <Row size={5} style={styles.white}>
                    <Col>
                        <Row>
                            <Text style={styles.lastOperaion}>{this.state.lastOperaion}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.result}>{this.state.result}</Text>
                        </Row>
                    </Col>
                </Row>
                <Row size={10} style={[styles.grey]}>
                    <Col size={9} style={styles.buttons}>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="1"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="2"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="3"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="4"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="5"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="6"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="7"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="8"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="9"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="."></CalcButton>
                            <CalcButton onPress={this.onClick} sign="0"></CalcButton>
                            <CalcButton onPress={this.onClick} sign="="></CalcButton>
                        </Row>
                    </Col>
                    <Col size={3} style={[styles.dark, styles.buttons]}>
                        <Row>
                            <CalcButton onPress={this.onClick} fontsize="19" sign="DEL"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="/"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="x"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="-"></CalcButton>
                        </Row>
                        <Row>
                            <CalcButton onPress={this.onClick} sign="+"></CalcButton>
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
    },
    lastOperaion: {
        flex: 1,
        fontSize: 30,
        paddingTop: 40,
        paddingRight: 20,
        textAlign: "right",
    },
    result: {
        flex: 1,
        fontSize: 45,
        padding: 20,
        textAlign: "right",
        color: "#585958"
    }
});