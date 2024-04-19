// import axios from "axios"
// import React, { useEffect, useState } from "react"
// import { NavLink } from "react-router-dom"
// import { location } from "../Data"
// import "./style.css"

// const Location = () => {
//   const [propertyList , setPropertyList] = useState([]);

//   useEffect(()=>{
//     axios.get("http://localhost:2000/properties")
//     .then(async(res)=>{
//       const data = await res.data;
//       setPropertyList(data);

//     }).catch((err)=>console.log(err));
//   },[])
//   const map = propertyList.map(data=>{
//     return data.city ;
//   })
//   console.log(map);
//   return (
//     <>
//       <section className='location padding'>
//         <div className='container'>
//         <div className='heading'>
//         <h1>Explore By Location </h1>
//       </div>

//           <div className='content grid3 mtop'>
//             {location.map((item, index) => (
//               <NavLink to={`/filterlocation/${item.name}`} >
//               <div className='box' key={index}>
//                 <img src={item.cover} alt='' />
//                 <div className='overlay'>
//                   <h5>{item.name}</h5>
                  
//                 </div>
//               </div>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Location








import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { location } from "../Data";
import "./style.css";

const Location = () => {
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    // Define a function to fetch data by location
    const fetchDataByLocation = async (location) => {
      try {
        const res = await axios.get(`http://localhost:2000/properties?location=${location}`);
        const data = res.data;
        setPropertyList(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch data for each location
    location.forEach(async (item) => {
      await fetchDataByLocation(item.name);
    });
  }, []);

  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <div className='heading'>
            <h1>Explore By Location </h1>
          </div>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <NavLink to={`/filterlocation/${item.name}`} key={index}>
                <div className='box'>
                  <img src={item.cover} alt='' />
                  <div className='overlay'>
                    <h5>{item.name}</h5>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;







// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { location } from "../Data";
// import "./style.css";

// const Location = () => {
//   const [propertyList, setPropertyList] = useState([]);

//   useEffect(() => {
//     const fetchDataByLocation = async (locationName) => {
//       try {
//         const res = await axios.get(`http://localhost:2000/properties/location/${locationName}`);
//         return res.data; // Return the data
//       } catch (error) {
//         console.log(error);
//         return []; // Return an empty array if there's an error
//       }
//     };

//     const fetchAllData = async () => {
//       const allData = await Promise.all(location.map(async (item) => {
//         const data = await fetchDataByLocation(item.name);
//         return data;
//       }));
//       // Flatten the array of arrays into a single array
//       const flattenedData = allData.flat();
//       setPropertyList(flattenedData);
//     };

//     fetchAllData(); // Call the function to fetch data for all locations
//   }, []);

//   return (
//     <>
//       <section className='location padding'>
//         <div className='container'>
//           <div className='heading'>
//             <h1>Explore By Location </h1>
//           </div>

//           <div className='content grid3 mtop'>
//             {propertyList.map((property, index) => (
//               <NavLink to={`/filterlocation/${property.location}`} key={index}>
//                 <div className='box'>
//                   <img src={property.cover} alt='' />
//                   <div className='overlay'>
//                     <h5>{property.location}</h5>
//                   </div>
//                 </div>
//               </NavLink>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Location;
