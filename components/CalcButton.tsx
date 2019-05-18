import React, { Component } from "react";
import { View, StyleSheet, ViewProps, TouchableOpacity, Text, TouchableHighlight, Button, NativeSyntheticEvent, Animated } from "react-native";
import Col from "./layout/Col";



interface Props extends ViewProps {
    sign: string,
    fontsize?: string,
    onPress?: (sing: string) => void,
}
interface State { opacity: any }
export default class CalcButton extends Component<Props, State>{

    private style: any;
    private fontSize?: number
    private onPress: (sign: string) => void

    constructor(props: Props) {
        super(props)
        this.createStyle();
        this.fontSize = parseInt(this.props.fontsize || "28");
        this.onPress = this.props.onPress || ((e) => {});

        this.state = {
            opacity: new Animated.Value(0)
        }

    }

    onPressHandle = (e: NativeSyntheticEvent<TouchEvent> ) => {
        this.onPress(this.props.sign);

        let time = 100;
        Animated.timing(this.state.opacity, { toValue: 1, duration: time }).start();
        setTimeout(() => {
            Animated.timing(this.state.opacity, { toValue: 0, duration: time }).start();
        }, time)
    }

    render() {
        let { opacity } = this.state;
        return (
            <Col style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity style={[this.style.wrapper]}>
                    <Animated.View style={[this.style.touch, { opacity: opacity }]}></Animated.View>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={0.8} onPress={this.onPressHandle} style={[this.style.wrapper]} >
                    <Text style={[this.style.text, { fontSize: this.fontSize }]}>{this.props.sign}</Text>
                </TouchableOpacity>
            </Col>
        );
    }

    private createStyle = () => {
        this.style = StyleSheet.create({
            wrapper: {
                flex: 1,
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                justifyContent: "center",
                alignItems: "center"
            },
            touch: {
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            text: {
                color: "#aaa"
            }
        })

    }

}
