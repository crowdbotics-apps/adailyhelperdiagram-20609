import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView1106997Navigator from '../features/CalendarView1106997/navigator';
import SignIn44106994Navigator from '../features/SignIn44106994/navigator';
import UserProfile5106993Navigator from '../features/UserProfile5106993/navigator';
import NotificationList6106992Navigator from '../features/NotificationList6106992/navigator';
import Dashboard18106991Navigator from '../features/Dashboard18106991/navigator';
import ArticleList106990Navigator from '../features/ArticleList106990/navigator';
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
CalendarView1106997: { screen: CalendarView1106997Navigator },
SignIn44106994: { screen: SignIn44106994Navigator },
UserProfile5106993: { screen: UserProfile5106993Navigator },
NotificationList6106992: { screen: NotificationList6106992Navigator },
Dashboard18106991: { screen: Dashboard18106991Navigator },
ArticleList106990: { screen: ArticleList106990Navigator },
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
