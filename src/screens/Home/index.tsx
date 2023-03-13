import { Image, Text, StyleSheet, TouchableOpacity, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Image style={ styles.primeLogoImg } source={ PrimeVideoLogo }/>
                <Image style={ styles.amazonLogoImg } source={ AmazonLogo } />
            </View>

            <View style={ styles.category }>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Kids</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232f3e",
        alignItems: "flex-start"
    },
    header: {
        width: "100%",
        padding: 80,
        alignItems: "center",
        justifyContent: "center",

    },
    primeLogoImg: {

    },
    amazonLogoImg: {
        marginTop: -32
    },
    category: {
        
    },
})