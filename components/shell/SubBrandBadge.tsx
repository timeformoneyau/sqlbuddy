interface SubBrandBadgeProps {
  brand?: string;
}

export function SubBrandBadge({ brand = "homestar" }: SubBrandBadgeProps) {
  return (
    <div className="flex flex-col leading-none select-none">
      <div className="flex items-center gap-0.5">
        <span
          className="font-bold text-lg tracking-tight"
          style={{ color: "#1B5EB5" }}
        >
          {brand}
        </span>
        {/* Star icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" className="mb-1">
          <polygon
            points="8,1 9.8,6 15,6 10.9,9.2 12.4,14.5 8,11.5 3.6,14.5 5.1,9.2 1,6 6.2,6"
            fill="#F5A623"
            stroke="#E8941A"
            strokeWidth="0.5"
          />
        </svg>
      </div>
      <span className="text-xs text-gray-500 -mt-0.5">finance</span>
    </div>
  );
}
