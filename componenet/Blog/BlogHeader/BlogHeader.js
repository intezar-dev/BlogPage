import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BlogHeader = () => {
    return (
        <View style={styles.b_header}>
            <View style={styles.b_middelStyles}>
                <Text style={styles.leftStyles}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </Text>
                <Text style={styles.bolgStyles}>Blogs</Text>
                <Text style={styles.leftStyles}>
                    <AntDesign name="close" size={24} color="#fff" />
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    b_header: {
        width: "100%",
        height: 137,
        top: 39,
        backgroundColor: "#3B4DB9",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    b_middelStyles: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 39,
        padding: 10,
    },
    leftStyles: {
        width: 30,
        height: 30,
        backgroundColor: "#fff",
        fontWeight: '200',
        opacity: 0.5,
        borderRadius: 50,
    },

    bolgStyles: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "700",
        lineHeight: 26,
        alignItems: 'center',
        fontStyle: 'normal',
        textAlign: 'center',
    }
})

export default BlogHeader;
