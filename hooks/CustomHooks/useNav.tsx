import React, { useState } from 'react'

export  function useNav() {
    const [open, setOpen] = useState<boolean>(false);
    const [navpanier, setNav] = useState<boolean>(false);
    return {open,setOpen,navpanier, setNav}
}
