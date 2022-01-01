import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

import AssestView from "./AssestView";
import React from 'react';
import {Container} from 'react-bootstrap';
import { AuthProvider } from "../context/Context";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
        <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh"}}>
          <div className="w-100" >
            <Router>
              <AuthProvider>
                <Routes>
                  
                   <Route exact path="/" element={ <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>} />
                   <Route exact path="/update-profile" element={ <PrivateRoute>
                      <UpdateProfile/>
                   </PrivateRoute>} />
                   <Route exact path="/view-assests" element={ <PrivateRoute>
                      <AssestView/>
                   </PrivateRoute>} />
                   <Route  path="/signup" element={<Signup/>}/>
                   <Route  path="/login" element={<Login/>}/>
                   <Route  path="/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
                
              </AuthProvider>
            </Router>
          </div>
      </Container>
    
     )

}

export default App;
