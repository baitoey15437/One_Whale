import React from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';

const MapForm = () => {
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    alert(`Clicked at: ${lat}, ${lng}`);
  };

  return (
    <MapContainer center={[13.736717, 100.523186]} zoom={13} style={{ height: '500px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapEventsHandler handleMapClick={handleMapClick} />
    </MapContainer>
  );
};

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default MapForm;












// import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
// import L from 'leaflet';


// function MapForm() {
//   const handleClick = (e) => {
//     console.log('Latitude:', e.latlng.lat);
//     console.log('Longitude:', e.latlng.lng);
//     // ทำสิ่งที่คุณต้องการกับพิกัดที่ได้จากการคลิกนี้
//   };

//   return (
//     <MapContainer
//       center={[13.736717, 100.523186]} // ตำแหน่งเริ่มต้น
//       zoom={13} // ระดับซูมเริ่มต้น
//       style={{ height: '400px', width: '100%' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <MapClickHandler onClick={handleClick} />
//     </MapContainer>
//   );
// }

// function MapClickHandler({ onClick }) {
//   const map = useMapEvents({
//     click(e) {
//       onClick(e);
//     },
//   });

//   return null;
// }


// export default MapForm;





// import React, { useState } from 'react';

// function MapForm() {
//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);

//     const handleMapClick = (event) => {
//       console.log(event);
//         setLatitude(event.latLng.lat());
//         setLongitude(event.latLng.lng());
//     };

//     return (
//       <div>
//       <h4 className="title-2">Location</h4>
//       <div className="property-details-google-map mb-60">
//           <iframe
//               title="Google Maps"
//               width="100%"
//               height="400"
//               frameBorder="0"
//               src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156978.05156410686!2d100.9505114640181!3d13.72951479998843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU0JzEwLjUiTiAxMDDCsDMzJzQ5LjYiRQ!5e0!3m2!1sth!2sth!4v1644571163363!5m2!1sth!2sth`}
//               allowFullScreen=""
//               loading="lazy"
//           ></iframe>
//           <div
//               className="click-overlay"
//               onClick={handleMapClick}
//               style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   cursor: 'pointer',
//                   backgroundColor: 'rgba(0, 0, 0, 0)',
//                   zIndex: 1,
//               }}
//           ></div>
//       </div>
//       {latitude !== null && longitude !== null && (
//           <div>
//               <p>Latitude: {latitude}</p>
//               <p>Longitude: {longitude}</p>
//           </div>
//       )}
//   </div>
//     );
// }

// export default MapForm;







// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';

// function MapForm() {


//     return (
//       <div>
//         <div className="property-details-google-map mb-60">
//           <iframe
//             src={`https://maps.google.com/maps?q=13.342983624170305,100.99016122676906&hl=es;&t=&z=10&ie=UTF8&iwloc=&output=embed`}
//             width="100%"
//             height="100%"
//             allowFullScreen=""
//           ></iframe>
//         </div>
//       </div>
//     );
// }

// export default MapForm;