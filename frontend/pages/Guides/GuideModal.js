import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import dry from "../../assets/icons/dry-skin.png"
import styles from '../../styles';
import { skinTypes } from '../../Constants'
import Button from '../../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Rating, AirbnbRating } from 'react-native-ratings';
import Tag from '../../components/Tag';


const GuideModal = (props) => {
    return (
        <Text>{props.title}</Text>
    );
}

export default GuideModal;

