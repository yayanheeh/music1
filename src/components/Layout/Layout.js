import React, {Component} from 'react';
import HeaderApp from '../Header/HeaderApp'
import Category from '../Category/Category'
import styles from './Layout.module.sass'

class Layout extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderApp />
                <Category />
                <div className={styles.layoutContainer}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Layout;