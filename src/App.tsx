import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Provider} from "react-redux";

import IndexPage from "./features/pages/index/IndexPage";
import RegistrationPage from "./features/pages/registration/RegistrationPage";
import LoginPage from "./features/pages/login";
import CompetitionPage from "./features/pages/competition";
import PersonalPage from "./features/pages/personal";
import Header from "./features/common/header";
import Footer from "./features/common/footer";
import styles from './styles.module.css';
import {store} from './app/store';

function App() {
    return (
        <Provider store={store} >
            <div className={styles.root}>
                <Header isLoggedIn={false} />
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/register' element={<RegistrationPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/competitions/arm' element={<CompetitionPage />} />
                    <Route path='/me' element={<PersonalPage />} />
                </Routes>
                <Footer />
            </div>
        </Provider>
    );
}

export default App;
