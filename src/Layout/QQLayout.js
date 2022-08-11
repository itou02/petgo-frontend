import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./GloballLayout.less";
import HeaderComponent from "./Header";
const { Content, Footer } = Layout;

const LayoutWithRoute = () => {
    // const [windowSize, setWindowSize] = useState({
    //     width: undefined,
    //     height: undefined,
    // });
    // useEffect(() => {
    //     function handleResize() {
    //         setWindowSize({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         });
    //     }
    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    return (
        <Layout id="global">
            <HeaderComponent />
            <Content>
                <Outlet />
            </Content>
            <Footer style={{ textAlign: "center" }}>
                &copy; 2022 - 2023 PET GO TO
            </Footer>
        </Layout>
    );
};

export default LayoutWithRoute;