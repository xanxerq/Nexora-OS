import React, { useState } from 'react';
import { Lock, Key, User, ShieldAlert, CheckCircle, X, Sparkles } from 'lucide-react';
import { verifyAdminCredentials } from '../utils/contentStore';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminCredentials(username, password)) {
      setError(false);
      onLoginSuccess();
      onClose();
    } else {
      setError(true);
      setErrorMessage('Credenciales incorrectas. Acceso restringido al creador Xanxer.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0B192E] border-2 border-[#38BDF8]/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(56,189,248,0.45)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#112240] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#38BDF8]/20">
          <div className="w-12 h-12 rounded-xl bg-[#112240] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.25)]">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">Modo Edición</h3>
            <p className="text-xs text-[#38BDF8] font-mono">Acceso exclusivo para Xanxer</p>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Usuario Creador:</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              placeholder="xanxer"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] text-sm font-mono placeholder:text-[#64748B] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Contraseña Maestra:</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-[#38BDF8]/30 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-[#F8FAFC] text-sm font-mono placeholder:text-[#64748B] outline-none transition-all"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-xl bg-[#EF4444]/15 border border-[#EF4444]/40 text-[#EF4444] text-xs flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#38BDF8] hover:from-[#0369A1] hover:to-[#7DD3FC] text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] border border-[#BAE6FD]/60 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Entrar en Modo Edición</span>
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-[11px] text-[#64748B]">
          Solo el usuario oficial <strong className="text-[#38BDF8]">xanxer</strong> puede desbloquear la edición de contenidos en vivo.
        </p>

      </div>
    </div>
  );
};
