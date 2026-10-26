import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AutoSlidingRow = ({
  children,
  speed = 0.8,
  pauseOnHover = true,
  showControls = true,
  className = '',
  gap = 'gap-5',
}) => {
  const scrollRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isTouchingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const step = () => {
      if (container && !isHoveredRef.current && !isTouchingRef.current) {
        // Half width is the point where the duplicated items start
        const halfWidth = container.scrollWidth / 2;

        if (halfWidth > 0) {
          container.scrollLeft += speed;
          if (container.scrollLeft >= halfWidth) {
            container.scrollLeft -= halfWidth;
          }
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const handleScroll = () => {
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [speed]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isHoveredRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isHoveredRef.current = false;
    }
  };

  const handleTouchStart = () => {
    isTouchingRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    // Resume auto sliding after 1.2s of user releasing touch
    resumeTimeoutRef.current = setTimeout(() => {
      isTouchingRef.current = false;
    }, 1200);
  };

  const scrollByAmount = (amount) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative w-full group/slider ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Optional Left Fade Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Optional Right Fade Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Optional Manual Scroll Arrow Left */}
      {showControls && (
        <button
          onClick={() => scrollByAmount(-320)}
          className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-md text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 items-center justify-center transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Optional Manual Scroll Arrow Right */}
      {showControls && (
        <button
          onClick={() => scrollByAmount(320)}
          className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-md text-slate-700 hover:text-blue-600 hover:scale-110 active:scale-95 items-center justify-center transition-all cursor-pointer opacity-0 group-hover/slider:opacity-100"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Continuous Scrolling Single Row Track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 select-none"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Set 1 */}
        <div className={`flex items-stretch ${gap} flex-shrink-0 pr-5`}>
          {children}
        </div>

        {/* Set 2 (Duplicate for Seamless Infinite Loop) */}
        <div
          aria-hidden="true"
          className={`flex items-stretch ${gap} flex-shrink-0 pr-5`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AutoSlidingRow;
