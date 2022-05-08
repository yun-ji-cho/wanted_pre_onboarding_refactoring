// const {useState} = React;

// const Dropdown = () => {
//   const [searchBox, setSearchBox] = useState('');

//   const listWrapControl = () => {
//     if(searchBox) setSearchBox('');
//     else setSearchBox('active');
//   };


//   return(
//     <div className="drop_down_container">
//      <button type="button" className="current icon" onClick={listWrapControl}>All Symbols</button>
//      <div className={`list_wrap ${searchBox}`}>
//       <div className="search_box icon">
//         <input type="text" placeholder="Search Symbol"/>
//       </div>
//       <ul className="list">
//         <li>All Symbols</li>
//         <li>BTCUSD.PERP</li>
//         <li>BCHUSD.PERP</li>
//         <li>KWTHJDK.PERP</li>
//         <li>WOGHDJK.PERP</li>
//         <li>VWJORJE.PERP</li>
//         <li>1004ETEWE.PERP</li>
//         <li>QGDGRPG.PERP</li>
//       </ul>
//      </div>
//     </div>
//   )
// };

// export default Dropdown;