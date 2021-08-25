import React, { useCallback, useEffect } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';

const FollowButton = ({ post }) => {
    const dispatch = useDispatch();
    const { me, followLoading, unfollowLoading } = useSelector((state)=>state.user);
    const isFollowing = me?.Followings?.find((v) => v.id === post.User.id);
    

    const onClickButton = useCallback(()=>{
        if (isFollowing){ //내가 post 작성자를 following 하고 있으면
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

    if (me === "" || me === null){
        return null;
    } else {
        if (post.UserId === me.id){
            return null;
        }
    }

    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'} 
        </Button>
    );
};

FollowButton.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content:PropTypes.string,
      User: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nickname: PropTypes.string.isRequired,
      }).isRequired,
      Images:PropTypes.array,
      Comments:PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
  };

export default FollowButton;


/*
@useCallback-[]내부 값이 바뀌면 함수를 재생성, 
@useEffect-[]내부에 넣은 값이 바뀌면 함수 재실행
컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 그리고 업데이트 될 때 (특정 props가 바뀔 때)
deps에 특정 값을 넣게 된다면, 컴포넌트가 처음 마운트 될 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 됩니다.
 */