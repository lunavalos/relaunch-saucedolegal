const DEFAULT_BACKEND_PORT = '3000';

function getBackendUrl(): string {
  if (process.env.NEXT_PUBLIC_PAYLOAD_URL) {
    return process.env.NEXT_PUBLIC_PAYLOAD_URL;
  }
  if (typeof window !== 'undefined' && window.location) {
    const protocol = window.location.protocol || 'http:';
    const hostname = window.location.hostname || 'localhost';
    return `${protocol}//${hostname}:${DEFAULT_BACKEND_PORT}`;
  }
  return `http://localhost:${DEFAULT_BACKEND_PORT}`;
}

/**
 * Normalizes any image source (Payload Media upload object, local image path, or external URL)
 * into a valid image URL for Next.js and HTML img tags.
 */
export function getMediaUrl(media: any, fallback: string = '/images/33A7570.jpg'): string {
  if (!media) return fallback;

  const backendUrl = getBackendUrl();

  // If it's already a plain string
  if (typeof media === 'string') {
    const trimmed = media.trim();
    if (!trimmed) return fallback;
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    if (trimmed.startsWith('/api/')) return `${backendUrl}${trimmed}`;
    return trimmed;
  }

  // If it's a Payload CMS Media upload object
  if (typeof media === 'object') {
    const rawUrl = media.url || media.sizes?.card?.url || media.sizes?.thumbnail?.url;
    if (rawUrl) {
      if (rawUrl.startsWith('http://') || rawUrl.startsWith('https://')) return rawUrl;
      if (rawUrl.startsWith('/')) return `${backendUrl}${rawUrl}`;
      return `${backendUrl}/${rawUrl}`;
    }
    if (media.filename) {
      return `${backendUrl}/api/media/file/${media.filename}`;
    }
  }

  // If it's a numeric ID (e.g. 3)
  if (typeof media === 'number') {
    return `${backendUrl}/api/media/${media}`;
  }

  return fallback;
}
