import React, { Suspense, lazy, useEffect, useRef, useState } from "react";

// The editor (CodeMirror), the YAML parser and the xhandler core (~1 MB compressed)
// are only downloaded when the playground is about to scroll into view.
const Playground = lazy(() => import("./Playground"));

function Placeholder() {
  return (
    <div aria-hidden="true">
      <div className="mb-5 flex flex-wrap gap-2">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="h-[34px] w-28 rounded-full bg-grey-200 dark:bg-surface-4" />
        ))}
      </div>
      <div className="h-[805px] rounded-2xl bg-neutral-900 lg:h-[530px]" />
    </div>
  );
}

export default function LazyPlayground() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={<Placeholder />}>
          <Playground />
        </Suspense>
      ) : (
        <Placeholder />
      )}
    </div>
  );
}
