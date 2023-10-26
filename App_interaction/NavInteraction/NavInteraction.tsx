;
import { useNav } from "../../hooks/CustomHooks/useNav";

export  function NavInteraction() {
     const {open,setOpen}= useNav();

    const handleClick = () => {
        setOpen(!open);
      };
    
      const ClickItem = () => {
        setOpen(false);
      };
      
     return {handleClick,ClickItem,open}
    
}
