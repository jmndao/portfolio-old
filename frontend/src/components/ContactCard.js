import { Space } from "antd";
import React from "react";

const ContactCard = (Icon, title, text) => {
    
    const IconText = ({ Icon, text }) => (
        <Space>
            {React.createElement(Icon)}
            {text}
        </Space>
    );

    return (
        <div className="contact-card">
            <div className="contact-card-header">
                <IconText 
                    Icon={Icon}
                    text={title}
                />
            </div>
            <div className="contact-card-content">
                {text}
            </div>
        </div>
    )
}

export default ContactCard
