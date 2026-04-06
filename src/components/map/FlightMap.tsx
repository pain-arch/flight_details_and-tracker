"use client";

import { memo, useEffect, useRef } from "react";
import maplibregl, { type Map, type StyleSpecification } from "maplibre-gl";

const MAP_STYLE: StyleSpecification = {
  version: 8,
  glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
  sources: {
    osm: {
      type: "raster",
      tiles: [
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution: "© OpenStreetMap contributors",
    },
  },
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#070b14",
      },
    },
    {
      id: "osm-raster",
      type: "raster",
      source: "osm",
      paint: {
        "raster-brightness-min": 0.15,
        "raster-brightness-max": 0.65,
        "raster-contrast": 0.25,
        "raster-saturation": -0.8,
        "raster-hue-rotate": 195,
      },
    },
  ],
};

function FlightMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: MAP_STYLE,
      center: [0, 20],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 17,
      attributionControl: { compact: true },
      renderWorldCopies: true,
    });

    map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
    mapRef.current = map;

    const handleResize = () => {
      map.resize();
    };

    window.addEventListener("resize", handleResize);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => map.resize());
      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
      <div ref={containerRef} className="w-full h-screen absolute inset-0" />
  );
}

export default memo(FlightMap);
