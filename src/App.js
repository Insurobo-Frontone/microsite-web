
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import { UserProvider } from './context/UserContext';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/Theme';

import Home from './pages/Home';
import Event from './pages/Event';
import BizSupport from './pages/BizSupport';
import List from './pages/List';
import Login from './pages/Login';
import Register from './pages/Register';
import FindAccount from './pages/FindAccount';
import FreeApply from './pages/FreeApply';
import EditProfile from './pages/EditProfile';
import InsuranceInfo from './pages/InsuranceInfo';
import PrivateRoute from './pages/PrivateRoute';
import PublicRoute from './pages/PublicRoute';
import EditPassword from './pages/EditPassword';
import Policy from './pages/Policy';
import InsuroboCard from './pages/InsuroboCard';
import View from './components/Post/View';
import InsuroboTravel from './pages/InsuroboTravel';
import { TravelPageProvider } from './context/travelPageContext';
import MyViewer from './container/InsuroboTravel/Apply/Step3/MyViewer';
import BiznumWindstorm from './pages/BizNumerWindstorm';
import Staff from './pages/Staff';
import KdbLife from './pages/KdbLife';

// import InsuroboTravelLogin from './pages/InsuroboTravelLogin';
// import { getUser } from './container/Storage/Auth';


function App() {
  // const user = getUser();
  // input창에 기본값이 있는 경우 입력
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      calcPlan: '1',
    }
  });

  const auth = localStorage.getItem("@access-Token");
  
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <FormProvider {...methods}>
          <TravelPageProvider>
            <GlobalStyle />
              <Router>
                <Routes>
                  <Route element={<PublicRoute />}>
                    <Route path='/' element={<Home />} />
                    <Route path='?:category'  element={<Home />} />
                    <Route path='?:page'  element={<Home />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/bizsupport/*' element={<BizSupport />} />
                    <Route path='/bizsupport/:list' element={<List />} />
                    <Route path='/insuranceInfo' element={<InsuranceInfo />} />
                    <Route path='/kdbLife' element={<KdbLife />} />
                    <Route path='/kdbLife?insuType=:name' element={<KdbLife />} />
                    <Route path='/freeApply' element={<FreeApply />} />
                    <Route path='/freeApply?jehuCd=yogiyo' element={<FreeApply />} />
                    <Route path='/freeApply?jehuCd=payco' element={<FreeApply />} />
                    <Route path='/freeApply/bizWindstorm' element={<BiznumWindstorm />} />
                    <Route path='/freeApply/bizWindstorm?jehuCd=yogiyo' element={<BiznumWindstorm />} />
                    <Route path='/freeApply/bizWindstorm?jehuCd=payco' element={<BiznumWindstorm />} />
                    <Route path='/board' element={<View />} />
                    <Route path='/staff' element={<Staff />} />
                    <Route path='/policy/:pagename' element={<Policy />} />
                    <Route path='/insuroboCard' element={<InsuroboCard />} />
                    {/* <Route path='/insuroboTravel' element={<InsuroboTravel />} /> */}
                    <Route path='/insuroboTravel' element={<InsuroboTravel />} />
                    
                    {/* <Route path='/insuroboTravel/apply/myPage/login' element={<InsuroboTravelLogin />} /> */}
                  </Route>
                  <Route element={<PublicRoute auth={auth} restricted />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/login/findAccount' element={<FindAccount />} />
                    <Route path='/register' element={<Register />} />
                  </Route>
                  <Route element={<PrivateRoute auth={auth} />}>
                    <Route path='/myProfile' element={<EditProfile  />} />
                    <Route path='/myProfile/password' element={<EditPassword />} />
                    <Route path='/insuroboTravel/apply/*' element={<InsuroboTravel apply />} />
                    <Route path='/insuroboTravel/apply/myPage' element={<InsuroboTravel apply />} />
                    <Route path='/insuroboTravel/apply/myPage/download' element={<MyViewer />} />
                    <Route path='/insuroboTravel/apply/myPage/download/invoice' element={<MyViewer />} />
                  </Route>
                </Routes>
            </Router>
          </TravelPageProvider>
        </FormProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
