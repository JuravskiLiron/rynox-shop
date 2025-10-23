import type { JSX } from "react";
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)

// src/components/Badge.tsx
type MiniHeadlineProps = {
    title: string;
    sub?: string; // необязательно
  };
  
  export function MiniHeadline({ title, sub }: MiniHeadlineProps): JSX.Element {
    return (
      <div className="mini">
        <h2 className="mini__title">{title}</h2>
        {sub && <p className="mini__sub">{sub}</p>}
      </div>
    );
  }
