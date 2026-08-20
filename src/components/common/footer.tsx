
export function Footer() {
  return (
    <footer className="mt-auto bg-gray-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 px-4 py-6 text-center sm:px-6 md:flex-row md:gap-4">
        <p className="text-xs text-gray-400 sm:text-sm">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}