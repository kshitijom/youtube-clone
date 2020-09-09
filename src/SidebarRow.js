import React from 'react';
import './SidebarRow.css'

function SidebarRow({selected, Icon, title}) {
  return (  
    <div className={`SidebarRow ${selected && 'selected'}`}>
      <Icon className='SidebarRow-icon'/>
      <h2 className='SidebarRow-title'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
