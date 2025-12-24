'use client';

export default function EnvDebug() {
  return (
    <div style={{ color: 'white', background: 'red', padding: 16 }}>
      <div>SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'undefined'}</div>
      <div>SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'undefined'}</div>
    </div>
  );
}
