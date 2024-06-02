/*  MenuItem.tsx  */

interface DropdownItem {
    name: string;
    command?: string;
    shortcut?: string;
}
  
interface MenuItemData {
    name: string;
    dropdown?: DropdownItem[];
    command?: string;
    shortcut?: string;
}

interface MenuItemProps {
    item: MenuItemData;
}
  
const MenuItem: React.FC<MenuItemProps> = ({item}) => {
    return (
        <div>
            <p>{item.name}</p>
        </div>
    );
}

export default MenuItem;
export type {MenuItemData, DropdownItem}