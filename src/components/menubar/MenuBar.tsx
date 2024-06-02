import MenuItem, {MenuItemData, DropdownItem} from "./MenuItem";
import './MenuBar.css';

const MenuBar = () => {

    const menuItems: MenuItemData[] = [
        {
            name: 'File',
            dropdown: [
                { name: 'New', command: 'new', shortcut: 'Ctrl+N' },
                { name: 'Open', command: 'open', shortcut: 'Ctrl+O' },
                { name: 'Save', command: 'save', shortcut: 'Ctrl+S' },
                // Add more dropdown items as needed
            ],
        },
        {
            name: 'Edit',
            dropdown: [
                { name: 'Undo', command: 'undo', shortcut: 'Ctrl+Z' },
                { name: 'Redo', command: 'redo', shortcut: 'Ctrl+Y' },
                // Add more dropdown items as needed
            ],
        },
        {
            name: 'View',
            dropdown: [
                { name: 'Zoom In', command: 'zoomIn', shortcut: 'Ctrl+Plus' },
                { name: 'Zoom Out', command: 'zoomOut', shortcut: 'Ctrl+Minus' },
                // Add more dropdown items as needed
            ],
        },
        // Add more menu items as needed
    ];

    return(
        <div className="menubar">
            <div className="menu-links">
                {menuItems.map((item, index) => {
                    return (
                        <MenuItem key={index} item={item}/>
                    )
                })}
            </div>
            <div className="menu-search">
                <p>Search</p>
            </div>
        </div>
    )
}

export default MenuBar;