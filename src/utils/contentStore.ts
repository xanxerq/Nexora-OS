export interface NexoraPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  creatorAnnouncement: string;
  announcementActive: boolean;
  systemAboutText: string;
  postInstallNote: string;
  creatorBioText: string;
  downloadVersionText: string;
}

export const DEFAULT_PAGE_CONTENT: NexoraPageContent = {
  heroTitle: 'NEXORA OS',
  heroSubtitle: 'KDE Plasma 6 • Arquitectura Crystalline • Testify AI Integrado',
  heroDescription:
    'La distribución Linux de vanguardia optimizada para desarrolladores, creadores y entusiastas del diseño visual. Construida sobre la solidez de Kubuntu 26.04 con Wayland de baja latencia y compositor translúcido KWin Crystalline.',
  creatorAnnouncement:
    '🚀 Nexora OS 26.04 LTS Release Candidate disponible. ¡Gracias a la comunidad por el apoyo!',
  announcementActive: true,
  systemAboutText:
    'Nexora OS nace de la fusión entre la estabilidad a largo plazo de Kubuntu 26.04 LTS y la vanguardia visual de la Arquitectura Crystalline en KDE Plasma 6 sobre Wayland.',
  postInstallNote:
    'Para que tu escritorio se vea exactamente como en la foto oficial, aplica el tema global Nexora Crystalline, activa el panel flotante y ajusta el desenfoque KWin a 16px.',
  creatorBioText:
    'Creado por Xanxer con el objetivo de ofrecer un sistema operativo Linux rápido, visualmente imponente, 100% privado y libre de telemetría.',
  downloadVersionText: 'Nexora OS 26.04 LTS • ISO Oficial (4.2 GB)',
};

const STORAGE_KEY = 'nexora_custom_content_v1';

export function loadPageContent(): NexoraPageContent {
  if (typeof window === 'undefined') return DEFAULT_PAGE_CONTENT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PAGE_CONTENT;
    return { ...DEFAULT_PAGE_CONTENT, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PAGE_CONTENT;
  }
}

export function savePageContent(content: NexoraPageContent): boolean {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    return true;
  } catch {
    return false;
  }
}

export function resetPageContent(): NexoraPageContent {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }
  return DEFAULT_PAGE_CONTENT;
}

export function verifyAdminCredentials(user: string, pass: string): boolean {
  const cleanUser = user.trim();
  const cleanPass = pass.trim();
  return cleanUser === 'xanxer' && cleanPass === 'oV4rDm2m';
}
