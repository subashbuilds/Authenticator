interface LogoProps {
  size?: number
  className?: string
}

/**
 * The app's single logo, everywhere it appears in the UI (the welcome/
 * unlock screens, the documentation screen). This intentionally loads
 * `/public/logo.svg` as an image rather than inlining SVG paths in code,
 * so rebranding the app is a one-file swap — replace `public/logo.svg` —
 * with no code changes required.
 *
 * That same file also drives the browser tab favicon (see index.html).
 * The separate PWA install icons (public/pwa-*.png, apple-touch-icon.png)
 * are raster files at fixed sizes required by the web app manifest for
 * home-screen installs — replace those too (or regenerate them from a new
 * logo.svg) for full consistency after rebranding.
 */
export function Logo({ size = 56, className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      width={size}
      height={size}
      alt="App logo"
      className={className}
      style={{ borderRadius: size * 0.2 }}
    />
  )
}
