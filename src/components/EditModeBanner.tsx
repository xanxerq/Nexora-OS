import React, { useState } from 'react';
import { Save, RotateCcw, LogOut, CheckCircle, Edit3, Sparkles } from 'lucide-react';

interface EditModeBannerProps {
  onSave: () => void;
  onReset: () => void;
  onLogout: () => void;
}

export const EditModeBanner: React.FC<EditModeBannerProps> = ({
  onSave,
  onReset,
  onLogout,
}) => {
  const [savedToast, setSavedToast] = useState(false);

  const handleSaveClick = () => {
    onSave();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0369A1] text-white px-4 py-2.5 shadow-[0_4px_25px_rgba(56,189,248,0.5)] border-b-2 border-[#7DD3FC] flex flex-wrap items-center justify-between gap-3 text-xs">
      <div className="flex items-center gap-2 font-bold tracking-wide">
        <span className="p-1 rounded-md bg-[#050811]/40 border border-white/30">
          <Edit3 className="w-3.5 h-3.5 text-white" />
        </span>
        <span className="text-white drop-shadow">MODO EDICIÓN ACTIVO:</span>
        <span className="text-[#E0F2FE] font-mono font-normal hidden sm:inline">
          Sesión autorizada como <strong className="underline">xanxer</strong>. Puedes editar textos directamente.
        </span>
      </div>

      <div className="flex items-center gap-2">
        {savedToast && (
          <span className="flex items-center gap-1 text-white bg-[#050811]/60 px-2.5 py-1 rounded-lg border border-white/40 font-semibold animate-fadeIn">
            <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
            <span>¡Cambios Guardados!</span>
          </span>
        )}

        <button
          onClick={handleSaveClick}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#050811]/70 hover:bg-[#050811] text-[#38BDF8] hover:text-white border border-[#38BDF8]/60 font-bold transition-all cursor-pointer shadow"
        >
          <Save className="w-3.5 h-3.5" />
          <span>Guardar Cambios</span>
        </button>

        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/20 hover:bg-black/40 text-white/90 hover:text-white border border-white/20 font-medium transition-all cursor-pointer"
          title="Restablecer textos por defecto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Restablecer</span>
        </button>

        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EF4444]/80 hover:bg-[#EF4444] text-white font-bold transition-all cursor-pointer ml-1"
          title="Cerrar sesión de edición"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Salir</span>
        </button>
      </div>
    </div>
  );
};
