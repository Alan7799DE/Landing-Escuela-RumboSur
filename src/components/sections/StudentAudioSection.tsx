import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface AudioTrack {
  id: number;
  name: string;
  description: string;
  audioSrc: string;
}

const audioTracks: AudioTrack[] = [
  {
    id: 1,
    name: "María Gabriela",
    description: "Tren del Cielo",
    audioSrc: "/audio/maria-gabriela-tren-del-cielo.mp3",
  },
  {
    id: 2,
    name: "Adro",
    description: "Madre Mariposa",
    audioSrc: "/audio/adro-madre-mariposa.mp3",
  },
  {
    id: 3,
    name: "Agus",
    description: "De tú a tú",
    audioSrc: "/audio/agus-de-tu-a-tu.mp3",
  },
  {
    id: 4,
    name: "Sofi",
    description: "Uno los dos",
    audioSrc: "/audio/sofi-uno-los-dos.mp3",
  },
];

const AudioCard = ({ track, isPlaying, onToggle }: { 
  track: AudioTrack; 
  isPlaying: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg flex-shrink-0"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          ) : (
            <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground truncate">{track.name}</h3>
          <p className="text-muted-foreground text-sm truncate">{track.description}</p>
        </div>
      </div>
    </div>
  );
};

export const StudentAudioSection = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  const handleToggle = (trackId: number) => {
    // Si hay un audio reproduciéndose y es diferente al clickeado, pausarlo
    if (currentlyPlaying !== null && currentlyPlaying !== trackId) {
      const prevAudio = audioRefs.current[currentlyPlaying];
      if (prevAudio) {
        prevAudio.pause();
        prevAudio.currentTime = 0;
      }
    }

    const audio = audioRefs.current[trackId];
    if (!audio) return;

    if (currentlyPlaying === trackId) {
      audio.pause();
      setCurrentlyPlaying(null);
    } else {
      audio.play();
      setCurrentlyPlaying(trackId);
    }
  };

  const handleAudioEnded = (trackId: number) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null);
    }
  };

  return (
    <>
      <section className="cream-section py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Escuchá a nuestros alumnos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Estos son fragmentos reales grabados por alumnos de la escuela, en distintos niveles y estilos. 
              Cada voz refleja un camino personal de crecimiento, confianza y disfrute.
            </p>
            <p className="text-lg md:text-xl text-foreground mt-4 font-medium">
              Si siempre soñaste con cantar así, este puede ser tu lugar. Animate a descubrir tu propia voz.
            </p>
          </div>

          {/* Audio Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {audioTracks.map((track) => (
              <div key={track.id}>
                <AudioCard
                  track={track}
                  isPlaying={currentlyPlaying === track.id}
                  onToggle={() => handleToggle(track.id)}
                />
                <audio
                  ref={(el) => (audioRefs.current[track.id] = el)}
                  src={track.audioSrc}
                  onEnded={() => handleAudioEnded(track.id)}
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Separador decorativo */}
      <div className="cream-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="h-px bg-border flex-1 max-w-32" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <div className="h-px bg-border flex-1 max-w-32" />
          </div>
        </div>
      </div>
    </>
  );
};
