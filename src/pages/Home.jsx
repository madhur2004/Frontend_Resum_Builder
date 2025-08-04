import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUserId } from "../redux/userSlice";
import { CgProfile } from "react-icons/cg";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { MdOutlineForward10, MdOutlineReplay10 } from "react-icons/md";
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const userId = useSelector((state) => state.user.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const setMeta = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", setMeta);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    const video = videoRef.current;
    if (video) video.currentTime += 10;
  };

  const handleBackward = () => {
    const video = videoRef.current;
    if (video) video.currentTime -= 10;
  };

  const handleSpeedChange = () => {
    const video = videoRef.current;
    if (video) {
      const nextSpeed = playbackSpeed === 2 ? 1 : playbackSpeed + 0.5;
      video.playbackRate = nextSpeed;
      setPlaybackSpeed(nextSpeed);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const newTime = parseFloat(e.target.value);
    if (video) {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(clearUserId());
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isFullscreen
          ? "bg-black"
          : "bg-gradient-to-br from-blue-100 to-purple-200"
      }`}
    >
      <main className="flex flex-col items-center justify-center flex-grow p-4 sm:p-8">
        <div
          className={`flex ${
            userId
              ? "flex-col items-center justify-center text-center"
              : isFullscreen
              ? "flex-col items-center"
              : "flex-col lg:flex-row-reverse"
          } w-full max-w-7xl gap-6`}
        >
          {/* Video Section */}
          {!userId && (
            <div
              className={`relative mx-auto ${
                isFullscreen
                  ? "w-full h-[90vh]"
                  : "w-full max-w-[460px] h-[360px] sm:h-[380px] lg:h-[400px]"
              } shadow-xl rounded-lg border border-gray-300`}
            >
              <video
                ref={videoRef}
                className="absolute object-cover w-full h-full"
                src="/video/VE_Resume.mp4"
                autoPlay
                loop
                muted={muted}
              />
              {/* Custom Video Controls */}
              <div className="absolute z-10 flex flex-col gap-2 p-2 text-white rounded bottom-3 left-3 right-3 bg-black/40">
                {/* Seek Bar */}
                <div className="flex items-center gap-2 text-xs">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    step="0.1"
                    onChange={handleSeek}
                    className="w-full accent-blue-500"
                  />
                  <span>{formatTime(duration)}</span>
                </div>
                {/* Control Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-lg">
                  <div className="flex items-center gap-2">
                    <button onClick={handleBackward} title="Back 10s">
                      <MdOutlineReplay10 />
                    </button>
                    <button onClick={handlePlayPause} title="Play/Pause">
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                    <button onClick={handleForward} title="Forward 10s">
                      <MdOutlineForward10 />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <button
                      onClick={handleMuteToggle}
                      title={muted ? "Unmute" : "Mute"}
                    >
                      {muted ? <HiVolumeOff /> : <HiVolumeUp />}
                    </button>
                    <button onClick={handleSpeedChange} title="Change Speed">
                      {playbackSpeed}x
                    </button>
                    <button
                      onClick={handleFullscreen}
                      title="Toggle Fullscreen"
                    >
                      {isFullscreen ? <FaCompress /> : <FaExpand />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Text Section */}
          <div
            className={`flex-1 text-center flex flex-col items-center justify-center w-full ${
              userId
                ? "text-gray-800"
                : isFullscreen
                ? "text-white"
                : "lg:text-left"
            }`}
          >
            <CgProfile
              className={`mb-4 text-6xl ${
                isFullscreen
                  ? "text-white"
                  : userId
                  ? "text-blue-700"
                  : "text-blue-600"
              }`}
            />
            <h2
              className={`mb-4 text-4xl font-bold ${
                isFullscreen
                  ? "text-white"
                  : userId
                  ? "text-blue-800"
                  : "text-gray-800"
              } sm:text-5xl`}
            >
              Build Your Resume in Minutes
            </h2>
            <p
              className={`max-w-xl mx-auto mb-4 text-lg ${
                isFullscreen
                  ? "text-gray-300"
                  : userId
                  ? "text-gray-700"
                  : "text-gray-600"
              }`}
            >
              Easily create professional resumes with customizable templates,
              edit your experience and download it as PDF.
            </p>

            {!userId && (
              <>
                <p
                  className={`max-w-2xl mx-auto mb-6 text-base ${
                    isFullscreen ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  To get started, create your account with a secure password.
                  Your resume data will be saved safely for future editing or
                  downloading.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    to="/login"
                    className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="px-6 py-2 text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-50"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
