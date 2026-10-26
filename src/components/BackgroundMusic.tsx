"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Could not play audio:", error);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    void playMusic();
  };

  useEffect(() => {
    const startMusicOnInteraction = () => {
      void playMusic();
      window.removeEventListener("pointerdown", startMusicOnInteraction);
      window.removeEventListener("keydown", startMusicOnInteraction);
    };

    window.addEventListener("pointerdown", startMusicOnInteraction);
    window.addEventListener("keydown", startMusicOnInteraction);

    return () => {
      window.removeEventListener("pointerdown", startMusicOnInteraction);
      window.removeEventListener("keydown", startMusicOnInteraction);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Backgroundmusic.mp3"
        loop
        preload="none"
      />

      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-forest-500/50 bg-black/90 text-forest-400 shadow-lg shadow-forest-950/40 backdrop-blur-md transition hover:scale-105 hover:border-forest-400"
      >
        <span className={`vinyl-record ${isPlaying ? "vinyl-record-playing" : ""}`}>
          <span className="vinyl-label" />
        </span>
      </button>
    </>
  );
}