"use client";

import { useRef, useState } from "react";

/*
  Vidéo d'introduction (accueil) — reprend le design du prototype :
  cadre 16:9 arrondi, overlay sombre, bouton play Lime centré.
  Au clic, l'overlay disparaît et la vidéo démarre avec les contrôles natifs.
*/
export default function VideoSection({
  label = "Lancer la vidéo · 7 min",
}: {
  label?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          borderRadius: 28,
          overflow: "hidden",
          background: "#141414",
        }}
      >
      <video
        ref={videoRef}
        src="/videos/mlk-campus-film.mp4"
        poster="/images/video-poster.jpg"
        controls={playing}
        controlsList="nodownload"
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        preload="metadata"
        playsInline
        style={{ display: "block", width: "100%", aspectRatio: "16/9" }}
      />
      {!playing && (
        <button
          onClick={start}
          aria-label="Lancer la vidéo de présentation"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            background:
              "linear-gradient(0deg,rgba(10,10,10,.55),rgba(10,10,10,.25))",
            cursor: "pointer",
            border: "none",
            padding: 0,
            fontFamily: "inherit",
          }}
        >
          <span
            className="lift"
            style={{
              width: 86,
              height: 86,
              borderRadius: "50%",
              background: "#cdf24f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 18px 44px -12px rgba(0,0,0,.5)",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              style={{ marginLeft: 4 }}
            >
              <path d="M6 3.8 20.2 12 6 20.2Z" fill="#141414" />
            </svg>
          </span>
          <span
            style={{
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: ".04em",
            }}
          >
            {label}
          </span>
        </button>
      )}
      </div>
    </div>
  );
}
