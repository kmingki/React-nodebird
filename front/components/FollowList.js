import React from 'react';
import PropTypes from 'prop-types';
import { Card, List, Button } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { REMOVE_FOLLOWERS_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';
import { useDispatch } from 'react-redux';

const FollowList = ({ header, data, onClickMore, loading }) => {

  const dispatch = useDispatch();
  const onClickDeleteFollower = (id) =>{

    //팔로잉 취소
    if (header === "팔로잉 목록") {
      return dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
    });
    } else {
      //팔로워 차단
      return dispatch({
        type: REMOVE_FOLLOWERS_REQUEST,
        data: { id }
      });
    }
  };
  
  return(
    <List
      style={{ marginBottom: '20px' }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={<div style={{ textAlign: 'center', margin: '10px 0'}}>
        <Button onClick={onClickMore} loading={loading}>더 보기</Button>
        </div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: '20px' }}>
          <Card actions={[<StopOutlined key="stop" onClick={() => onClickDeleteFollower(item.id)} />]} >
            <Card.Meta description={item.nickname} style={{ fontSize: '12.5px' }}/>
          </Card>
        </List.Item>
      )}
    />
  )
  };
  
  FollowList.propTypes = {
    header: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onClickMore: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };
  
  export default FollowList;