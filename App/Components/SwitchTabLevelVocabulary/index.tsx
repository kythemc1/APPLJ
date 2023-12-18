import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {TabComponentVocabularyN1} from "Components/TabComponentVoca/indexN1";
import {TabComponentVocabularyN3} from "Components/TabComponentVoca/indexN3";
import {TabComponentVocabularyN2} from "Components/TabComponentVoca/indexN2";
import {TabComponentVocabularyN4} from "Components/TabComponentVoca/indexN4";
import {TabComponentVocabularyN5} from "Components/TabComponentVoca/indexN5";
const Tab = createMaterialTopTabNavigator();
const SwitchTabLevelVocabulary = () => {

        return(
            <Tab.Navigator initialRouteName={"N1"}
                screenOptions={{
                    tabBarStyle: {backgroundColor: "#2a4d69",
                    },
                    tabBarActiveTintColor: "#fff",
                    tabBarInactiveTintColor: "#000000",
                }
                }

            >
                <Tab.Screen name={"N1"} component={TabComponentVocabularyN1}
                />
                <Tab.Screen name={"N2"} component={TabComponentVocabularyN2}
                />
                <Tab.Screen name={"N3"} component={TabComponentVocabularyN3}
                />
                <Tab.Screen name={"N4"} component={TabComponentVocabularyN4}
                />
                <Tab.Screen name={"N5"} component={TabComponentVocabularyN5}
                />
            </Tab.Navigator>
        )
}
export default SwitchTabLevelVocabulary;
