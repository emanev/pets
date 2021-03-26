import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Repties">Reptiles</NavLink></li>
                <li><NavLink to="/categories/other">Other</NavLink></li>
            </ul>

            <style jsx>{`
                .active {
                    background-color: lightgreen !important;
                }
            `}</style>
        </nav>
    );
};

export default CategoryNavigation;