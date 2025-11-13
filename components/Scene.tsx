import type { FC } from "react";

const birds = [
  { delay: "animation-delay-1000", top: "top-6", left: "left-12", scale: "scale-100" },
  { delay: "animation-delay-2000", top: "top-12", left: "left-24", scale: "scale-125" },
  { delay: "animation-delay-1500", top: "top-10", left: "left-1/2", scale: "scale-90" },
];

const Bird: FC<{ className: string }> = ({ className }) => (
  <div className={`absolute text-sky-900 opacity-80 ${className}`} aria-hidden>
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 20C6 12 12 4 24 4C36 4 42 12 46 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const Scene: FC = () => (
  <section className="relative isolate mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-sunburst px-8 py-14 shadow-softGlow md:px-12 md:py-16">
    <div className="sunbeam" />
    <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="film-grain relative flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-700 shadow-sm backdrop-blur">
            Peaceful • Cinematic
          </span>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-800 md:text-5xl">
            &ldquo;Wow, Ahad! The weather feels so nice today.&rdquo;
          </h1>
          <p className="max-w-xl text-lg text-slate-700 md:text-xl">
            Harm lets the warmth sink in as a soft breeze stirs the trees. Ahad laughs, soaking in the sunlit afternoon. A gentle hush, birdsong, and the golden glow of a day meant for wandering.
          </p>
        </div>
        <div className="glass-card relative flex flex-col gap-4 rounded-2xl p-6 text-slate-700 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/60 shadow-inner">
              <div className="absolute inset-0 animate-[pulse_6s_ease-in-out_infinite] bg-gradient-to-br from-amber-100 via-amber-50 to-slate-200" />
              <div className="relative flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                Harm
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Harm</p>
              <p className="text-base font-medium text-slate-700">
                &ldquo;The sun feels like a soft blanket today.&rdquo;
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/60 shadow-inner">
              <div className="absolute inset-0 animate-[pulse_7s_ease-in-out_infinite] bg-gradient-to-br from-sky-100 via-white to-sky-200" />
              <div className="relative flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                Ahad
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Ahad</p>
              <p className="text-base font-medium text-slate-700">
                &ldquo;Perfect for a walk — let&apos;s follow the path.&rdquo;
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium uppercase tracking-wider text-slate-500">
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
            Sunlit meadow
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
            Gentle breeze
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Birds in chorus
          </span>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-b from-sky-100/80 via-white to-emerald-50 p-6 shadow-2xl">
          <div className="absolute inset-x-10 top-6 h-10 rounded-full bg-gradient-to-r from-white/85 via-white/30 to-white/70 opacity-90 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-b from-sky-dawn via-white to-emerald-100 shadow-inner">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/80 via-white/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-emerald-200/80 via-emerald-100/40 to-transparent" />
            <div className="absolute inset-0">
              <svg
                className="h-full w-full animate-float"
                viewBox="0 0 400 500"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" />
                    <stop offset="100%" stopColor="#fde68a" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="transparent" />
                <path
                  d="M 0 420 Q 100 360 200 420 T 400 420 L 400 500 L 0 500 Z"
                  fill="#a3d9a5"
                  opacity="0.6"
                />
                <path
                  d="M 0 410 Q 110 340 200 410 T 400 410 L 400 500 L 0 500 Z"
                  fill="url(#pathGradient)"
                  opacity="0.9"
                />
                <path
                  d="M 0 310 Q 80 280 180 290 T 400 320 L 400 410 Q 300 380 200 390 T 0 410 Z"
                  fill="#8bc34a"
                  opacity="0.8"
                />
                <path
                  d="M 0 250 Q 140 180 260 210 T 400 250 L 400 320 Q 300 300 200 310 T 0 320 Z"
                  fill="#66bb6a"
                  opacity="0.7"
                />
                <g opacity="0.7">
                  <circle cx="120" cy="140" r="55" fill="#fde68a" />
                  <circle cx="120" cy="140" r="48" fill="#fcd34d" />
                </g>
                <g fill="#ffffff" opacity="0.8">
                  <ellipse cx="230" cy="140" rx="28" ry="12" />
                  <ellipse cx="260" cy="150" rx="32" ry="14" />
                  <ellipse cx="290" cy="135" rx="24" ry="10" />
                </g>
                <g>
                  <path
                    d="M 160 340 Q 170 320 190 320 Q 210 320 220 340 Q 230 360 210 370 Q 190 380 180 370 Q 150 360 160 340 Z"
                    fill="#f3f4f6"
                    opacity="0.9"
                  />
                  <path
                    d="M 220 360 Q 240 340 260 340 Q 280 340 290 360 Q 300 380 280 390 Q 260 400 250 390 Q 220 380 220 360 Z"
                    fill="#e5e7eb"
                    opacity="0.85"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute inset-x-8 bottom-16 flex flex-col gap-4 rounded-3xl bg-white/70 p-6 text-slate-700 shadow-xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Ambient Sound</p>
              <p className="text-lg font-medium text-slate-800">
                Birds chirping softly, leaves rustling, footsteps along a sunlit trail.
              </p>
              <div className="grid gap-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>Light • Natural • Serene</span>
                <span>Golden Hour • Spring Breeze</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-500">
          <span>Sunlight glows softly • Camera tilts skyward</span>
          <span>Peace settles in</span>
        </div>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0">
      {birds.map((bird, index) => (
        <Bird
          key={`bird-${index}`}
          className={`animate-sway ${bird.delay} ${bird.top} ${bird.left} ${bird.scale}`}
        />
      ))}
    </div>
  </section>
);

export default Scene;
