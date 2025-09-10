// src/components/Picture.jsx
export default function Picture({
    base,
    width = 1600,
    alt = '',
    className = '',
    imgClass = '',
    loading = 'lazy',
    fetchPriority,
    decoding = 'async',
    onClick,
    sizes, // volitelné, můžeš předat např. "(max-width: 768px) 100vw, 1200px"
  }) {
    const rawPub = process.env.PUBLIC_URL || '';
    const pub = rawPub === '.' ? '' : rawPub; // ← důležité
  
    // Bezpečné „odříznutí“ PUBLIC_URL jen když je na začátku
    let rel = String(base);
    if (pub && rel.startsWith(pub)) rel = rel.slice(pub.length);
    rel = rel.replace(/^\/+/, ''); // bez počátečního /
  
    const noExt = rel.replace(/\.(jpe?g|png)$/i, '');
  
    return (
      <picture className={className}>
        <source type="image/avif" srcSet={`${pub}/optimized/${noExt}-${width}.avif`} sizes={sizes} />
        <source type="image/webp" srcSet={`${pub}/optimized/${noExt}-${width}.webp`} sizes={sizes} />
        <img
          src={`${pub}/${rel}`} // fallback JPG/PNG
          alt={alt}
          className={imgClass}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          onClick={onClick}
        />
      </picture>
    );
  }
  