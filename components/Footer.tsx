export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-center py-6 border-t border-gray-700">
      <p className="text-sm">© {new Date().getFullYear()} CodeCrazy. All rights reserved.</p>
    </footer>
  );
}