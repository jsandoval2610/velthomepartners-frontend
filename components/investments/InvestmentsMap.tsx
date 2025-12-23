'use client'

import { useEffect, useRef, useState } from 'react'
import type { MapProperty } from '@/data/deals'

type GoogleMaps = any

let googleMapsPromise: Promise<GoogleMaps> | null = null

function loadGoogleMaps(apiKey: string) {
  if (typeof window === 'undefined') return Promise.reject(new Error('Window unavailable'))
  if (googleMapsPromise) return googleMapsPromise

  googleMapsPromise = new Promise((resolve, reject) => {
    if ((window as any).google?.maps) {
      resolve((window as any).google)
      return
    }

    const existing = document.getElementById('google-maps-sdk')
    if (existing) {
      existing.addEventListener('load', () => resolve((window as any).google))
      existing.addEventListener('error', () => reject(new Error('Google Maps failed to load')))
      return
    }

    const script = document.createElement('script')
    script.id = 'google-maps-sdk'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
    script.async = true
    script.defer = true
    script.onload = () => resolve((window as any).google)
    script.onerror = () => reject(new Error('Google Maps failed to load'))
    document.head.appendChild(script)
  })

  return googleMapsPromise
}

export function InvestmentsMap({ properties }: { properties: MapProperty[] }) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    if (!key) {
      setError('Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local to load the map.')
      return
    }
    if (!mapRef.current) return

    let map: any = null
    let markers: any[] = []
    let infoWindow: any = null

    loadGoogleMaps(key)
      .then((google) => {
        if (!mapRef.current) return
        const bounds = new google.maps.LatLngBounds()
        properties.forEach((p) => bounds.extend({ lat: p.lat, lng: p.lng }))

        map = new google.maps.Map(mapRef.current, {
          zoom: 4,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            { featureType: 'water', stylers: [{ color: '#dbeff0' }] },
            { featureType: 'landscape', stylers: [{ color: '#f7f4ed' }] },
            { featureType: 'road', stylers: [{ color: '#fdfbf7' }] },
            { featureType: 'poi', stylers: [{ visibility: 'off' }] },
            { featureType: 'transit', stylers: [{ visibility: 'off' }] },
            { featureType: 'administrative', elementType: 'labels.text.fill', stylers: [{ color: '#6c757d' }] },
          ],
        })

        if (!bounds.isEmpty()) {
          map.fitBounds(bounds, { top: 40, bottom: 40, left: 40, right: 40 })
        }

        infoWindow = new google.maps.InfoWindow()

        const markerSvg = `
          <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0B6556" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#0B6556" stop-opacity="0.78" />
              </linearGradient>
            </defs>
            <circle cx="28" cy="28" r="11" fill="url(#grad)" stroke="#0B6556" stroke-width="1.6" />
            <circle cx="28" cy="28" r="17" fill="none" stroke="#0B6556" stroke-opacity="0.35" stroke-width="1.8">
              <animate attributeName="r" values="15;22;15" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.45;0;0.45" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="28" cy="28" r="5" fill="#0B6556" fill-opacity="0.3">
              <animate attributeName="r" values="5;7;5" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.32;0.14;0.32" dur="2.4s" repeatCount="indefinite" />
            </circle>
          </svg>
        `
        const markerIcon = {
          url: `data:image/svg+xml;utf8,${encodeURIComponent(markerSvg)}`,
          scaledSize: new google.maps.Size(34, 34),
          anchor: new google.maps.Point(17, 17),
        }

        markers = properties.map((p) => {
          const title = p.location ? `${p.title} • ${p.location}` : p.title
          const location = p.location ?? 'Location unavailable'
          const marker = new google.maps.Marker({
            position: { lat: p.lat, lng: p.lng },
            map,
            title,
            icon: markerIcon,
            animation: google.maps.Animation.DROP,
          })
          const content = `
            <div style="min-width:180px;max-width:220px;padding:10px 12px;border-radius:14px;background:linear-gradient(135deg,#ffffff,#f4fbf7);box-shadow:0 12px 28px rgba(11,101,86,0.18);border:1px solid rgba(11,101,86,0.16);color:#1f2933;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <div style="width:10px;height:10px;border-radius:999px;background:#0B6556;box-shadow:0 0 0 3px rgba(11,101,86,0.18);"></div>
                <div style="font-weight:700;font-size:13px;letter-spacing:0.01em;color:#0B6556;">${p.title}</div>
              </div>
              <div style="display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border-radius:10px;background:rgba(11,101,86,0.08);color:#0B6556;font-weight:600;font-size:12px;">
                <span style="display:block;">${location}</span>
              </div>
            </div>
          `
          marker.addListener('mouseover', () => {
            infoWindow.setContent(content)
            infoWindow.open({ map, anchor: marker })
          })
          marker.addListener('mouseout', () => infoWindow.close())
          return marker
        })
      })
      .catch((err) => {
        console.error(err)
        setError('Map failed to load. Check your API key.')
      })

    return () => {
      markers.forEach((m) => m.setMap(null))
      if (infoWindow) infoWindow.close()
      map = null
    }
  }, [properties])

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-[color:var(--brand-tint-2)] ring-1 ring-[color:var(--brand-tint-3)] bg-[color:var(--card)]/90 shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[color:var(--brand)] text-[color:var(--card)]">
          <div>
            <div className="text-sm sm:text-base font-semibold">VeltHome Properties</div>
          </div>
        </div>
        <div className="relative h-[380px] sm:h-[440px]">
          <div ref={mapRef} className="absolute inset-0" />
          {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
            <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--card)]/85 backdrop-blur-sm text-center px-6 text-sm text-[color:var(--muted)]">
              Add <code className="px-1 py-0.5 rounded bg-black/5 text-[color:var(--ink)]">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to <code className="px-1 py-0.5 rounded bg-black/5 text-[color:var(--ink)]">.env.local</code> to display the map.
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--card)]/85 backdrop-blur-sm text-center px-6 text-sm text-[color:var(--muted)]">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
