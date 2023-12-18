import {View} from "react-native-ui-lib";
import ComponentOnpressShowList from "Components/ComponentOnpressShowList";

export const TabComponentGrammarN1=({navigation} : any)=>{

    return(
        <View>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 1"} navigation={navigation} page={1} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 2"} navigation={navigation} page={2} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 3"} navigation={navigation} page={3} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 4"} navigation={navigation} page={4} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 5"} navigation={navigation} page={5} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
            <ComponentOnpressShowList name={"Mimikara gramamr N1 page 6"} navigation={navigation} page={6} cate={"Grammar"} level={"N1"} pressToScreen={'GrammarDetails'}></ComponentOnpressShowList>
        </View>
    )
}
