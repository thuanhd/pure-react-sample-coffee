import React from 'react';
import {modal} from "../../common/modal/modal";
import {userInfo} from "../authen/user-info";

import store, {action_SomeoneLogin} from '../authen/user-store';

const loginModal = {
    show() {

        modal.show(({close}) => (
            <div className="login-modal modal">
                Login?

                <div className="" onClick={() => {
                    close();
                    store.dispatch(action_SomeoneLogin({name: "Blah"}));
                    // return userInfo.setUser({name: "Blah"});
                }}>
                    Đừng lo password, bấm đây login luôn
                </div>
            </div>
        ));
    }
};

exports.loginModal = loginModal;