import React, { useContext } from 'react';

import Container from '../components/container';
import FollowePic from '../components/userPic';
import Follower from '../components/followers'; 



import { context } from '../context';


const Followers = () => {
    const ctx = useContext(context);

    return (
	<FollowePic url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} ></FollowePic>
     
    );

}
//< Follower follower= {ctx.login}>< /Follower>

export default Followers;