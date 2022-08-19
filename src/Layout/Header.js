import React, { useState } from "react";
import { Dropdown, Layout, Menu, Avatar, Button, Drawer } from "antd";
import "./GloballLayout.less";
import images from "../config/images";
import {
    FaUserAlt,
    FaEdit,
    FaCog,
    FaElementor,
    FaSignInAlt,
    FaSignOutAlt,
    FaBars,
} from "react-icons/fa";

const { Header } = Layout;

function HeaderComponent(props) {
    const { windowSize } = props;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const activityMenu = (
        <Menu
            className="activityMenu"
            items={[
                {
                    label: <a href="/">體驗紀錄</a>,
                    key: "experiencerecord",
                },
                {
                    label: <a href="/">共養紀錄</a>,
                    key: "breedrecord",
                },
                {
                    label: "正在共養",
                    key: "breeding",
                },
            ]}
        />
    );
    const requestMenu = (
        <Menu
            className="requestMenu"
            items={[
                {
                    label: <a href="/">我送出的請求</a>,
                    key: "send",
                },
                {
                    label: <a href="/">我收到的請求</a>,
                    key: "receive",
                }
            ]}
        />
    );
    const userMenu = (
        <Menu
            className="userDropdown"
            items={[
                {
                    icon: <FaEdit />,
                    label: "會員資料",
                    key: "memberprofile",
                },
                {
                    icon: <FaElementor />,
                    label: "寵物清單",
                    key: "petlist",
                },
                {
                    icon:
                        localStorage.getItem("token") === null ? (
                            <FaSignInAlt />
                        ) : (
                            <FaSignOutAlt />
                        ),
                    label: (
                        <a href="/login">
                            {localStorage.getItem("token") === null ? "登入" : "登出"}
                        </a>
                    ),
                    key: "signin",
                },
            ]}
        />
    );
    const items = [
        {
            label: "飼主體驗",
            key: "breeder",
        },
        {
            label: "寵物共養",
            key: "pettogether",
        },
        {
            label: (
                <Dropdown overlay={activityMenu} className="activityMenu">
                    <a onClick={(e) => e.preventDefault()}>活動紀錄</a>
                </Dropdown>
            ),
            key: "activity record",
        },
        {
            label: "我的評論",
            key: "Comment",
        },
        {
            label: (
                <Dropdown overlay={requestMenu} className="requestMenu">
                    <a onClick={(e) => e.preventDefault()}>我的請求</a>
                </Dropdown>
            ),
            key: "request",
        }
    ];
    return (
        <div className="header">
            <Header>
                <a href="/" className="logoBlock">
                    <h1 className="title">寵物去哪兒</h1>
                    {/* <img
                        src={images.logo}
                        alt="logo"
                        width={50}
                        height={50}
                        className="logoImage"
                    />
                    <img src={images.logoText} alt="logo" width={80} height={40} /> */}
                </a>

                <Menu mode="horizontal" items={items} className="menuBar" />
                <Dropdown
                    overlay={userMenu}
                    trigger={["click"]}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Avatar size={36} icon={<FaUserAlt />} />
                    </a>
                </Dropdown>
                <Button
                    type="primary"
                    onClick={showDrawer}
                    className={windowSize.width > 992 ? "hide barIcon" : "show barIcon"}>
                    <FaBars />
                </Button>
                <Drawer
                    title={
                        <a href="/" className="logoBlock">
                            <img
                                src={images.logo}
                                alt="logo"
                                width={40}
                                height={40}
                                className="logoImage"
                            />
                            <img src={images.logoText} alt="logo" width={60} height={35} />
                        </a>
                    }
                    placement="right"
                    onClose={onClose}
                    visible={visible}>
                    <Menu mode="vertical" items={items} className="menuBarList" />
                </Drawer>
            </Header>
        </div>
    );
}

export default HeaderComponent;