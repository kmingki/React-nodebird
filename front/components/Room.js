import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, List, Avatar } from 'antd';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const Room = () => {

    return (
        <div>

        <div className="messageTitle" style={{height: "50px", borderBottom: "solid thin #EFEEF5", display: "flex"}}>
            <div style={{width: "600px", display:"flex"}}>
                <div style={{display:"flex", alignItems:"center", flexGrow: "1"}}>
                    <div>
                        <h2 style={{margin:"0"}}>&nbsp;&nbsp;Messages</h2>
                    </div>
                </div>
                <div style={{display:"flex", alignItems:"center", flexGrow: "0"}}>
                    <div>
                        <Button type="text" shape="circle" icon={<PlusOutlined />} style={{margin: "0 15px"}} size="large"></Button>
                    </div>
                </div>
            </div>
        </div>

        <div>
        <List
        itemLayout="vertical"
        dataSource={listData}
        renderItem={item => (
        <List.Item
            key={item.title}>
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            />
        {item.content}
      </List.Item>
      )}
      />
        </div>

        </div>
    );
}

export default Room;
