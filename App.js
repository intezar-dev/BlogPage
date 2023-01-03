import { StyleSheet, Text, View } from 'react-native';
import BlogHeader from './componenet/Blog/BlogHeader/BlogHeader';
import BlogHome from "./componenet/Blog/BlogHome/BlogHome"

export default function App() {
  return (
    <View>
      <BlogHeader />
      <BlogHome />
    </View>
  );
}

const styles = StyleSheet.create({

});
