
import { FaRegBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead }) => {

    const { cover, author_img, author, posted_date, reading_time, title, hashtags } = blog;
    return (
        <div className='mb-10 bg-blue-100 p-5 rounded-xl'>
            <div className='w-full h-96 mb-2'><img className='w-full rounded-xl' src={cover} alt="" /></div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-14 mr-2 rounded-full' src={author_img} alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold'>{author} </h2>
                        <p> {posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mr-2'>{reading_time} Min read</div>
                    <button className='hover:text-green-600' onClick={() => handleAddToBookmark(blog)}><FaRegBookmark ></FaRegBookmark ></button>
                </div>
            </div>
            <div className='text-4xl my-2 font-bold'>{title}</div>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag} </a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-800 underline mt-2'>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;