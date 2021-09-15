import React, { useState, useCallback, useEffect }from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Popover, Button, List, Comment, Avatar } from 'antd';
import { HeartTwoTone, MessageOutlined, EllipsisOutlined, HeartOutlined, RetweetOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';

import PostImages from './PostImages';
import PostCardContent from './PostCardContent';
import CommentForm from './CommentForm';
import FollowButton from './FollowButton';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from '../reducers/post';

const CardWrapper = styled.div`
    margin-bottom: 20px;
`;
const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading, likePostError } = useSelector((state)=>state.post);
    const [ commentFormOpened, setCommentFormOpened ] = useState(false);
    const { me } = useSelector((state) => state.user);
    const id = me?.id; //me 있으면 id 없으면 undefined

    

    const onUnlike = useCallback(()=>{

        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id
        });
    }, [post, id]);

    const onLike = useCallback(() => {
        
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
          type: LIKE_POST_REQUEST,
          data: post.id,
        });

      }, [post, id]);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    },[]);

    const onRemovePost = useCallback(()=>{
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, [post, id]);

    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }

        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [post, id]);
    const liked = post.Likers.find(v=> v.id === id);

    return(
        <CardWrapper key={post.id}>
            <Card
            cover={post.Images[0] && <PostImages images={post.Images}/>}//이미지가 반드시 한개 이상일때 실행된다.
            actions={[
                <RetweetOutlined key="retweet" onClick={onRetweet}/>,
                liked 
                ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                : <HeartOutlined key="heart" onClick={onLike} />,
                <MessageOutlined key="message" onClick={onToggleComment}/>,
                <Popover 
                key="elipsis" 
                content={(
                    <Button.Group>
                        {id && post.User.id === id 
                        ? (
                            <>
                            <Button>수정</Button>
                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                        </>
                        )
                     : <Button>신고</Button>}
                    </Button.Group>
                )}
                >
                    <EllipsisOutlined />
                </Popover>,
            ]}
            extra={<FollowButton post={post} />}
            >
                <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.Retweet ?
                    <>
                    <p>{`${post.User.nickname}님이 리트윗하셨습니다`}</p>
                    <Card
                    cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images}/>}
                    extra={<FollowButton post={post.Retweet} />}
                    >
                        <Card.Meta
                        avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
                        title={post.Retweet.User.nickname}
                        description={<PostCardContent postData={post.Retweet.content}/>}
                        />
                    </Card>
                    </>
                    : <PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <>
                <CommentForm post={post} />
                <List
                header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                itemLayout="horizontal"
                dataSource={post.Comments || []}
                renderItem={(item) => { //item은 post.Comments
                    return(
                    <li>
                        <Comment 
                        author={item.User.nickname}//item.User.nickname
                        avatar={(
                            <Link href={{ pathname: '/user', query: { id: item.User.id }}} as={`/user/${item.User.id}`}>                          
                        <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                        </Link>
                        )}
                        content={item.content}
                        />
                    </li>
                    );
                }
            }
                />                 
                </>
            )}
        </CardWrapper>          
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({ //shape을 이용하면 더 정확하게 prop정의 할수있다.
        id:PropTypes.number,
        User:PropTypes.object,
        content:PropTypes.string,
        createdAt:PropTypes.string,
        Comments:PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.any),
        Likers: PropTypes.arrayOf(PropTypes.object)
    }),
};

export default PostCard;