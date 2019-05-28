import React, {Component} from 'react';

class Category extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="http://example.com">Chill</a>
                    </li>
                    <li>
                        <a href="http://example.com">Deep</a>
                    </li>
                    <li>
                        <a href="http://example.com">House</a>
                    </li>
                    <li>
                        <a href="http://example.com">Tech</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Category;