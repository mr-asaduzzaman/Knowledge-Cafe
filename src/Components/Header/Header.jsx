import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='md:flex text-2xl justify-between items-center font-bold  px-5 py-2 bg-slate-300 rounded-lg '>
            <header>Knowledge Cafe</header>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;