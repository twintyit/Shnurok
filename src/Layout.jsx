import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/navigation/navbar/Navbar';
import Sidebar from './components/navigation/slidebar/Sidebar';
import Footer from './components/navigation/footer/Footer';
import { useModal } from './components/modal/ModalContext';
import Modal from './components/modal/Modal';
import './Layout.css';

const Layout = ({ children }) => {
    const location = useLocation();

    const { isModalVisible, modalContent, closeModal } = useModal();
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [sidebarContent, setSidebarContent] = useState('');

    useEffect(() => {
        if (location.pathname === '/') {
            console.log('1')
            setSidebarContent('categories');
            setIsSidebarVisible(true);
           
        } else if (location.pathname.startsWith('/cabinet')) {
            console.log('2')
            setSidebarContent('cabinet');
            setIsSidebarVisible(true);
        } else {
            console.log('3')
            setIsSidebarVisible(false);
        }
    }, [location.pathname]);

    return (
        <div className="app-layout">
            <Navbar />
            <div className="container-m">
                <Sidebar isVisible={isSidebarVisible} mode={sidebarContent} />
                <main className="content">
                    {children}
                </main>
                {isModalVisible && (
                    <Modal isVisible={isModalVisible} onClose={closeModal}>
                        {modalContent}
                    </Modal>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
