import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import { useTheme } from "native-base";
import { House, SignOut, Tag } from "phosphor-react-native";
import { Platform } from "react-native";

type AppRoutesType = {
  home: undefined;
  myAds: undefined;
  signOut: undefined
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutesType>;

const { Screen, Navigator } = createBottomTabNavigator<AppRoutesType>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[8],
          paddingTop: sizes[6],
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              weight={focused ? "bold" : "regular"}
              color={focused ? "#3E3A40" : "#9F9BA1"}
              size={32}
            />
          ),
        }}
      />

      <Screen
        name="myAds"
        component={MyAds}
        options={{
          tabBarIcon: ({ focused }) => (
            <Tag
              weight={focused ? "bold" : "regular"}
              color={focused ? "#3E3A40" : "#9F9BA1"}
              size={32}
            />
          ),
        }}
      />

      <Screen
        name="signOut"
        component={MyAds}
        options={{
          tabBarIcon: () => (
            <SignOut
              weight="regular"
              color="#EE7979"
              size={32}
            />
          ),
        }}
      />
    </Navigator>
  );
}
