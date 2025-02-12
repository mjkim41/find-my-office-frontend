import React from 'react';
import styles from './Button.module.scss';

// children : 아이콘, content : 버튼 내용
const Button = ({children, content, onClick}) => {

    // 버튼의 아이콘은 여기에서 css를 위한 클래스 네임을 지정해야 하므로,
    // React.cloneElement 사용하여 여기서 className 추가
    const ClonedIcon = children ? React.cloneElement(children, {className: `${styles.buttonIcon}`}) : null;

    return (
        <button onClick={onClick} className={styles.button}>
            {ClonedIcon}
            {content}
        </button>
    );
};

export default Button;
