import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { bloghomeData } from '../../../utils/constant';

const BlogHome = () => {
    return (
        <View style={styles.b_home}>
            <View style={styles.b_flex}>
                {bloghomeData.map((data) => (
                    <View style={styles.h_box} key={data.id}>
                        <Image source={data.img} style={styles.leftImgBox} />
                        <View style={styles.rightBox}>
                            <Text style={styles.textOne}>{data.days}</Text>
                            <Text style={styles.texttwo}>{data.text}</Text>
                            <View style={styles.textthree}>
                                <Text style={styles.eyeStyles}>
                                    <AntDesign name={data.icon1} size={15} color="red" style={styles.iconOne} />&nbsp;123k
                                </Text>
                                <Text style={styles.msgStyles}>
                                    <AntDesign name={data.icon2} size={15} color="red" />&nbsp;25
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    b_home: {
        width: "100%",
        height:900,
        backgroundColor: "#fff",
        top: 10,
        borderTopLeftRadius:40,
        borderTopRightRadius:30,
    },
    b_flex: {
        width: "100%",
        height:900,
        borderRadius: 5,
        padding: 5,
    },
    h_box: {
        width: "100%",
        height: 170,
        borderRadius: 5,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#737373",
        justifyContent: "space-between",
    },
    leftImgBox: {
        width: 110,
        height: 140,
        borderRadius: 3,
    },
    rightBox: {
        width: 266,
        height: 140,
        backgroundColor: "#fff",
        left: 112,
        top: -140,
    },
    textOne: {
        left: 12,
        fontWeight: "400",
        color: "#102C56",
        top: 13,
        fontSize: 14,
    },
    texttwo: {
        left: 12,
        fontWeight: "500",
        color: "#102C56",
        top: 16,
        fontSize: 16,
        lineHeight: 21,
        fontStyle: "normal",
        color: "#000"
    },
    textthree: {
        width: 200,
        top: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    eyeStyles: {
        width: 100,
        height: 20,
    },
    msgStyles: {
        width: 100,
        height: 20,
    }
})

export default BlogHome;
