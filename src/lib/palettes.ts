export type PaletteKey =
  | 'pitch-gold'
  | 'midnight-electric'
  | 'carbon-red'
  | 'deep-purple-cyan'
  | 'pure-black-gold'
  | 'forest-emerald';

interface Palette {
  label: string;
  pitch: string;
  pitchLight: string;
  pitchLine: string;
  gold: string;
  goldDim: string;
  amber: string;
  cream: string;
  creamMuted: string;
  fire: string;
  surface: string;
  surfaceElevated: string;
  shimmerMid: string;
}

export const PALETTES: Record<PaletteKey, Palette> = {
  'pitch-gold': {
    label: 'Pitch & Gold',
    pitch: '#0a1a0a', pitchLight: '#12261a', pitchLine: '#1e3d2a',
    gold: '#f5c518', goldDim: '#b8960f', amber: '#e8a000',
    cream: '#e8e0d0', creamMuted: '#a89880',
    fire: '#ff4136', surface: '#0f200f', surfaceElevated: '#162a16',
    shimmerMid: '#fcd34d',
  },
  'midnight-electric': {
    label: 'Midnight Electric',
    pitch: '#0a0e1a', pitchLight: '#111827', pitchLine: '#1e2a3f',
    gold: '#3b82f6', goldDim: '#1d4ed8', amber: '#22d3ee',
    cream: '#e2e8f0', creamMuted: '#94a3b8',
    fire: '#f97316', surface: '#0f1626', surfaceElevated: '#161e30',
    shimmerMid: '#93c5fd',
  },
  'carbon-red': {
    label: 'Carbon Red',
    pitch: '#0c0c0c', pitchLight: '#171717', pitchLine: '#2a2a2a',
    gold: '#ef4444', goldDim: '#b91c1c', amber: '#fbbf24',
    cream: '#f0ebe0', creamMuted: '#b8b3a6',
    fire: '#ff4136', surface: '#111111', surfaceElevated: '#1a1a1a',
    shimmerMid: '#f87171',
  },
  'deep-purple-cyan': {
    label: 'Deep Purple & Cyan',
    pitch: '#0d0a1a', pitchLight: '#1a1226', pitchLine: '#2d1f40',
    gold: '#22d3ee', goldDim: '#0891b2', amber: '#a78bfa',
    cream: '#e0d8f0', creamMuted: '#9ca3af',
    fire: '#f97316', surface: '#120f22', surfaceElevated: '#1c1632',
    shimmerMid: '#67e8f9',
  },
  'pure-black-gold': {
    label: 'Pure Black & Gold',
    pitch: '#050505', pitchLight: '#111111', pitchLine: '#222222',
    gold: '#f5c518', goldDim: '#d4a843', amber: '#fbbf24',
    cream: '#e8e8e8', creamMuted: '#888888',
    fire: '#ff4136', surface: '#0c0c0c', surfaceElevated: '#161616',
    shimmerMid: '#fcd34d',
  },
  'forest-emerald': {
    label: 'Forest & Emerald',
    pitch: '#0a1a0f', pitchLight: '#111f15', pitchLine: '#1a3020',
    gold: '#10b981', goldDim: '#059669', amber: '#34d399',
    cream: '#d1fae5', creamMuted: '#6ee7b7',
    fire: '#f97316', surface: '#0f2015', surfaceElevated: '#163022',
    shimmerMid: '#6ee7b7',
  },
};

export function getPaletteCss(key: string): string {
  const p = PALETTES[key as PaletteKey] ?? PALETTES['carbon-red'];
  return `
    --color-pitch: ${p.pitch};
    --color-pitch-light: ${p.pitchLight};
    --color-pitch-line: ${p.pitchLine};
    --color-gold: ${p.gold};
    --color-gold-dim: ${p.goldDim};
    --color-amber: ${p.amber};
    --color-cream: ${p.cream};
    --color-cream-muted: ${p.creamMuted};
    --color-fire: ${p.fire};
    --color-surface: ${p.surface};
    --color-surface-elevated: ${p.surfaceElevated};
    --shimmer-mid: ${p.shimmerMid};
  `.trim();
}
