import AuthSheet from "./AuthSheet";

export default function AuthModal({ open, setOpen, startMode }) {
  if (!open) return null;

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => setOpen(false)}
      />

      {/* sheet */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="relative w-full max-w-md">
          <AuthSheet startMode={startMode} close={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}
