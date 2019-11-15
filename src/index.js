import search from '../src/pages/search'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';



const main = createStackNavigator({
    Search: {
        screen: search
    }
},
    {
        initialRouteName: 'Search',
    });


export default createAppContainer(createSwitchNavigator({
    main

}
)
);