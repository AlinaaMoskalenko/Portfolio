import * as React from 'react';
import { Component } from 'react';
import { GlobalSidebar } from '../../common/components/global-sidebar/GlobalSidebar.jsx';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            sidebar_menu: [
                {
                    title: 'Home page',
                    href: '/WA/index.html',
                    // href: 'index.html',
                },
                {
                    title: 'Users comments',
                    href: '/WA/comment_page.html',
                    // href: 'comment_page.html',
                },
                {
                    title: 'Mac',
                    href: 'https://www.apple.com/mac/',
                },
                {
                    title: 'iPhone',
                    href: 'https://www.apple.com/iphone/',
                },
                {
                    title: 'Watch',
                    href: 'https://www.apple.com/watch/',
                },
                {
                    title: 'Music',
                    href: 'https://www.apple.com/music/',
                },
                {
                    title: 'Support',
                    href: 'https://support.apple.com/',
                },
            ],
        };
    }
    render() {
        return <GlobalSidebar links={this.state.sidebar_menu} />
    }
}