import React from 'react'

export function scrollToList() {

    const scroll = () => {
        const listElement = document.getElementById('List');
        if (listElement) {
          const offset = 200;
          const tourPosition = listElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: tourPosition,
            behavior: 'smooth'
          });
        }
      };

       const functionName = () => {
        
       };
      
      return {scroll}
}
