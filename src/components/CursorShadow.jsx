import { useEffect, useRef } from "react";

export default function CursorShadow() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({
    dx: 0,
    dy: 0,
    rx: 0,
    ry: 0,
    tx: 0,
    ty: 0,
    visible: false
  });

  useEffect(() => {
    const show = () => {
      pos.current.visible = true;
      if (dot.current && ring.current) {
        dot.current.style.opacity = 1;
        ring.current.style.opacity = 1;
      }
    };

    const hide = () => {
      pos.current.visible = false;
      if (dot.current && ring.current) {
        dot.current.style.opacity = 0;
        ring.current.style.opacity = 0;
      }
    };

    const move = e => {
      if (!pos.current.visible) {
        show();
      }
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };

    const handleWindowOut = e => {
      if (!e.relatedTarget && !e.toElement) {
        hide();
      }
    };

    const updateInstant = () => {
      if (!pos.current.visible || !dot.current || !ring.current) {
        return;
      }

      pos.current.dx = pos.current.tx;
      pos.current.dy = pos.current.ty;
      pos.current.rx = pos.current.tx;
      pos.current.ry = pos.current.ty;
      dot.current.style.transform = `translate3d(${pos.current.dx}px, ${pos.current.dy}px, 0) translate(-50%, -50%)`;
      ring.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      if (pos.current.visible && dot.current && ring.current) {
        pos.current.dx += (pos.current.tx - pos.current.dx) * 0.20;
        pos.current.dy += (pos.current.ty - pos.current.dy) * 0.20;
        pos.current.rx += (pos.current.tx - pos.current.rx) * 0.08;
        pos.current.ry += (pos.current.ty - pos.current.ry) * 0.08;

        dot.current.style.transform = `translate3d(${pos.current.dx}px, ${pos.current.dy}px, 0) translate(-50%, -50%)`;
        ring.current.style.transform = `translate3d(${pos.current.rx}px, ${pos.current.ry}px, 0) translate(-50%, -50%)`;
      } 

      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", handleWindowOut);
    window.addEventListener("scroll", updateInstant, { passive: true });

    hide();
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", handleWindowOut);
      window.removeEventListener("scroll", updateInstant);
    };
  }, []);

  return (
    <>
      {/* Core dot */}
      <div
        ref={dot}
        className="
          fixed top-0 left-0
          w-2 h-2
          rounded-full
          bg-gray-800
          pointer-events-none
          z-[9999]
          transition-opacity duration-150
        "
      />

      {/* Sharp ring (crisp like your screenshot) */}
      <div
        ref={ring}
        className="
          fixed top-0 left-0
          w-6 h-6
          rounded-full
          border-2 border-gray-800
          pointer-events-none
          z-[9998]
          transition-opacity duration-150 

        "
      />
    </>
  );
}
