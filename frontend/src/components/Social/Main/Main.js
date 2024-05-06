import React from 'react'
import './Main.css'
import Sidebar from './Sidebar/Sidebar';
import { Middle } from './Middle/Middle';
import Right from './Right/Right';

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <a href="/" className="profile">
                        <div className="profile-picture">
                            <img src="images/photo_2023-05-22_00-24-38.jpg" alt="" />
                        </div>
                        <div className="handle">
                            <h4>Manpreet Singh</h4>
                            <p className="text-muted">@notyoursingh</p>
                        </div>
                    </a>
                    <Sidebar/>
                    {/* End of sidebar */}
                    <label htmlFor="create-post" className="btn btn-primary">Create Post</label>
                </div>
              <Middle/>
                <Right/>
            </div>
        </main>
    );
};

export default Main;
