/* Remonté à chaque navigation : rejoue l'animation fadeUp du prototype. */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="pg">{children}</div>;
}
