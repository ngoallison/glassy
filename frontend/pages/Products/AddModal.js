import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import dry from "../../assets/icons/dry-skin.png"
import styles from '../../styles';
import { skinTypes } from '../../Constants'

const AddModal = () => {

    return (
        <View style={{ gap: 20 }}>
            <Text style={styles.headerSans}>Add a Product</Text>

        </View >
    );
}

export default AddModal;

