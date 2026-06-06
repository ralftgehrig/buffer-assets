export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>🖼️ Asset Host</h1>
      <p>Assets are served from <code>/assets/filename.ext</code></p>
      <p>Example: <code>https://your-domain.vercel.app/assets/image.png</code></p>
    </main>
  );
}
