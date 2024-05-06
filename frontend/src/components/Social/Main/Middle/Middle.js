import React from 'react'
import yourStoryImage from '../images/photo_2023-05-22_00-24-38.jpg';
import parthImage from '../images/parth.jpg';
import anishaImage from '../images/anisha.jpg';
import chahatImage from '../images/chahat.jpg';
import chakshuImage from '../images/chakshu.jpg';
import chorniImage from '../images/chorni.jpg';
import legendsImage from '../images/legends.jpg';
import user1Image from '../images/photo_2023-05-22_00-24-38.jpg';
import user2Image from '../images/chahat.jpg';

export const Middle = () => {
  return (
    <div className="middle">
    <div className="stories">
        <div className="story">
            <div className="profile-picture">
                <img src={yourStoryImage} alt="" />
            </div>
            <p className="name">Your Story</p>
        </div>
        <div className="story">
            <div className="profile-picture">
                <img src={parthImage} alt="" />
            </div>
            <p className="name">Parth</p>
        </div>
        <div className="story">
            <div className="profile-picture">
                <img src={anishaImage} alt="" />
            </div>
            <p className="name">Anisha</p>
        </div>
        <div className="story">
            <div className="profile-picture">
                <img src={chahatImage} alt="" />
            </div>
            <p className="name">Chahat</p>
        </div>
        <div className="story">
            <div className="profile-picture">
                <img src={ chakshuImage } alt="" />
            </div>
            <p className="name">Chakshu</p>
        </div>
    </div>
    <form action="" className="create-post">
        <div className="profile-picture">
            <img src="images/photo_2023-05-22_00-24-38.jpg" alt="" />
        </div>
        <input type="text" placeholder="What's on your mind?" id="create-post" />
        <input type="submit" value="Post" className="btn btn-primary" />
    </form>
    {/* Feeds */}
    <div className="feeds">
        {/* Sample Feed 1 */}
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-picture">
                        <img src={chorniImage} alt="" />
                    </div>
                    <div className="info">
                        <h3>vivianakadivine <span><i className="uil uil-comment-verify"></i></span></h3>
                        <small>Mumbai, 3 MINUTES AGO</small>
                    </div>
                </div>
                <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                </span>
            </div>
            <div className="photo">
                <img src={chorniImage} alt="" />
            </div>
            <div className="action-button">
                <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-alt-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                </div>
                <div className="bookmark"><span><i className="uil uil-bookmark-full"></i></span></div>
            </div>
            <div className="liked-by">
                <span><img src={yourStoryImage} alt="" /></span>
                <span><img src={chahatImage} alt="" /></span>
                <p>Liked by <b>ap.dhillxn</b> and <b>1005740 others</b></p>
            </div>
            <div className="caption">
                <p><b>vivianakadivine</b> What is dead may never die</p>
                <div className="text-muted">View all 57023 comments</div>
            </div>
        </div>
        {/* Sample Feed 2 */}
        <div className="feed">
            <div className="head">
                <div className="user">
                    <div className="profile-picture">
                        <img src="images/chorni.jpg" alt="" />
                    </div>
                    <div className="info">
                        <h3>shelby.inc <span><i className="uil uil-comment-verify"></i></span></h3>
                        <small></small>
                    </div>
                </div>
                <span className="edit">
                    <i className="uil uil-ellipsis-h"></i>
                </span>
            </div>
            <div className="photo">
                <img src={legendsImage} alt="" />
            </div>
            <div className="action-button">
                <div className="interaction-buttons">
                    <span><i className="uil uil-heart"></i></span>
                    <span><i className="uil uil-comment-alt-dots"></i></span>
                    <span><i className="uil uil-share-alt"></i></span>
                </div>
                <div className="bookmark"><span><i className="uil uil-bookmark-full"></i></span></div>
            </div>
            <div className="liked-by">
                <span><img src={yourStoryImage} alt="" /></span>
                <span><img src={chahatImage} alt="" /></span>
                <p>Liked by <b>champagnepapi</b> and <b>235740 others</b></p>
            </div>
            <div className="caption">
                <p><b>shelby.inc</b> Birds born in the cage often don't know to fly</p>
                <div className="text-muted">View all 523 comments</div>
            </div>
        </div>
        {/* More Feeds... */}
    </div>
</div>
  )
}
