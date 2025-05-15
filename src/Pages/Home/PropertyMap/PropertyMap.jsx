import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const positions = [
  [51.505, -0.09],
  [48.8566, 2.3522],
  [40.7128, -74.006],
  [34.0522, -118.2437],
  [35.6895, 139.6917],
  [37.7749, -122.4194],
  [55.7558, 37.6173],
  [-33.8688, 151.2093],
  [52.52, 13.405],
  [28.6139, 77.209],
];

const PropertyMap = () => (
  <MapContainer
    center={[20, 0]}
    zoom={2}
    scrollWheelZoom={false}
    className="h-full w-full rounded-lg shadow-lg z-0"
  >
    <TileLayer
      attribution='&copy; OpenStreetMap contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {positions.map((pos, index) => (
      <Marker key={index} position={pos}>
        <Popup>Property {index + 1}</Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default PropertyMap;
