import React, { Component } from "react";
import { Modal, List, Avatar } from "antd";
import "./followmodal.css";

class FollowModal extends Component {
  state = {};

  getItemRender = item => {
    console.log(item)
    const listItem = (
      <List.Item
        centered
        className="follow-modal-item"
        onClick={() => this.props.onItemClick(item)}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.profilePic} />}
          title={item.data.username}
          //description={item.data.username}
        />
      </List.Item>
    );

    return listItem;
  };

  render() {
    return (
      <Modal
        visible={this.props.visible}
        title={this.props.title}
        onCancel={this.props.onCancel}
        footer={null}
        width={300}
        centered
      >
        <List
          dataSource={this.props.dataSource}
          renderItem={item => this.getItemRender(item)}
          split={false}
        />
      </Modal>
    );
  }
}

export default FollowModal;
