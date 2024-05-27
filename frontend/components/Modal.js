import { StyleSheet, View, Text, Pressable, Button } from 'react-native';
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { useCallback } from 'react';

const Modal = (props) => {
    const snapPoints = ['90%'];

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    return (
        <BottomSheet
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
            ref={props.bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
        >
            <BottomSheetScrollView contentContainerStyle={{ padding: 20 }}>
                {props.component}
            </BottomSheetScrollView>
        </BottomSheet>

    );
}

export default Modal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

// export default Modal;