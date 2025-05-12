// components/Map.tsx
"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";

// ✅ MapClickEvent は return null が必要（UI を返さないイベント用コンポーネント）
const MapClickEvent = () => {
  useMapEvent("click", (event) => {
    console.log("クリックした位置:", event.latlng);
  });

  return null; // UIを描画しないので null を返す
};

export default function MapComponent() {
  useEffect(() => {
    // デフォルトアイコンの設定
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    });
  }, []);

  return (
    <MapContainer
      center={[39, 139]}
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[39, 139]}>
        <Popup>ここがスタジアム！</Popup>
      </Marker>

      {/* ✅ 地図クリックイベントを処理 */}
      <MapClickEvent />
    </MapContainer>
  );
}
