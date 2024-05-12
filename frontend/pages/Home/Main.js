import * as React from 'react';
import { Button, View, Text, Icon } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import CustomDrawer from "./CustomDrawer"
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Products from '../Products/Products';
import Routine from '../Routine/Routine';
import Progress from '../Progress/Progress';
import Guides from '../Guides/Guides';

const Drawer = createDrawerNavigator();

const Main = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            headerStyle: {
                backgroundColor: "#D3EAF9",
                height: 100,
            },
            drawerStyle: {
                backgroundColor: "#ECF7FE",
            },
            drawerItemStyle: {
                borderRadius: 15,
                paddingLeft: 10,
            },
            drawerLabelStyle: {
                fontFamily: "BeVietnamProRegular",
            },
            drawerActiveBackgroundColor: "#8BABC6",
            drawerInactiveTintColor: "black",
            drawerActiveTintColor: "white"
        }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="products" component={Products} />
            <Drawer.Screen name="routine" component={Routine} />
            <Drawer.Screen name="progress" component={Progress} />
            <Drawer.Screen name="guides" component={Guides} />
            <Drawer.Screen name="scan a product" component={Home} />
        </Drawer.Navigator>
    );
}

export default Main;