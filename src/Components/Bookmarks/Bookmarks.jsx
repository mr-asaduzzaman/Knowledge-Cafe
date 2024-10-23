import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({ bookmarks, markAsRead }) => {
    return (
        <div>
            <h3 className="text-2xl font-bold bg-purple-100 text-blue-500 p-5 m-2 rounded-lg mt-14">Time Reading : {markAsRead}</h3>
            <div className="bg-slate-100 ml-2 pt-2 pl-2 rounded-lg">
                <h1 className="font-bold my-4 ml-3">Bookmarked Blogs : {bookmarks.length} </h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    markAsRead: PropTypes.number
}
export default Bookmarks;