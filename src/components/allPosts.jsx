import React, { Component } from 'react';
import AllPostsLayout from './allPostsLayout';

class AllPosts extends Component {
    state = {
        posts: [{ 
            id: 1,
            imgSrc: 'https://images.freeimages.com/images/large-previews/efb/eggs-oranges-5-1546938.jpg',
            title: 'Matthew',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 2,
            imgSrc: 'https://images.freeimages.com/images/large-previews/476/chicago-night-traffic-1447010.jpg',
            title: 'Matthew',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 3,
            imgSrc: 'https://images.freeimages.com/images/large-previews/8b0/bed-post-1530404.jpg',
            title: 'Matthew',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 4,
            imgSrc: 'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
            title: 'Matthew',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 5,
            imgSrc: 'https://images.freeimages.com/images/large-previews/efb/eggs-oranges-5-1546938.jpg',
            title: 'User Post',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 6,
            imgSrc: 'https://images.freeimages.com/images/large-previews/476/chicago-night-traffic-1447010.jpg',
            title: 'User Post',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 7,
            imgSrc: 'https://images.freeimages.com/images/large-previews/8b0/bed-post-1530404.jpg',
            title: 'User Post',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }, { 
            id: 8,
            imgSrc: 'https://images.freeimages.com/images/large-previews/24e/halloween-1563652.jpg',
            title: 'User Post',
            publishedAt: '',
            description: 'Matthew is a musician living in Nashville.',
            link: 'https://google.com'
        }]
    };

    render () {
        return (
            <AllPostsLayout posts={this.state.posts} />           
        )
    }
}
export default AllPosts;