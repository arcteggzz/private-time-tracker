import React, { useEffect, useRef, useState } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface WalkEntry {
  id: number;
  startTime: string;
  endTime: string;
  totalDuration: string;
  averageSpeed: string;
  distanceCovered: string;
  date: string;
  startPointCoordinate: Coordinates;
  endPointCoordinate: Coordinates;
}

const DistanceWalkedTracker: React.FC = () => {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [tracking, setTracking] = useState(false);
  const [timer, setTimer] = useState(0);
  const [watchId, setWatchId] = useState<number | null>(null);
  const [startCoord, setStartCoord] = useState<Coordinates | null>(null);
  const [distance, setDistance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [walkEntry, setWalkEntry] = useState<WalkEntry | null>(null);
  const startTimeRef = useRef<Date | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathRef = useRef<Coordinates[]>([]);

  const toHHMMSS = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const getDistance = (coord1: Coordinates, coord2: Coordinates): number => {
    const toRad = (value: number) => (value * Math.PI) / 180;
    const R = 6371e3; // meters
    const φ1 = toRad(coord1.latitude);
    const φ2 = toRad(coord2.latitude);
    const Δφ = toRad(coord2.latitude - coord1.latitude);
    const Δλ = toRad(coord2.longitude - coord1.longitude);

    const a =
      Math.sin(Δφ / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in meters
  };

  const enableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      () => setLocationEnabled(true),
      () => alert("Location permission denied")
    );
  };

  const startTracking = () => {
    setTracking(true);
    setTimer(0);
    startTimeRef.current = new Date();
    pathRef.current = [];

    const id = navigator.geolocation.watchPosition(
      (pos) => {
        const coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };

        if (!startCoord) setStartCoord(coords);
        pathRef.current.push(coords);

        if (pathRef.current.length > 1) {
          const last = pathRef.current[pathRef.current.length - 2];
          const dist = getDistance(last, coords);
          setDistance((prev) => prev + dist);
        }
      },
      (err) => {
        console.error(err);
        alert("Error tracking location");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );
    setWatchId(id);

    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTracking = () => {
    setShowModal(true);
  };

  const confirmStop = () => {
    const endTime = new Date();
    if (watchId) navigator.geolocation.clearWatch(watchId);
    if (timerRef.current) clearInterval(timerRef.current);

    const endCoord = pathRef.current[pathRef.current.length - 1] || startCoord!;

    const durationSeconds = timer;
    const distanceInKm = distance / 1000;
    const avgSpeed = distanceInKm / (durationSeconds / 3600); // km/hr

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-NG");

    const entry: WalkEntry = {
      id: Date.now(),
      startTime: startTimeRef.current?.toLocaleTimeString("en-NG") || "",
      endTime: endTime.toLocaleTimeString("en-NG"),
      totalDuration: toHHMMSS(durationSeconds),
      averageSpeed: `${avgSpeed.toFixed(2)} km/h`,
      distanceCovered: `${distanceInKm.toFixed(2)} km`,
      date: formattedDate,
      startPointCoordinate: startCoord!,
      endPointCoordinate: endCoord,
    };

    const existing = JSON.parse(localStorage.getItem("walkSessions") || "[]");
    localStorage.setItem("walkSessions", JSON.stringify([...existing, entry]));

    setWalkEntry(entry);
    setShowModal(false);
    setTracking(false);
    setStartCoord(null);
    setDistance(0);
    setTimer(0);
  };

  const resetSession = () => {
    setWalkEntry(null);
  };

  useEffect(() => {
    // Check permission on mount
    navigator.permissions
      ?.query({ name: "geolocation" as PermissionName })
      .then((res) => {
        if (res.state === "granted") setLocationEnabled(true);
      });
  }, []);

  return (
    <div
      className={`w-screen min-h-screen bg-white text-black font-[Inter] p-6 flex items-center justify-center`}
    >
      {!locationEnabled ? (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-lg mb-4">Location Required</p>
          <button
            onClick={enableLocation}
            className="bg-[#6e56b6] text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Enable location
          </button>
        </div>
      ) : walkEntry ? (
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-2">Walk Summary</h2>
          {Object.entries(walkEntry).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col md:flex-row justify-between gap-2"
            >
              <span className="font-medium">{key}:</span>
              <span>
                {typeof value === "object" ? JSON.stringify(value) : value}
              </span>
            </div>
          ))}
          <button
            className="bg-[#6e56b6] text-white px-4 py-2 rounded-lg mt-6 cursor-pointer"
            onClick={resetSession}
          >
            Start New Session
          </button>
        </div>
      ) : tracking ? (
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg">Time: {toHHMMSS(timer)}</p>
          <p className="text-lg">Distance: {(distance / 1000).toFixed(2)} km</p>
          <button
            onClick={stopTracking}
            className="bg-[#6e56b6] text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Stop
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={startTracking}
            className="bg-[#6e56b6] text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Start
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 shadow-lg max-w-sm w-full">
            <p className="mb-4">Are you sure you want to stop tracking?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmStop}
                className="bg-[#6e56b6] text-white px-4 py-2 rounded cursor-pointer"
              >
                Confirm Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistanceWalkedTracker;
