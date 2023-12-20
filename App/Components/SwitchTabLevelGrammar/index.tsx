import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {TabComponentGrammarN1} from "Components/TabComponentGrammar/indexN1";
import {TabComponentGrammarN2} from "Components/TabComponentGrammar/indexN2";
import {TabComponentGrammarN3} from "Components/TabComponentGrammar/indexN3";
import {TabComponentGrammarN4} from "Components/TabComponentGrammar/indexN4";
import {TabComponentGrammarN5} from "Components/TabComponentGrammar/indexN5";
const Tab = createMaterialTopTabNavigator();

interface props {
    screen : string,
    navigation : any
}
const SwitchTabLevelGrammar = () => {

        return(
            <Tab.Navigator initialRouteName={"N1"}
                           // sceneContainerStyle={{backgroundColor: '#e7eff6' }}
                screenOptions={{
                    tabBarStyle: {backgroundColor: "#2a4d69",
                    },
                    tabBarActiveTintColor: "#fff",
                    tabBarInactiveTintColor: "#000000",
                }
                }

            >
                <Tab.Screen name={"N1"} component={TabComponentGrammarN1}
                />
                <Tab.Screen name={"N2"} component={TabComponentGrammarN2}
                />
                <Tab.Screen name={"N3"} component={TabComponentGrammarN3}
                />
                <Tab.Screen name={"N4"} component={TabComponentGrammarN4}
                />
                <Tab.Screen name={"N5"} component={TabComponentGrammarN5}
                />
            </Tab.Navigator>
        )
}
export default SwitchTabLevelGrammar;
