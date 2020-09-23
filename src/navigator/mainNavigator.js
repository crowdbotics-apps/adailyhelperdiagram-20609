import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps106977Navigator from '../features/Maps106977/navigator';
import BlankScreen18106954Navigator from '../features/BlankScreen18106954/navigator';
import Settings106921Navigator from '../features/Settings106921/navigator';
import ArticleList106916Navigator from '../features/ArticleList106916/navigator';
import Maps106903Navigator from '../features/Maps106903/navigator';
import ArticleList106898Navigator from '../features/ArticleList106898/navigator';
import Maps106885Navigator from '../features/Maps106885/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps106977: { screen: Maps106977Navigator },
BlankScreen18106954: { screen: BlankScreen18106954Navigator },
Settings106921: { screen: Settings106921Navigator },
ArticleList106916: { screen: ArticleList106916Navigator },
Maps106903: { screen: Maps106903Navigator },
ArticleList106898: { screen: ArticleList106898Navigator },
Maps106885: { screen: Maps106885Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
