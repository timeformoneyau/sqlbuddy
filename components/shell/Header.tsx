export function Header() {
  return (
    <header className="w-full flex-shrink-0" style={{ backgroundColor: "var(--colcap-header)" }}>
      <div className="flex items-stretch">
        {/* ColCap logo block — white inset on left */}
        <div className="flex items-center gap-2 bg-white px-3 py-2">
          {/* Circle emblem */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
            style={{ backgroundColor: "#1B5EB5" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2C7 2 4.5 4 4 7c2-.5 4-1 6-1s4 .5 6 1c-.5-3-3-5-6-5z"
                fill="white"
              />
              <path
                d="M4 7c-.1.4-.2.9-.2 1.3 0 2.5 1.2 4.7 3 6l.5-3.5L4 7z"
                fill="white"
              />
              <path
                d="M16 7l-3.3 3.8.5 3.5c1.8-1.3 3-3.5 3-6 0-.4-.1-.9-.2-1.3z"
                fill="white"
              />
              <path
                d="M7.2 14.3C8 14.8 9 15 10 15s2-.2 2.8-.7l-.5-3.5H7.7l-.5 3.5z"
                fill="white"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-bold text-gray-900 text-base leading-none">ColCap</div>
            <div className="text-gray-500 text-xs mt-0.5">Financial</div>
          </div>
        </div>

        {/* User identity — top-right of header band */}
        <div className="ml-auto flex items-start pt-1 pr-3">
          <span className="text-white text-xs">Michael Reardon [COLCAP]</span>
        </div>
      </div>
    </header>
  );
}
