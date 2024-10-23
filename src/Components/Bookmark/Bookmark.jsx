
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark
    return (
        <div className='bg-sky-300 p-2 m-2 rounded-lg'>
            <h2 className='bg-slate-100 p-1 rounded-lg'>{title}</h2>
        </div>
    );
};

Bookmark.propsType = {
    Bookmark: PropTypes.array
}
export default Bookmark;