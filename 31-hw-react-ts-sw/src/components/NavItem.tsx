interface NavItemProps {
    itemTitle: string;
    changePage: (page: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ itemTitle, changePage }) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    )
}

export default NavItem