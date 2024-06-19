import { NavigationContainer } from "@react-navigation/native";
import {Products} from "./../Products"
import {Home} from "./../Home"
import {Login} from "./../Login"
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:true}}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Products" component={Products}/>
            </Stack.Navigator>
        </NavigationContainer>
    );   
}
