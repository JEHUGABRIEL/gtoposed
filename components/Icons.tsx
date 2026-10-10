// Petite bibliothèque d'icônes SVG (style du modèle graff-kiehl).
type P = { size?: number; className?: string };
const base = (size: number) => ({ width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, focusable: "false" as const });

export const Facebook = ({ size = 22, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2H7.5v3h2.6V21h3.4z" /></svg>
);
export const LinkedIn = ({ size = 22, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M6.9 8.6H4V20h2.9V8.6zM5.4 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4zM20 13.6c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5 1-2.9 1.6V8.6H10.4V20h2.9v-6.1c0-1.4.6-2.3 1.9-2.3s1.9.8 1.9 2.3V20H20v-6.4z" /></svg>
);
export const Search = ({ size = 20, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.6-3.6" /></svg>
);
export const Chevron = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
);
export const ArrowRight = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
);
export const ArrowUp = ({ size = 14, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
);
export const Clock = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 1.8" strokeLinecap="round" /></svg>
);
export const Close = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const Menu = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Star = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5z" /></svg>
);
export const Google = ({ size = 30, className = "" }: P) => (
  <svg {...base(size)} className={className} viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.2 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.2 5.2C36.9 40.3 44 35 44 24c0-1.2-.1-2.4-.4-3.5z" /></svg>
);
export const Twitter = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M21 6.4c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4 1a3.8 3.8 0 0 0-6.6 3.5A10.9 10.9 0 0 1 3.6 5.3a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.4 3.1 3.8-.6.2-1.2.2-1.8.1a3.8 3.8 0 0 0 3.6 2.6A7.7 7.7 0 0 1 2 18a10.9 10.9 0 0 0 5.9 1.7c7 0 10.9-5.9 10.9-11v-.5c.8-.5 1.4-1.2 1.9-2z" /></svg>
);
export const Chat = ({ size = 24, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5 11.5c0 3.9-3.8 7-8.5 7-.9 0-1.9-.1-2.8-.4L4.5 19.5l1.2-3.2a6.6 6.6 0 0 1-2.2-4.8c0-3.9 3.8-7 8.5-7s8.5 3.1 8.5 7z" /><path d="M8.8 11.5h.01M12 11.5h.01M15.2 11.5h.01" strokeWidth="2.4" /></svg>
);
export const Whatsapp = ({ size = 16, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.3A8.4 8.4 0 1 0 12 3.5zm0 1.6a6.8 6.8 0 0 1 5.7 10.4 6.8 6.8 0 0 1-9.2 2.4l-.4-.2-2.6.8.8-2.5-.2-.4A6.8 6.8 0 0 1 12 5.1zm-3 3.2c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7s1.4-.6 1.6-1.2c.2-.6.2-1.1.1-1.2l-.6-.3-1.9-.9c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.4.3-.7.1a5.6 5.6 0 0 1-2.8-2.4c-.2-.3 0-.5.1-.6l.5-.6.3-.6c.1-.2 0-.4 0-.6l-.8-1.9c-.2-.4-.4-.4-.6-.4z" /></svg>
);
export const Pin = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
export const Phone = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 4h3l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6v3A1.5 1.5 0 0 1 17.5 19 14.5 14.5 0 0 1 5 6.5 1.5 1.5 0 0 1 5.5 4z" /></svg>
);
export const Mail = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
);
export const Compass = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" /></svg>
);
export const Ruler = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><path d="M3 16.5L16.5 3l4.5 4.5L7.5 21z" /><path d="M8 8l2 2M11 5l2 2M5 11l2 2M14 2l2 2" /></svg>
);
export const Truck = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M2.5 6.5h11v10h-11z" /><path d="M13.5 10h4l3 3.5v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
);
export const Quote = ({ size = 26, className = "" }: P) => (
  <svg {...base(size)} className={className} fill="currentColor"><path d="M10 7c-3 0-5 2.2-5 5.2 0 2.7 1.7 4.6 4 4.6.4 0 .8 0 1.1-.1-.5 1.6-1.9 2.8-3.6 3.3l.6 1.7C10.7 20.6 13 17 13 12.6 13 8.9 11.7 7 10 7zm9 0c-3 0-5 2.2-5 5.2 0 2.7 1.7 4.6 4 4.6.4 0 .8 0 1.1-.1-.5 1.6-1.9 2.8-3.6 3.3l.6 1.7c3.6-1.1 5.9-4.7 5.9-9.1C22 8.9 20.7 7 19 7z" /></svg>
);
