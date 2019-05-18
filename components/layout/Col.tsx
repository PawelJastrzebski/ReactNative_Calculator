import React, { Component } from "react";
import { View, StyleSheet, ViewProps } from "react-native";




interface Props extends ViewProps { size?: number }
interface State { }
export default class Col extends Component<Props, State>{

    private style: any;
    private size: number;

    constructor(props: Props) {
        super(props)
        this.size = this.props.size || 1;
        this.createStyle(this.size);
    }


    render() {
        return (
            <View style={[this.style.row, this.props.style]}>
                {this.props.children}
            </View>
        );
    }

    private createStyle = (size: number) => {
        this.style = StyleSheet.create({
            row: { flex: size },
        })

    }

}
