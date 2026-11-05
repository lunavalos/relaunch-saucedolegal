'use client';

import React from 'react';
import { 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Scale, 
  FileText, 
  HeartHandshake, 
  Landmark, 
  Award, 
  ShieldAlert, 
  Leaf, 
  Globe 
} from 'lucide-react';

const LUCIDE_MAP: Record<string, React.FC<{ className?: string }>> = {
  Briefcase,
  Users,
  ShieldCheck,
  Scale,
  FileText,
  HeartHandshake,
  Landmark,
  Award,
  ShieldAlert,
  Leaf,
  Globe,
};

const LUCIDE_TO_FA: Record<string, string> = {
  Briefcase: 'fa-solid fa-briefcase',
  Users: 'fa-solid fa-users',
  ShieldCheck: 'fa-solid fa-shield-halved',
  Scale: 'fa-solid fa-scale-balanced',
  FileText: 'fa-solid fa-file-lines',
  HeartHandshake: 'fa-solid fa-handshake-angle',
  Landmark: 'fa-solid fa-landmark',
  Award: 'fa-solid fa-award',
  ShieldAlert: 'fa-solid fa-triangle-exclamation',
  Leaf: 'fa-solid fa-leaf',
  Globe: 'fa-solid fa-earth-americas',
};

interface AreaIconProps {
  icon?: string;
  className?: string;
  defaultIcon?: string;
}

/**
 * AreaIcon flexibly parses FontAwesome icon classes, HTML <i> snippets, 
 * or legacy Lucide identifiers and renders the appropriate icon.
 * 
 * Supports:
 * - HTML snippet: `<i class="fa-solid fa-scale-balanced"></i>`
 * - Direct classes: `fa-solid fa-scale-balanced` or `fas fa-scale-balanced`
 * - Short class: `fa-scale-balanced` or `fa-briefcase` (auto-adds `fa-solid`)
 * - Legacy names: `Scale`, `Briefcase`, etc. (maps to equivalent FontAwesome icon)
 */
export function AreaIcon({ icon, className = 'text-xl', defaultIcon = 'fa-solid fa-scale-balanced' }: AreaIconProps) {
  if (!icon || !icon.trim()) {
    return <i className={`${defaultIcon} ${className}`} aria-hidden="true" />;
  }

  const raw = icon.trim();

  // 1. If HTML tag was provided: <i class="fa-solid fa-scale-balanced"></i>
  const classMatch = raw.match(/class=["']([^"']+)["']/i);
  if (classMatch && classMatch[1]) {
    return <i className={`${classMatch[1]} ${className}`} aria-hidden="true" />;
  }

  // 2. If it contains FontAwesome class conventions
  if (
    raw.startsWith('fa-') || 
    raw.includes('fa-') || 
    raw.startsWith('fas ') || 
    raw.startsWith('far ') || 
    raw.startsWith('fab ')
  ) {
    let faClasses = raw;
    // If it's just 'fa-something' without fa-solid/fas/far prefix
    if (
      !faClasses.includes('fa-solid') &&
      !faClasses.includes('fa-regular') &&
      !faClasses.includes('fa-brands') &&
      !faClasses.startsWith('fas') &&
      !faClasses.startsWith('far') &&
      !faClasses.startsWith('fab')
    ) {
      faClasses = `fa-solid ${faClasses}`;
    }
    return <i className={`${faClasses} ${className}`} aria-hidden="true" />;
  }

  // 3. If it's a known legacy Lucide name mapped to FontAwesome
  if (LUCIDE_TO_FA[raw]) {
    return <i className={`${LUCIDE_TO_FA[raw]} ${className}`} aria-hidden="true" />;
  }

  // 4. Lucide component fallback if available
  if (LUCIDE_MAP[raw]) {
    const LucideComponent = LUCIDE_MAP[raw];
    return <LucideComponent className={className} />;
  }

  // 5. Default fallback to FontAwesome
  return <i className={`fa-solid fa-${raw.toLowerCase()} ${className}`} aria-hidden="true" />;
}
