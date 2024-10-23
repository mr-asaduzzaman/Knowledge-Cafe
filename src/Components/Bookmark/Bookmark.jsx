
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark;


    return (
        <div className='bg-sky-300 p-1 m-2 rounded-md'>
            <h2 className='bg-slate-100 p-1 rounded-md'>{title}</h2>
        </div>
    );
};

Bookmark.propsType = {
    bookmark: PropTypes.array
}
export default Bookmark;