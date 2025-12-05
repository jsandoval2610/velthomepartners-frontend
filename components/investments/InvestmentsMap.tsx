'use client'

import { useEffect, useRef, useState } from 'react'
import type { Deal } from '@/data/deals'

// Use loose typing to avoid adding a maps typings dependency.
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

export function InvestmentsMap({ properties }: { properties: Deal[] }) {
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

        markers = properties.map((p) => {
          return new google.maps.Marker({
            position: { lat: p.lat, lng: p.lng },
            map,
            title: `${p.title} • ${p.location}`,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 7,
              fillColor: '#0B6556',
              fillOpacity: 0.95,
              strokeColor: '#0B6556',
              strokeWeight: 1.5,
            },
          })
        })
      })
      .catch((err) => {
        console.error(err)
        setError('Map failed to load. Check your API key.')
      })

    return () => {
      markers.forEach((m) => m.setMap(null))
      map = null
    }
  }, [properties])

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-[color:var(--brand-tint-2)] ring-1 ring-[color:var(--brand-tint-3)] bg-[color:var(--card)]/90 shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[color:var(--brand)] text-[color:var(--card)]">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-80">Map</div>
            <div className="text-sm sm:text-base font-semibold">Representative Properties</div>
          </div>
          <div className="text-xs text-[color:var(--card)]/85">Google Maps</div>
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
      <p className="mt-3 text-xs text-[color:var(--muted)]">
        Uses the same Google Maps API key; update coordinates in <code className="px-1 py-0.5 rounded bg-black/5 text-[color:var(--ink)]">data/deals.ts</code> if needed.
      </p>
    </div>
  )
}
