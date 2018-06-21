import React from "react";
import { List, ListItem } from 'native-base';


import TaskListitem from "./taskListItem";

const TaskList = props =>{
    return (
        <List>
            <ListItem avatar>
                <TaskListitem />
            </ListItem>
        </List>
    );
};

export default TaskList;