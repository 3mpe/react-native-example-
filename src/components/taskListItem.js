import React from "react";
import { View, Left, Body, Right, Thumbnail, Text } from 'native-base';


const TaskListitem = props =>{
    return (
        <View>
            <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
        </View>
    );
};

export default TaskListitem;