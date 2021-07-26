import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me, followLoading, unfollowLoading } = useSelector((state)=>state.user);
    const isFollowing = me?.Followings?.find((v) => v.id === post.User.id);//id?? 내가 로그인하고 내 팔로잉에 있으면
    const onClickButton = useCallback(()=>{
        if (isFollowing){
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            });
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            });
        }
    }, [isFollowing]);

    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'} 
        </Button>
    );//로그인 안한 상태에서 팔로우하면 로그인페이지로 가도록 하자
};

FollowButton.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      content:PropTypes.string,
      User: PropTypes.shape({
        id: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
      }).isRequired,
      Images:PropTypes.string,
      Comments:PropTypes.string
    }).isRequired,
  };

export default FollowButton;