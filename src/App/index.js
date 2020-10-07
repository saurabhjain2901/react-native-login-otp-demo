
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn'
import Splash from '../screens/Splash'
import OtpScreen from '../screens/OtpScreen';
import HomeScreen from '../screens/Home'
import { AuthContext } from '../App/context'

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const RootStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
  </HomeStack.Navigator>
)

const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="SignIn" component={SignIn} options={{title: 'Sign In'}}/>
    <AuthStack.Screen name="Otp" component={OtpScreen} options={{title: 'Otp'}}/>
  </AuthStack.Navigator>
)

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={HomeScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen}
        options={{
          animationEnabled: false
        }}
      />
      )
      
    }
  </RootStack.Navigator>
)

const AppInsider = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false)
        setUserToken('dsf')
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      }
    }
  }, [])

  React.useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false)
    }, 1000);
  }, []);

    if(isLoading) {
      return <Splash />
    }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default AppInsider;